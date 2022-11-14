import {StyleSheet} from 'react-native';
import {getFontSize, getHeight, getWidth} from '../../../Constant/functions';
import {theme} from '../../../Core/Theme';

const styles = StyleSheet.create({
  background: {height: getHeight(100), width: getWidth(100)},
  container: {
    flex: 1,
  },
  date: {
    color: theme.navy,
    fontSize: getFontSize(2),
    fontFamily: theme.fontFamily,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    backgroundColor: 'white',
    height: getHeight(15),
    justifyContent: 'space-around',
    elevation: 1.3,

    padding: getWidth(3),
  },
  hideCard: {
    flexDirection: 'row',
    height: getHeight(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
    bottom: 30,
  },
  heading: {
    fontSize: getFontSize(2.5),
    color: theme.primary,
    fontWeight: 'bold',
    fontFamily: theme.fontFamily,
  },
  paragraph: {
    fontSize: getFontSize(2.3),
    color: theme.lightgrey,
    width: getWidth(69),
  },
  Iconbg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary,
  },
  Time: {
    color: theme.black,
    fontFamily: theme.fontFamily,

    fontSize: getFontSize(2),
  },
  sildeView: {
    height: getHeight(11.5),
    width: getWidth(17.5),

    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.navy,
  },
  bottomView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content2: {
    backgroundColor: 'white',

    justifyContent: 'space-around',
    padding: 13,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    height: getHeight(50),
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.primary,
    fontFamily: theme.fontFamily,
    fontSize: getFontSize(2.5),
    marginRight: 15,
  },
  modaltext: {
    color: theme.primary,
    fontFamily: theme.fontFamily,
    fontSize: getFontSize(2),
    fontWeight: '700',
    marginTop: getHeight(1),
  },
  iconbackground: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primary,
    width: 50,
    borderRadius: 25,
  },
  paragraph2: {
    fontSize: getFontSize(2.3),
    fontFamily: theme.fontFamily,
  },

  btnView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textbtn: {
    fontSize: getFontSize(2.5),
    color: 'black',
    fontFamily: theme.fontFamily,
  },
  modaltitle: {
    fontSize: getFontSize(2),
    color: theme.grey,
    fontFamily: theme.fontFamily,
  },
  btnview: {flexDirection: 'row', justifyContent: 'space-around'},
  mybtn: {
    backgroundColor: theme.primary,
    flexDirection: 'row',

    height: getHeight(6),
    width: getWidth(30),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
  },
  mybtnText: {
    color: 'white',
    fontSize: getFontSize(3),
    fontFamily: theme.fontFamilyBold,
    fontWeight: 'bold',
  },
  btn: {
    borderWidth: 1,

    height: getHeight(6),
    width: getWidth(30),
    borderColor: theme.red,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  btnText: {
    color: theme.red,
    fontSize: getFontSize(3),
    fontFamily: theme.fontFamilyBold,
    fontWeight: 'bold',
  },
  Notificationmodal: {
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-around',
    height: getHeight(27),
    width: getHeight(38),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  RowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  active: {
    width: 10,
    height: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary,
  },
  modalok: {
    fontSize: getFontSize(2),
    color: theme.lightgrey,
    fontFamily: theme.fontFamily,
  },
});
export default styles;
