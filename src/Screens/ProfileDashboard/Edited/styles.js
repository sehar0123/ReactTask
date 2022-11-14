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
    width: '90%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // height: 570 * heightRef,

    borderRadius: 2,
    alignSelf: 'center',
    marginTop: '5%',
    paddingVertical: 50 * heightRef,

    paddingHorizontal: 20 * widthRef,
    // justifyContent: 'space-between',

    elevation: 2,
  },
  input: {
    fontSize: 18 * heightRef,
    color: theme.white,
  },
  input2: {
    width: '90%',
    height: 55 * heightRef,
    alignSelf: 'center',
    marginTop: 15 * heightRef,
    backgroundColor: 'white',
  },
  drop: {
    backgroundColor: theme.black,
    borderWidth: 1,
    borderColor: theme.lightgrey,
    width: '90%',
    marginTop: 60 * heightRef,
    alignSelf: 'center',
  },
  dropdown: {
    width: '90%',
    borderColor: theme.primary,
    backgroundColor: theme.black,
    // borderWidth: 0,,
    // borderBottomWidth: 1,
    alignSelf: 'center',
  },
  profile: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    // marginBottom: 40 * heightRef,
    // color: globalStyles.Theme.BlackColor,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10 * heightRef,

    alignSelf: 'center',
  },
  name: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: theme.white,
    alignSelf: 'center',
    fontFamily: theme.fontFamilyBold,
    marginTop: 5,
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
  circle: {
    width: 200 * heightRef,
    height: 200 * heightRef,
    borderRadius: (200 / 2) * heightRef,
    backgroundColor: theme.secondary,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5 * heightRef,
  },
});

export default styles;
