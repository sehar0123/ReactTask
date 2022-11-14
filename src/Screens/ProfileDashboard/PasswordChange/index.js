import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {fontRef, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Icon from 'react-native-dynamic-vector-icons';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {getHeight} from '../../../Constant/functions';
import {useSelector} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {UpdatePassword} from 'src/redux/reducers/Auth/authActions';
import {EnableSnackBar} from 'src/config/function';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {ScrollView} from 'react-native';
function PasswordChange(props) {
  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  const nav = useNavigation();
  const [loading, setLoading] = useState(false);
  const State = useSelector(state => state);
  const [confirmpassword, setconfirmPassword] = React.useState();
  const [state, setState] = React.useState({
    old_password: '',
    new_password: '',
  });

  const handleState = data => {
    setState(s => ({...s, ...data}));
  };

  const passwordChange = () => {
    if (state.old_password == '') {
      EnableSnackBar({data: 'Old Password is required!!'}, false);
    } else if (state.new_password == '') {
      EnableSnackBar({data: 'New Password is required!!'}, false);
    } else if (confirmpassword == '') {
      EnableSnackBar({data: 'Confirm Password is required!!'}, false);
    } else if (confirmpassword === state.old_password) {
      EnableSnackBar({data: 'Try some other password!!'}, false);
    } else {
      if (
        state.new_password.length <= 8 &&
        state.old_password.length <= 8 &&
        confirmpassword?.length <= 8
      ) {
        EnableSnackBar(
          {data: 'Password should be greater than 8 characters'},
          false,
        );
      } else {
        if (state.new_password == confirmpassword) {
          setLoading(true);
          props.UpdatePassword(state, ({success}) => {
            if (success) {
              setLoading(false);
              nav.navigate('BottomTab');
            } else {
              setLoading(false);
              EnableSnackBar({data: 'Something went wrong.'}, false);
            }
          });
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {' '}
        {/* <Header
        title="Change Password"
        leftIcon="chevron-left"
        onPressLeft={() => nav.goBack()}
      /> */}
        <View
          style={{paddingVertical: 10 * heightRef, marginTop: 40 * heightRef}}>
          <Image
            resizeMode="contain"
            source={require('../../../Assets/Images/icon.png')}
            style={{
              alignSelf: 'center',
              height: 150 * heightRef,
              width: 150 * heightRef,
            }}
          />
          {/* <Text style={styles.sign}>Sigin in user with{'\n'} Email and Password</Text> */}
        </View>
        <View style={styles.inner}>
          <Text style={styles.text}>Update your Password</Text>
          <TextInput
            theme={{roundness: 5 * fontRef}}
            underlineColorAndroid="transparent"
            label={<Text>{'Old Password'}</Text>}
            value={state.old_password}
            importantForAutofill="no"
            // error={emailError}
            underlineColor={theme.lightgrey}
            onChangeText={val => handleState({old_password: val})}
            activeOutlineColor={theme.primary}
            autoCapitalize="none"
            mode="outlined"
            secureTextEntry={hidePass ? true : false}
            placeholderTextColor={theme.white}
            keyboardType="default"
            style={styles.input}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                    type="Ionicons"
                    size={25 * heightRef}
                    style={{
                      alignSelf: 'center',

                      // marginTop: getHeight(0.1),
                    }}
                    color={theme.dark}
                    onPress={() => setHidePass(!hidePass)}
                  />
                )}
              />
            }
            outlineColor={theme.lightgrey}
            placeholder="Enter your Old Password"
          />

          <TextInput
            theme={{roundness: 5 * fontRef}}
            underlineColorAndroid="transparent"
            label={<Text>{'New Password'}</Text>}
            value={state.new_password}
            importantForAutofill="no"
            // error={emailError}
            secureTextEntry={hidePass1 ? true : false}
            underlineColor={theme.lightgrey}
            onChangeText={val => handleState({new_password: val})}
            activeOutlineColor={theme.primary}
            autoCapitalize="none"
            mode="outlined"
            placeholderTextColor={theme.white}
            keyboardType="default"
            style={styles.input}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={hidePass1 ? 'eye-off-outline' : 'eye-outline'}
                    type="Ionicons"
                    size={25 * heightRef}
                    style={{
                      alignSelf: 'center',

                      // marginTop: getHeight(0.1),
                    }}
                    color={theme.dark}
                    onPress={() => setHidePass1(!hidePass1)}
                  />
                )}
              />
            }
            outlineColor={theme.lightgrey}
            placeholder="Enter your New Password"
          />

          <TextInput
            theme={{roundness: 5 * fontRef}}
            underlineColorAndroid="transparent"
            label={<Text>{'Confirm Password'}</Text>}
            value={confirmpassword}
            importantForAutofill="no"
            placeholderTextColor={theme.white}
            // error={emailError}
            secureTextEntry={hidePass2 ? true : false}
            numberOfLines={5}
            underlineColor={theme.lightgrey}
            onChangeText={e => setconfirmPassword(e)}
            activeOutlineColor={theme.primary}
            autoCapitalize="none"
            mode="outlined"
            keyboardType="default"
            style={styles.input}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={hidePass2 ? 'eye-off-outline' : 'eye-outline'}
                    type="Ionicons"
                    size={25 * heightRef}
                    style={{
                      alignSelf: 'center',

                      // marginTop: getHeight(0.1),
                    }}
                    color={theme.dark}
                    onPress={() => setHidePass2(!hidePass2)}
                  />
                )}
              />
            }
            outlineColor={theme.lightgrey}
            placeholder="Enter your Confirm Password"
          />

          <Button
            elevation={10}
            buttonText={'Update Password'}
            buttonHeight={50 * heightRef}
            titleFontStyle={'600'}
            titleColor={theme.black}
            titleFontSize={20 * fontRef}
            buttonWidth={'85%'}
            isLoading={loading}
            buttonColor={theme.primary}
            borderColor={theme.primary}
            buttonCorners={5 * heightRef}
            style={{opacity: 1, marginTop: '20%'}}
            onPress={() => passwordChange()}
          />
        </View>
        <Icon
          type="Ionicons"
          name="book-outline"
          size={300 * fontRef}
          style={{alignSelf: 'flex-end', right: -50, bottom: -60 * heightRef}}
          color={'#F0F0F0'}
        />
      </ScrollView>
    </View>
  );
}
const mapStateToProps = state => state;
const mapDispatchToProps = {UpdatePassword};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChange);
