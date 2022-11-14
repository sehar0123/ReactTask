import {StyleSheet, Color} from 'react-native';
import {
  fontRef,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.secondary,
  },
  innercontainer: {
    marginTop: 20 * heightRef,
  },
  MainVIEW: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16 * fontRef,
    fontFamily: theme.fontFamilyBold,
    fontWeight: '500',
    textAlign: 'center',
    color: 'grey',
    paddingVertical: 3,
  },
  card: {
    backgroundColor: theme.black,
    width: '85%',
    // flexDirection: 'row',
    // alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',

    height: 240 * heightRef,
  },
  profile: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    // marginBottom: 40 * heightRef,
    color: theme.inactive,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '22%',
    marginTop: 10 * heightRef,

    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: theme.inactive,
    alignSelf: 'center',
    fontFamily: theme.fontFamilyBold,
    marginTop: 5,
  },
  name2: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: theme.white,
    textTransform: 'uppercase',
    // alignSelf:'center',
    fontFamily: theme.fontFamilyBold,
  },
  title2: {
    fontSize: 22 * fontRef,
    fontFamily: theme.fontFamilyBold,
    fontWeight: '500',
    textTransform: 'capitalize',
    // textAlign:'center',
    color: theme.text,
  },
  view: {
    marginHorizontal: 10 * heightRef,
    paddingVertical: 5,
  },
  imageView: {
    height: 350 * widthRef,
    width: 300 * widthRef,
    flex: 1,
    alignSelf: 'flex-end',
  },
  image: {
    position: 'absolute',
    height: 350 * widthRef,
    width: 350 * widthRef,
    position: 'absolute',
    bottom: 20 * heightRef,
  },
  btn: {
    position: 'absolute',
    alignSelf: 'center',

    bottom: 150 * heightRef,
  },
  bottomcard: {
    backgroundColor: theme.black,
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 100 * heightRef,
    paddingVertical: 5 * heightRef,

    paddingHorizontal: 10 * widthRef,
    justifyContent: 'space-around',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '45%',
    marginTop: 10 * heightRef,

    alignSelf: 'flex-end',
  },
  category: {
    fontSize: 12 * fontRef,
    fontWeight: 'bold',
    fontFamily: theme.fontFamilyBold,
    position: 'absolute',
    top: 10,
    left: 16,
    color: 'grey',
  },
  circle: {
    width: 35 * heightRef,
    height: 35 * heightRef,
    borderRadius: 35 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.secondary,
  },
  circle2: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    backgroundColor: theme.secondary,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bannerContainer: {
    marginTop: -1000,
    backgroundColor: 'white',
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
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

export default styles;
