import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {fontRef, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Icon from 'react-native-dynamic-vector-icons';
import styles from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {getHeight} from '../../../Constant/functions';
import {resetPassword} from 'src/redux/reducers/Auth/authActions';
import {connect, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {EnableSnackBar} from 'src/config/function';

const ChangePassword = props => {
  const state = useSelector(state => state);
  const [email, setemail] = useState('');
  const [confrim, setconfrim] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState();
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [password, setpassword] = useState('');
  const [checked, setChecked] = React.useState('Home');

  const resetPassword = () => {
    if (password == '') {
      EnableSnackBar({data: 'Password should not be empty'}, false);
    } else if (password.length <= 8) {
      EnableSnackBar(
        {
          data: 'Your password should have valid eight characters password',
        },
        false,
      );
    } else if (confrim == '') {
      EnableSnackBar({data: 'Confirm Password should not be empty'}, false);
    } else if (confrim.length <= 8) {
      EnableSnackBar(
        {
          data: 'Your password should have valid eight characters password',
        },
        false,
      );
    } else {
      setLoading(true);
      props.resetPassword({password: password}, ({success}) => {
        if (success) {
          setLoading(false);
          navigation.navigate('Login');
        } else {
          setLoading(false);
          EnableSnackBar({data: 'Something went wrong.'}, false);
        }
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header
        title="New Password"
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
      />
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

        {/* <Text style={styles.sign}>Register Account</Text> */}
      </View>
      <View style={styles.inner}>
        <Text style={styles.text}>Enter Your New Password</Text>

        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          label={<Text>{'Password'}</Text>}
          value={password}
          importantForAutofill="no"
          // error={emailError}
          numberOfLines={5}
          underlineColor={theme.lightgrey}
          onChangeText={e => {
            setpassword(e);
          }}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          mode="outlined"
          keyboardType="default"
          secureTextEntry={true}
          style={styles.input}
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name="md-eye-off-outline"
                  type="Ionicons"
                  size={25 * heightRef}
                  style={{
                    alignSelf: 'center',

                    // marginTop: getHeight(0.1),
                  }}
                  color={theme.dark}
                />
              )}
            />
          }
          outlineColor={theme.lightgrey}
          placeholder="Enter your password"
          placeholderTextColor={theme.white}
        />

        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          label={<Text>{'Confirm Password'}</Text>}
          value={confrim}
          // error={emailError}
          importantForAutofill="no"
          numberOfLines={5}
          underlineColor={theme.lightgrey}
          onChangeText={e => {
            setconfrim(e);
          }}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          mode="outlined"
          keyboardType="default"
          secureTextEntry={true}
          style={styles.input}
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name="md-eye-off-outline"
                  type="Ionicons"
                  size={25 * heightRef}
                  style={{
                    alignSelf: 'center',

                    // marginTop: getHeight(0.1),
                  }}
                  color={theme.dark}
                />
              )}
            />
          }
          outlineColor={theme.lightgrey}
          placeholder="Enter your Confirm password"
          placeholderTextColor={theme.white}
        />

        <Button
          elevation={10}
          buttonText={'Submit'}
          buttonHeight={50 * heightRef}
          titleFontStyle={'600'}
          titleColor={theme.black}
          titleFontSize={20 * fontRef}
          buttonWidth={'85%'}
          importantForAutofill="no"
          isLoading={loading}
          buttonColor={theme.primary}
          borderColor={theme.primary}
          buttonCorners={5 * heightRef}
          style={{opacity: 1, marginTop: '30%'}}
          onPress={() => resetPassword()}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}></View>
      </View>
      <Icon
        type="Ionicons"
        name="book-outline"
        size={300 * fontRef}
        style={{alignSelf: 'flex-end', right: -50, bottom: -10 * heightRef}}
        color={'#F0F0F0'}
      />
    </View>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {resetPassword};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
