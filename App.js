import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {BackHandler} from 'react-native';
import MainStack from './src/Navigations/MainStack';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RNSnackbar from 'src/components/snackbar';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

import {persistor, store} from 'src/redux/ConfigureStore';

import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import Nointernet from 'src/Screens/NoInternet';

import {MenuProvider} from 'react-native-popup-menu';
import Alert from 'src/components/Alert';
LogBox.ignoreAllLogs();
const App = ({navigation}) => {
  const netInfo = useNetInfo();
  const [isModalVisible, setModalVisible] = useState(false);
  const [network, setNetwork] = useState('');
  useEffect(() => {
    SplashScreen.hide();
    console.log(netInfo.type);
  }, []);
  useEffect(() => {
    const backAction = () => {
      // Alert.alert('', 'Are you sure you want to close application', [
      //   {
      //     text: 'Cancel',
      //     onPress: () => null,
      //     style: 'cancel',
      //   },
      //   {text: 'YES', onPress: () => BackHandler.exitApp()},
      // ]);
      setModalVisible(true);
      console.log('alert');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <MenuProvider>
      <Provider store={store}>
        {netInfo.type == 'none' ? (
          <Nointernet />
        ) : (
          <PersistGate loading={null} persistor={persistor}>
            <MainStack />
            <RNSnackbar />
          </PersistGate>
        )}
        <Alert
          disabled={false}
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          onPress={() => {
            setModalVisible(false), BackHandler.exitApp();
          }}
          title="Are you sure you want to close application?"
        />
      </Provider>
    </MenuProvider>
  );
};

export default App;
