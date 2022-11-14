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
import {connect} from 'react-redux';
import {sendopt} from 'src/redux/reducers/Auth/authActions';
import {useNavigation} from '@react-navigation/native';
import {EnableSnackBar} from 'src/config/function';
const ForgotPassword = props => {
  const [password, setpassword] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState();
  const [zip, setZip] = useState('');
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('Home');
  const [state, setState] = React.useState({
    email: '',
  });

  const handleState = data => {
    setState(s => ({...s, ...data}));
  };

  function validations() {
    if (state.email == '') {
      EnableSnackBar({data: 'Email should not be empty'}, false);
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (reg.test(state.email) == false) {
        EnableSnackBar({data: 'Email should be in valid format'}, false);
      } else {
        setLoading(true);
        props.sendopt(state, ({success}) => {
          if (success) {
            setLoading(false);
            navigation.navigate('OptVerfication');
          } else {
            setLoading(false);
            EnableSnackBar({data: 'Something went wrong.'}, false);
          }
        });
      }
    }
  }
  return (
    <View style={styles.container}>
      <Header
        title="Forgot Password"
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

        {/* <Text style={styles.sign}>Sigin in user with{'\n'} Email and Password</Text> */}
      </View>
      <View style={styles.inner}>
        <Text style={styles.text}>Enter Your Email</Text>

        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          label={<Text>{'Email'}</Text>}
          value={state.email}
          // error={emailError}
          underlineColor={theme.lightgrey}
          onChangeText={val => handleState({email: val})}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          importantForAutofill="no"
          mode="outlined"
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
          placeholderTextColor={theme.white}
        />

        <Button
          elevation={10}
          buttonText={'Continue'}
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
          onPress={() => validations()}
        />
      </View>
      <Icon
        type="Ionicons"
        name="book-outline"
        size={300 * fontRef}
        style={{alignSelf: 'flex-end', right: -50}}
        color={'#F0F0F0'}
      />
    </View>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {sendopt};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
