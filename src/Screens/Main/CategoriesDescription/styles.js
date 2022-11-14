import {StyleSheet, Color, Dimensions} from 'react-native';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';

export const styles = StyleSheet.create({
  Poster: {
    // height: getHeight(85),
    // width: getWidth(93),
    backgroundColor: 'red',
    borderRadius: 5,
    alignSelf: 'center',
  },
  image: {
    // width: getWidth(100),
    // width: Dimensions.get('window').width,
    height: fullHeight - 90 * heightRef,
    marginTop: 0 * heightRef,
    marginBottom: 30 * heightRef,

    alignSelf: 'center',
    width: fullWidth - 10 * widthRef,

    // width: '60%',
    justifyContent: 'center',
    // or 'stretch'
  },
  detailtext: {fontSize: 18 * fontRef, fontWeight: 'bold', color: 'white'},
  movieText: {
    fontSize: 26 * fontRef,
    fontWeight: 'bold',
    marginTop: 90,
    color: 'white',
    textDecorationLine: 'underline',
  },
  textview: {marginTop: 390},
  container: {
    flex: 1,

    // justifyContent: 'center',
  },
  linearGradient: {
    // height: getHeight(42),
    // width: getWidth(95),
  },
  headerview: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2 * widthRef,
    paddingVertical: 6 * heightRef,
    flexDirection: 'row',
  },
  logotext: {
    fontSize: 24 * fontRef,
    fontFamily: theme.fontFamily,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
  },
  cardfotter: {
    width: '100%',
    height: 60 * heightRef,
    backgroundColor: '#233329',
    justifyContent: 'space-between',
    padding: 5,

    elevation: 20 * fontRef,
    position: 'absolute',
    bottom: 0,

    borderBottomLeftRadius: 10 * fontRef,
    borderBottomRightRadius: 10 * fontRef,
  },
  title: {
    marginTop: 20 * fontRef,
    marginHorizontal: 6 * widthRef,
    color: 'white',
    fontFamily: theme.fontFamily,
    fontSize: 24 * fontRef,
  },
  text: {
    // alignSelf: 'center',
    color: 'white',
    marginHorizontal: 6 * widthRef,
    // textDecorationLine: 'underline',
    textDecorationColor: 'white',
    fontFamily: theme.fontFamily,
    fontSize: 32 * fontRef,
    fontWeight: '900',
  },
  headertext: {
    textAlign: 'center',
    // alignSelf: 'center',
    fontFamily: theme.fontFamily,
    marginHorizontal: 6 * widthRef,
    // textDecorationLine: 'underline',

    fontSize: 32 * fontRef,
    fontWeight: 'bold',
  },
  image2: {
    // width: getWidth(100),
    // width: Dimensions.get('window').width,
    height: fullHeight - 150 * heightRef,
    marginTop: 10 * heightRef,
    marginBottom: 25 * heightRef,
    marginHorizontal: 20 * widthRef,
    alignSelf: 'center',
    width: fullWidth - 40 * widthRef,

    // width: '60%',
    justifyContent: 'center',
    // or 'stretch'
  },
  image3: {
    // width: Dimensions.get('window').width,
    height: fullHeight - 90 * heightRef,
    marginTop: 0 * heightRef,
    marginBottom: 30 * heightRef,

    alignSelf: 'center',
    width: fullWidth - 10 * widthRef,

    // width: '60%',
    justifyContent: 'center',
    // or 'stretch'
    // or 'stretch'
  },
  linervertical: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: fullWidth - 10 * widthRef,
    borderRadius: 10 * fontRef,
    height: fullHeight - 70 * heightRef,
    // backgroundColor: 'transparent',
    // backgroundColor: 'transparent',
  },
  linervertical2: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: fullWidth - 10 * widthRef,
    borderRadius: 10 * fontRef,
    height: fullHeight - 70 * heightRef,
    // backgroundColor: 'transparent',
  },
  linearhorzontal: {
    justifyContent: 'center',
    alignSelf: 'center',
    // width: fullWidth - 10,
    width: fullWidth - 40 * widthRef,
    borderRadius: 10 * fontRef,
    height: fullHeight - 140 * heightRef,
    // backgroundColor: 'transparent',

    // backgroundColor: 'transparent',
  },
  footertext: {
    paddingHorizontal: 5 * widthRef,
    top: 10 * heightRef,
    flex: 1,
    marginBottom: 100 * heightRef,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
