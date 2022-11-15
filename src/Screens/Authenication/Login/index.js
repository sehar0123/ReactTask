import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {fontRef, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Icon from 'react-native-dynamic-vector-icons';
import styles from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {getHeight} from '../../../Constant/functions';
import {useSelector} from 'react-redux';
import {KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {EnableSnackBar} from 'src/config/function';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const Sigin = props => {
  const navigation = useNavigation();
  const [password, setpassword] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [checked, setChecked] = React.useState('Home');
  const State = useSelector(state => state);
  
  const [loading, setLoading] = useState(false);
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const handleState = data => {
    setState(s => ({...s, ...data}));
  };

  const __doLogin = () => {
    if (!email) {
      setError("Email required *");
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError("Weak password, minimum 5 chars");
      setValid(false);
      return;
    } else if (!__isValidEmail(email)) {
      setError("Invalid Email");
      setValid(false);
      return;
    }
    let signInRequestData = {
      email,
      password
    };

    __doSingIn(email, password);
  };

  const __doSingIn = async (state) => {
    try {
      let response = await auth().signInWithEmailAndPassword(state.email, state.password);
      if (response && response.user) {
        setLoading(false)
        console.log(response.user)
     navigation.navigate("BottomTab")
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  function validations() {
    if (state.email == '') {
      EnableSnackBar({data: 'Email should not be empty'}, false);
    } else {
      if (state.password == '') {
        EnableSnackBar({data: 'Password should not be empty'}, false);
      } else {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(state.email) == false) {
          EnableSnackBar({data: 'Email should be in valid format'}, false);
        }
         else {
          setLoading(true);
          __doSingIn(state, ({success}) => {
            if (success) {
              setLoading(false);
              navigation.navigate('BottomTab');
            } else {
              setLoading(false);
              EnableSnackBar({data: 'Something went wrong.'}, false);
            }
          });
        }
      }
    }
  }

  return (
    <View style={{...styles.container,backgroundColor :props.theme.theme=="dark"?"black":theme.secondary}}>
      <Header
        title="Sign In"
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
            tintColor:theme.primary,
            width: 150 * heightRef,
          }}
        />
        {/* <Text style={styles.sign}>Sigin in user with{'\n'} Email and Password</Text> */}
      </View>
      <View style={styles.inner}>
        <Text style={styles.text}>Login to Your Account</Text>

        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          scrollEnabled={false}
          label={<Text>{'Email'}</Text>}
          value={state.email}
          // error={emailError}
          importantForAutofill="no"
          underlineColor={theme.lightgrey}
          onChangeText={val => handleState({email: val})}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          mode="outlined"
          placeholderTextColor={theme.white}
          keyboardType="email-address"
          style={styles.input}
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name="email-outline"
                  type="MaterialCommunityIcons"
                  size={25 * heightRef}
                  style={{
                    alignSelf: 'center',

                    marginTop: getHeight(1),
                  }}
                  color={theme.dark}
                />
              )}
            />
          }
          outlineColor={theme.lightgrey}
          placeholder="Enter your Email"
        />

        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          label={<Text>{'Password'}</Text>}
          value={state.password}
          placeholderTextColor={theme.white}
          // error={emailError}
          importantForAutofill="no"
          secureTextEntry={hidePass ? true : false}
          underlineColor={theme.lightgrey}
          onChangeText={val => handleState({password: val})}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          mode="outlined"
          scrollEnabled
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

                    marginTop: getHeight(1),
                  }}
                  onPress={() => setHidePass(!hidePass)}
                  color={theme.dark}
                />
              )}
            />
          }
          outlineColor={theme.lightgrey}
          placeholder="Enter your password"
        />
       
        <Button
          elevation={10}
          buttonText={'Sign In'}
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
          onPress={() => validations()}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{...styles.sign}}>Don’t have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // activeOpacity={0.6}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={{...styles.heading, marginTop: 18 * heightRef}}>
              {'Sign Up'}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sigin);
