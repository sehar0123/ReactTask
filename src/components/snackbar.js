import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import {Snackbar} from 'react-native-paper';

import {theme} from 'src/Core/Theme';

const RNSnackbar = () => {
  const [visible, setVisible] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const [config, setConfig] = React.useState({});
  const onDismissSnackBar = () => setVisible(false);
  React.useEffect(() => {
    let listeners = EventRegister.addEventListener(
      'snackbar',
      ({data, config: snackConfig}) => {
        setMsg(JSON.stringify(data, null, 1).split('"').join(''));
        setVisible(true);
        setConfig(snackConfig);
      },
    );
    return () => listeners;
  }, []);
  return (
    <View>
      <Snackbar
        visible={visible}
        duration={2500}
        onDismiss={onDismissSnackBar}
        style={{
          backgroundColor: config?.backgroundColor || theme.primary,
        }}
        action={{
          loading: false,
          // icon: () => (
          //   <Entypo name="cross" color="white" size={22 * heightRef} />
          // ),

          onPress: () => {},
          ...config,
        }}>
        {msg}
      </Snackbar>
    </View>
  );
};
export default RNSnackbar;

const styles = StyleSheet.create({});
