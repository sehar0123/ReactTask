import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {fontRef, heightRef, widthRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Icon from 'react-native-dynamic-vector-icons';
import styles from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

import OtpInputs from 'react-native-otp-inputs';
import {verifyopt} from 'src/redux/reducers/Auth/authActions';
import {connect, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {EnableSnackBar} from 'src/config/function';
const OptVerfication = props => {
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const state = useSelector(state => state);
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [password, setpassword] = useState('');
  const [checked, setChecked] = React.useState('Home');

  // const handleState = data => {
  //   setState(s => ({...s, ...data}));
  // };
  const [otp, setOtp] = useState('');

  function optVerify() {
    if (otp == '') {
      EnableSnackBar({data: 'OTP should not be empty'}, false);
    } else {
      setLoading(true);
      props.verifyopt(otp, ({success}) => {
        if (success) {
          setLoading(false);
          navigation.navigate('ChangePassword');
        } else {
          setLoading(false);
          EnableSnackBar({data: 'Something went wrong.'}, false);
        }
      });
    }
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Header
          title="Verfication"
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
          <Text style={styles.text}>Enter your OTP sent your Email</Text>

          <OtpInputs
            handleChange={val => setOtp(val)}
            numberOfInputs={6}
            style={{
              // backgroundColor: 'pink',
              width: '85%',
              height: 40,
              marginTop: 30 * heightRef,
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}
            placeholder="0"
            inputStyles={{
              // backgroundColor: ',
              color: theme.white,
              marginHorizontal: 10 * widthRef,
              alignSelf: 'center',
              paddingLeft: 20 * fontRef,
              height: 50 * heightRef,
              width: 50 * heightRef,
              borderRadius: 25,

              borderWidth: 1,
              borderColor: theme.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />

          <Button
            elevation={10}
            buttonText={'Verfiy'}
            buttonHeight={50 * heightRef}
            titleFontStyle={'600'}
            titleColor={theme.black}
            titleFontSize={20 * fontRef}
            buttonWidth={'85%'}
            isLoading={loading}
            buttonColor={theme.primary}
            borderColor={theme.primary}
            buttonCorners={5 * heightRef}
            style={{opacity: 1, marginTop: '30%'}}
            onPress={() => optVerify()}
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
          style={{alignSelf: 'flex-end', right: -50, top: '27%'}}
          color={'#F0F0F0'}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {verifyopt};

export default connect(mapStateToProps, mapDispatchToProps)(OptVerfication);
