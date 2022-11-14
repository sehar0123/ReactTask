import {StyleSheet, Color} from 'react-native';
import {
  fontRef,
  fullWidth,
  heightRef,
  widthRef,
} from '../../Constant/screenSize';
import {theme} from '../../Core/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.secondary,
  },
  innercontainer: {
    marginTop: 40 * heightRef,
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
    margin: 3 * heightRef,
  },
  card: {
    backgroundColor: theme.black,
    width: '85%',
    // flexDirection: 'row',
    // alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '5%',
    paddingVertical: 5 * heightRef,

    paddingHorizontal: 10 * widthRef,
    // justifyContent: 'space-around',
    height: 250 * heightRef,
  },
  profile: {
    fontSize: 18 * fontRef,
    fontWeight: '500',
    color: theme.white,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
   
    // marginTop: 5 * heightRef,
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: theme.inactive,
    alignSelf: 'center',
    textTransform: 'capitalize',
    fontFamily: theme.fontFamilyBold,
    marginTop: 20 * heightRef,
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
    width: 130 * heightRef,
    height: 145 * heightRef,
    // flexDirection: 'row',
   

    justifyContent: 'space-between',
    borderRadius: 5 * heightRef,

   
    margin: 5 * heightRef,
    paddingVertical: 5 * heightRef,

    paddingHorizontal: 5 * widthRef,
    // justifyContent: 'space-between',

    elevation: 1,
  },
  circle: {
    width: 70 * heightRef,
    height: 70 * heightRef,
    borderRadius: 35 * heightRef,
    backgroundColor: theme.secondary,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15 * heightRef,
  },
  circle2: {
    width: 160 * heightRef,
    height: 160 * heightRef,
    borderRadius: (160 / 2) * heightRef,
    backgroundColor: theme.secondary,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20 * heightRef,
  },
});

export default styles;
