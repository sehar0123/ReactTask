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

  title: {
    fontWeight: '700',
    color: theme.white,
    textAlign: 'left',

    fontSize: 16 * fontRef,
  },
  heading: {
    fontSize: 16 * fontRef,

    fontFamily: 'Marsden-Tx-Bold',
    color: theme.grey,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    // borderColor: theme.green,
    // borderBottomWidth: 1,
    padding: 5 * heightRef,
    borderRadius: 30 * heightRef,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default styles;
