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
    fontSize: 22 * fontRef,
    fontFamily: theme.fontFamilyBold,
    fontWeight: '500',
    textTransform: 'capitalize',
    // textAlign:'center',
    color: theme.text,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.primary,
  },
  card: {
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
  // input: {
  //   fontSize: 18 * heightRef,
  //   color: theme.white,
  // },
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
    justifyContent: 'space-between',
    width: '22%',
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
  name: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: theme.white,
    // alignSelf:'center',
    fontFamily: theme.fontFamilyBold,
    marginTop: 5,
  },
  author: {
    fontSize: 18 * fontRef,

    color: theme.grey,
    // alignSelf:'center',
    fontFamily: theme.fontFamilySemiBold,
    marginTop: 10 * heightRef,
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
    backgroundColor: theme.secondary,
  },
  circle2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.secondary,
  },

  container2: {
    height: 60 * fontRef,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#C0C0C0',
    borderBottomLeftRadius: 20 * fontRef,
    borderBottomRightRadius: 20 * fontRef,
    // margin: 10 * fontRef,
    elevation: 2,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 22 * fontRef,
    color: 'black',
    marginHorizontal: 10 * widthRef,
    fontWeight: '700',
    alignSelf: 'center',
    marginRight: 10 * fontRef,
    fontFamily: theme.fontFamily,
  },
  searchbar: {
    width: '80%',
    height: 60 * heightRef,
    alignItems: 'center',
    alignSelf: 'center',
    // borderRadius: 30,
    borderRadius: 5 * fontRef,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    // bottom: 15 * heightRef,
    backgroundColor: '#E3E3E9',
    paddingHorizontal: 5 * widthRef,
    marginLeft: 0 * widthRef,
    flexDirection: 'row',
    // backgroundColor: theme.black,
  },
  input: {
    fontSize: 16 * fontRef,
    // top: 20 * heightRef,
    alignSelf: 'center',
    justifyContent: 'center',

    paddingHorizontal: 13 * widthRef,
    color: theme.grey,
  },
});
export default styles;
