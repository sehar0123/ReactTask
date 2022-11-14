import {StyleSheet} from 'react-native';
import {fontRef, heightRef, widthRef} from '../../Constant/screenSize';

import {theme} from '../../Core/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {flex: 1, justifyContent: 'space-around'},
  Image: {
    // height: getHeight(100),
    // width: getWidth(100),
  },
  Textintro: {
    fontSize: 22 * fontRef,
    color: theme.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    marginTop: '23%',
    alignSelf: 'flex-end',
    textAlign: 'right',
    textTransform: 'capitalize',
    marginRight: 30 * widthRef,
    // top: getHeight(2),
    // marginHorizontal: getWidth(10),
  },

  nextButton2: {
    width: 70,
    borderColor: theme.primary,

    borderWidth: 2,
    height: 70,

    position: 'absolute',

    bottom: 30 * heightRef,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 35,

    // elevation: 2,
  },
  nextButton: {
    width: 60,
    // borderColor: theme.primary,
    // backgroundColor: theme.white,
    // borderWidth: 2,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,

    // elevation: 2,
  },
  btn: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: theme.white,
    // height: getHeight(6),
    // width: getWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    // borderWidth: 2,
    // borderColor: theme.orange,
    // marginBottom: getHeight(5),
  },

  btnText: {
    color: theme.orange,
    fontSize: 16,
    fontFamily: theme.fontFamilySemiBold,
  },
  avator: {
    // height: getHeight(50),
    // width: getWidth(55),
    alignSelf: 'center',
    // bottom: getHeight(10),
  },
  avator2: {
    // height: getHeight(50),
    // width: getWidth(55),
    alignSelf: 'center',
    // bottom: getHeight(15),
  },
});
export default styles;
