import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {fontRef, fullHeight, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Icon from 'react-native-dynamic-vector-icons';
import styles from './styles';
import {EnableSnackBar} from 'src/config/function';
import {getHeight} from '../../../Constant/functions';
import Header from 'src/components/Header';
import {connect, useSelector} from 'react-redux';
import Button from 'src/components/Button';
import {getWidth} from 'src/config/functions';
import {phoneCodes} from 'src/config/dummyData';
import {FlatList} from 'react-native';


import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
const SignUp = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [hidePass, setHidePass] = useState(true);
  const [loading, setLoading] = useState(false);
 
 
const navigation=useNavigation()
  console.log(auth().currentUser)
  const __isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const __doSignUp = () => {
    setLoading(true)
    if (!email) {
   
     EnableSnackBar({data:  "Email required "}, false); 
     
      setLoading(false)
      return
    }
     else if (!password && password.trim() && password.length > 6) {
      setLoading(false)
      EnableSnackBar({data:  "Weak password, minimum 5 chars"}, false); 
      
      return
    } else if (!__isValidEmail(email)) {
      setLoading(false)
      EnableSnackBar({data:  "Invalid Email"}, false); 
     
      return
    }

    __doCreateUser(email, password)
  }

  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password
      )
      if (response && response.user) {
        setLoading(false)
        navigation.navigate('BottomTab');
     
      }
    } catch (e) {
      console.error(e.message)
    }
  }
  return (
    <View style={{...styles.container,backgroundColor :props.theme.theme=="dark"?"black":theme.secondary}}>
      <ScrollView>
        <Header
          title="Sign Up"
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

          {/* <Text style={styles.sign}>Register Account</Text> */}
        </View>
        <View style={styles.inner}>
          <Text style={styles.text}>Create Your Account</Text>

          <TextInput
            theme={{roundness: 5 * fontRef}}
            underlineColorAndroid="transparent"
            label={<Text>{'Email'}</Text>}
            value={email}
            importantForAutofill="no"
            // error={emailError}
            underlineColor={theme.lightgrey}
            onChangeText={text => {
              
              setEmail(text)
            }}
           
            activeOutlineColor={theme.primary}
            autoCapitalize="none"
            mode="outlined"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor={theme.white}
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
            value={password}
            // error={emailError}
            numberOfLines={5}
            secureTextEntry={hidePass ? true : false}
            underlineColor={theme.lightgrey}
            placeholderTextColor={theme.white}
            
          onChangeText={text => setPassword(text)}
            activeOutlineColor={theme.primary}
            autoCapitalize="none"
            importantForAutofill="no"
            mode="outlined"
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
            placeholder="Enter your Password"
          />

          <Button
            elevation={10}
            buttonText={'Sign Up'}
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
            onPress={() => __doSignUp()}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',
            }}></View>
        </View>
       
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
