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
    backgroundColor: 'white',
   
  },
  boldText: {
    fontSize: 20,
    color: 'black',
    alignSelf:'center',
    marginVertical: 16,
  },
});

export default styles;
