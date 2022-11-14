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
    padding: 0,
    margin: 0,
    alignSelf: 'center',
    marginTop: 20 * heightRef,
    backgroundColor: 'white',
  },
  inner: {
    height: 300,
    marginTop: 40 * heightRef,
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
    marginRight: 30 * heightRef,
  },
  sign: {
    fontSize: 16 * fontRef,
    fontFamily: theme.fontFamily,
    color: 'grey',
    marginTop: 20 * heightRef,

    textAlign: 'center',
  },
  circle: {
    width: 200 * heightRef,
    height: 200 * heightRef,
    borderRadius: (200 / 2) * heightRef,
    backgroundColor: theme.black,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10 * heightRef,
    marginTop: 40 * heightRef,
  },
});

export default styles;
