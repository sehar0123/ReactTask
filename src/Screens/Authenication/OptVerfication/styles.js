import {Platform, StyleSheet} from 'react-native';
import {fontRef, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondary,
    //     // alignItems: 'center',
    //   justifyContent:'center',
    //   alignItems:'center'
  },
  input: {
    width: '85%',
    height: 50 * heightRef,
    alignSelf: 'center',
    marginTop: 20 * heightRef,
    backgroundColor: 'white',
  },
  inner: {
    height: 100,
    marginTop: 30 * heightRef,
  },
  logo: {
    width: 150 * heightRef,

    height: 150 * heightRef,
    alignSelf: 'center',
    tintColor: theme.white,
    marginTop: 20 * heightRef,
  },
  text: {
    fontSize: 26 * fontRef,
    fontFamily: theme.Arial,
    color: theme.primary,
    fontFamily: 'bold',
    marginHorizontal: 30 * heightRef,
    alignSelf: 'flex-start',
  },
  heading: {
    fontSize: 18 * fontRef,
    fontFamily: theme.fontFamily,
    color: theme.primary,

    alignSelf: 'center',
    textAlign: 'center',
    // alignSelf:'flex-end',
    // marginRight:20*heightRef,
  },
  forg: {
    fontSize: 18 * fontRef,
    fontFamily: theme.fontFamily,
    color: theme.white,
    marginTop: 10 * heightRef,

    textAlign: 'center',
    alignSelf: 'flex-end',
    marginRight: 20 * heightRef,
  },
  sign: {
    fontSize: 16 * fontRef,
    fontFamily: theme.fontFamily,
    color: 'grey',
    marginTop: 10 * heightRef,

    textAlign: 'center',
  },
  roundedTextInput: {
    borderRadius: 30 * heightRef,
    color: theme.white,
    borderWidth: 1.5,
    fontSize: 12,
    borderColor: theme.primary,
  },
  otpView: {
    width: '85%',
    // height: 100,
    marginTop: 30 * heightRef,
    alignSelf: 'center',
    color: theme.white,
  },
  //   otp: {
  //     fontSize: getFontSize(2),
  //     fontFamily: theme.fontFamily,
  //     alignSelf: 'center',
  //     marginBottom: getHeight(2),
  //   },
});

export default styles;
