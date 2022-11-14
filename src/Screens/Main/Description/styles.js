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
    backgroundColor: 'white',
  },
  text: {
    fontWeight: '400',
    color: 'black',
    textAlign: 'justify',
    fontFamily: theme.fontFamily,
    marginHorizontal: 10 * widthRef,
    fontSize: 24 * fontRef,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
  },
  title: {
    // alignSelf: 'center',
    color: 'white',

    // textDecorationLine: 'underline',
    textDecorationColor: 'white',
    width: '45%',
    marginLeft: '27%',
    textAlign: 'center',
    marginBottom: 15 * fontRef,
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
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
  banner: scrollA => ({
    height: 400 * heightRef,
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
