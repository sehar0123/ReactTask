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
  },
  card: {
    backgroundColor: theme.black,
    width: 130 * heightRef,
    // flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-around',
    borderRadius: 5 * heightRef,
    height: 160 * heightRef,
    alignSelf: 'center',

    margin: 5,
    // justifyContent: 'space-between',

    elevation: 1,
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
    width: '90%',
    marginTop: 20 * heightRef,

    alignSelf: 'center',
  },
  name: {
    fontSize: 14 * fontRef,
    fontWeight: '700',
    color: theme.white,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
  checkbox: {
    position: 'absolute',
    top: -5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 3 * fontRef,
    right: -5,
    borderColor: theme.subscribebtn,
    height: 30,
    width: '30%',
    borderWidth: 1,
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
});

export default styles;
