import {StyleSheet, Color} from 'react-native';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondary,
  },
  text: {
    fontWeight: 'bold',
    color: theme.inactive,
    textTransform: 'uppercase',
    // textAlign: 'justify',
    fontFamily: theme.fontFamily,
    textAlign: 'center',
    paddingVertical: 15 * heightRef,
    fontSize: 18 * fontRef,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 10 * heightRef,

    alignSelf: 'flex-end',
  },
  circle2: {
    width: 35 * heightRef,
    height: 35 * heightRef,
    borderRadius: (35 / 2) * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.secondary,
  },
  title: {
    // alignSelf: 'center',
    color: 'white',

    // textDecorationLine: 'underline',
    textDecorationColor: 'white',

    fontWeight: 'bold',
    textAlign: 'center',

    fontSize: 18 * fontRef,
  },
  headerview: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardfotter: {
    width: '50%',

    padding: 10 * widthRef,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    paddingVertical: 20 * fontRef,
    height: 70 * heightRef,
    justifyContent: 'space-between',

    elevation: 20 * fontRef,
  },

  footertext: {
    paddingHorizontal: 5 * widthRef,
    // top: 10 * heightRef,
    height: 340 * heightRef,

    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  linervertical: {
    width: '100%',
    borderRadius: 10 * fontRef,
    height: 400 * heightRef,
    // backgroundColor: 'transparent',
    // backgroundColor: 'transparent',
  },
  card2: {
    backgroundColor: theme.black,
    width: '95%',
    // flexDirection: 'row',
    // alignItems: 'center',
    height: 180 * heightRef,
    // borderWidth:1,
    borderColor: theme.primary,
    // borderRadius: 2,
    alignSelf: 'center',

    paddingVertical: 10 * heightRef,

    paddingHorizontal: 20 * widthRef,
    justifyContent: 'space-around',

    elevation: 2,
  },
  category: {
    fontSize: 14 * fontRef,
    fontWeight: 'bold',
    fontFamily: theme.fontFamilyBold,
    position: 'absolute',
    top: 10,
    left: 16,
    color: 'grey',
  },
  name: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.white,
    // alignSelf:'center',

    fontFamily: theme.fontFamilyBold,
    marginTop: 20 * heightRef,
  },
  author: {
    fontSize: 18 * fontRef,

    color: theme.grey,
    // alignSelf:'center',
    fontFamily: theme.fontFamilySemiBold,
    marginTop: 10 * heightRef,
  },
  title2: {
    fontSize: 22 * fontRef,
    fontFamily: theme.fontFamilyBold,
    fontWeight: '500',
    width: '100%',
    // marignRight: 10 * widthRef,
    marign: 0,
    // textAlign:'center',
    textTransform: 'capitalize',
    color: theme.text,
  },
  btn: {
    width: 120,
    height: 40,
    borderRadius: 2,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: 120,
    height: 40,
    borderRadius: 2,
    backgroundColor: theme.black,
    borderWidth: 1,
    borderColor: theme.dark,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logotext: {
    fontSize: 24 * fontRef,
    fontFamily: theme.fontFamily,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: theme.secondary,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  banner: scrollA => ({
    height: 250 * heightRef,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-400, 0, 400, 400 + 1],
          outputRange: [-400 / 2, 0, 400 * 0.75, 400 * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-400, 0, 400, 400 + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
});
