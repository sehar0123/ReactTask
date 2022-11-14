import {StyleSheet} from 'react-native';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import {fontRef, heightRef} from '../../Constant/screenSize';
import {theme} from '../../Core/Theme';

const styles = StyleSheet.create({
  content2: {
    backgroundColor: theme.black,
    justifyContent: 'space-around',
    padding: 13 * heightRef,
    borderRadius: 10,
    width: 350 * heightRef,
    height: 210 * heightRef,

    alignSelf: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1,
  },
  title: {
    fontSize: 18 * fontRef,
    color: theme.white,

    textAlign: 'center',

    fontFamily: theme.fontFamily,
  },
  image: {
    width: 90 * heightRef,
    height: 90 * heightRef,
    alignSelf: 'center',

    // position: 'absolute',
  },
});
export default styles;
