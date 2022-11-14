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
  card: {
    width: 90 * heightRef,
    height: 90 * heightRef,
    backgroundColor: theme.black,
    margin: 5 * heightRef,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:'center',
    borderRadius: 5 * fontRef,
  },

  movieName: {
    color: 'black',
    fontWeight: '900',
    width: 84 * widthRef,
    // marginTop: 5 * heightRef,
    textAlign: 'center',
    alignSelf: 'center',

    textTransform: 'uppercase',
    fontFamily: theme.fontFamilylight,

    fontSize: 10 * fontRef,
  },
  movieName2: {
    color: 'black',
    fontWeight: '900',
    width: 84 * widthRef,
    // marginTop: 5 * heightRef,
    textAlign: 'center',
    alignSelf: 'center',

    // textTransform: 'uppercase',
    fontFamily: theme.fontFamilylight,

    fontSize: 16 * fontRef,
  },
  MainVIEW: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20 * fontRef,
    fontFamily: theme.fontFamilyBold,
    fontWeight: '700',
    alignSelf:'flex-start',
    textTransform: 'capitalize',
   
   
    color: theme.text,
  },rate:{
    fontSize: 16 * fontRef,
    fontFamily: theme.fontFamilyBold,
    fontWeight: '700',
    textTransform: 'capitalize',
   marginHorizontal:5*widthRef,
 
    color: theme.text,
  },
  card2: {
    backgroundColor: theme.black,
    width: '95%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // height: 180 * heightRef,
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
    fontSize: 16 * fontRef,
    fontWeight: '700',
    fontFamily: theme.fontFamilyBold,
    textTransform: 'capitalize',
    color: 'grey',
  },
  name: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
   
    color: theme.white,
    // alignSelf:'center',
    textTransform: 'uppercase',
    fontFamily: theme.fontFamilyBold,
    marginTop: 30 * heightRef,
  },
  description: {
    fontSize: 14 * fontRef,
    textTransform: 'capitalize',
    color: theme.grey,
    // alignSelf:'center',
    marginHorizontal: 5 * widthRef,
    paddingVertical:5*heightRef,
    fontFamily: theme.fontFamilySemiBold,
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
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 10 * heightRef,

    alignSelf: 'flex-end',
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
    width: 35 * heightRef,
    height: 35 * heightRef,
    borderRadius: (35 / 2) * heightRef,
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.primary,
  },
  input3: {
    fontSize: 14 * fontRef,

    width: 320 * widthRef,
    height: 40 * heightRef,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 2 * heightRef,
    paddingHorizontal: 20 * widthRef,
    backgroundColor: 'transparent',

    color: theme.grey,
  },
  searchbar: {
    width: '80%',
    height: 45 * heightRef,
    alignItems: 'center',
    margin: 7 * heightRef,
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 3 * heightRef,
    marginLeft: 15 * widthRef,
    backgroundColor: theme.secondary,
    // marginLeft: 10 * widthRef,
    borderRadius: 5 * fontRef,

    // borderBottomWidth: 1,
    // bottom: 15,
    // borderColor: theme.grey,

    // backgroundColor: theme.black,
  },
});
