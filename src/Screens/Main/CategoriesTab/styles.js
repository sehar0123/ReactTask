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
    backgroundColor: '#0D2B31',
  },
  text: {
    fontWeight: '400',
    color: 'black',
    textAlign: 'justify',
    fontFamily: theme.fontFamily,
    marginHorizontal: 10 * widthRef,
    fontSize: 24 * fontRef,
  },
  button: {
    width: '20%',

    height: 40 * heightRef,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 5 * heightRef,
  },
  btntext: {
    fontWeight: '700',
    color: theme.white,
    textAlign: 'center',
    fontFamily: theme.fontFamily,
    marginHorizontal: 10 * widthRef,
    fontSize: 16 * fontRef,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  title: {
    // alignSelf: 'center',
    color: 'white',

    // textDecorationLine: 'underline',
    textDecorationColor: 'white',
    width: '40%',
    marginLeft: '30%',
    textAlign: 'center',
    fontSize: 20 * fontRef,
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
    backgroundColor: '#006460',
    alignSelf: 'center',
    paddingVertical: 20 * fontRef,
    height: 60 * heightRef,
    justifyContent: 'space-between',

    elevation: 20 * fontRef,
  },

  card: {
    // margin: 9 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',

    width: '20%',
    height: 100 * heightRef,
    alignSelf: 'center',
    borderRadius: 5 * fontRef,
  },
  logotext: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  tabButton: {
    width: '30%',
    height: 40 * heightRef,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    borderRadius: 5 * heightRef,
  },
  backimage1: {
    // height: getHeight(25),
    // width: getWidth(30),
    width: '100%',

    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 80 * heightRef,
  },
  backimage2: {
    // height: getHeight(25),
    // width: getWidth(30),
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130 * heightRef,
  },
  header: {
    height: 200 * heightRef,

    width: '100%',
    marginTop: 60 * heightRef,

    justifyContent: 'center',

    // alignItems: 'center',

    position: 'absolute',
  },
  label: {
    fontSize: 18 * fontRef,

    fontWeight: '800',
    fontFamily: theme.fontFamily,
  },
  card2: {
    margin: 9 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200 * heightRef,
    width: '30%',
    borderRadius: 5 * fontRef,
  },
  tab: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'white',
  },
  indicator: {backgroundColor: 'white'},
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  movieText: {
    fontSize: 22 * fontRef,
    marginTop: 20 * heightRef,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: theme.fontFamily,
    color: 'white',
  },
  movieText2: {
    fontSize: 18 * fontRef,
    fontWeight: 'bold',
    marginTop: 5 * heightRef,
    textTransform: 'uppercase',
    fontFamily: theme.fontFamily,
    color: 'white',
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
