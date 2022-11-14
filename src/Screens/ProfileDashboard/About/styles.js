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

    backgroundColor: theme.backgroundColor,
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
    fontSize: 24 * fontRef,
    fontFamily: theme.fontFamilyBold,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10 * heightRef,
    color: theme.primary,
  },
  card: {
    backgroundColor: theme.black,
    width: '90%',
    // flexDirection: 'row',
    // alignItems: 'center',
    height: 180 * heightRef,
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 10,
    alignSelf: 'center',

    paddingVertical: 10 * heightRef,

    paddingHorizontal: 20 * widthRef,
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
  input: {
    fontSize: 18 * heightRef,
    color: theme.white,
  },
  input2: {
    width: '90%',
    height: 50 * heightRef,
    alignSelf: 'center',
    marginTop: 15 * heightRef,
    backgroundColor: 'white',
  },
  drop: {
    backgroundColor: theme.black,
    borderWidth: 1,
    borderColor: theme.inactive,
    width: '90%',
    marginTop: 10 * heightRef,
    alignSelf: 'center',
  },
  dropdown: {
    width: '90%',
    borderColor: theme.inactive,
    backgroundColor: theme.black,
    // borderWidth: 0,,
    // borderBottomWidth: 1,
    alignSelf: 'center',
  },
  profile: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    fontFamily: theme.fontFamilyBold,
    alignSelf: 'center',
    // marginBottom: 40 * heightRef,
    // color: globalStyles.Theme.BlackColor,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '45%',
    marginTop: 10 * heightRef,

    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: '#1c5c3c',
    // alignSelf:'center',
    fontFamily: theme.fontFamilyBold,
    marginTop: 5,
  },
  author: {
    fontSize: 20 * fontRef,

    color: theme.white,
    alignSelf: 'center',
    textAlign: 'justify',
    fontWeight: '500',
    fontFamily: theme.fontFamilySemiBold,
    marginTop: 10 * heightRef,
    marginHorizontal: 30 * widthRef,
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
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.dark,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  circle2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.black,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.dark,
  },
});

export default styles;
