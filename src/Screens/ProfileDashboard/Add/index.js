import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-dynamic-vector-icons';
import {
  fontRef,
  abbreviationWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Header from '../../../components/Header';
import {TextInput} from 'react-native-paper';
import Button from '../../../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {
  AddAbbreviation,
  getUserAbbrevaitions,
} from 'src/redux/reducers/ProductList/productActions';
import {useNavigation} from '@react-navigation/native';
import {EnableSnackBar} from 'src/config/function';
import {ToastAndroid} from 'react-native';
const Add = props => {
  const state = useSelector(state => state);
  const navigation = useNavigation();
  const [loading, setLoading] = useState();
  const [states, setState] = React.useState({
    phrase: '',
    abbreviation: '',
  });
  const handleState = data => {
    setState(s => ({...s, ...data}));
  };
  const AddData = () => {
    if (states.phrase == '') {
      EnableSnackBar({data: 'Phrase should not be empty'}, false);
    } else if (states.abbreviation == '') {
      EnableSnackBar({data: 'Abbreviation should not be empty'}, false);
    } else if (value == null) {
      EnableSnackBar({data: 'Category should not be empty'}, false);
    } else {
      setLoading(true);
      props.AddAbbreviation(
        {...states, category_id: value, status: 1},
        ({success}) => {
          if (success) {
            props.getUserAbbrevaitions(undefined, ({success}) => {
              if (success) {
                EnableSnackBar(
                  {data: 'Abbreviation Add Successfully            '},
                  true,
                );
                setLoading(false);
                navigation.goBack();
              } else {
                setLoading(false);
                EnableSnackBar({data: 'Something Went wrong'}, false);
              }
            });

            // console.log(
            //   'details',
            //   JSON.stringify(state?.abbrevaition?.publishers_details, null, 2),
            // );
          } else {
            console.log('error');
          }
        },
      );
    }
  };
  // useEffect(() => {
  //   AddData();
  // }, []);
  const [phrase, setphrase] = useState();
  const [abbreviation, setabbreviation] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    let arr = [];
    state?.abbrevaition.categories?.map(item => {
      console.log(item.title);
      arr.push({label: item.title, value: item.id});
    });
    console.log(arr);
    setItems(arr);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Add Abbreviation"
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
      />

      {/* <Text style={styles.profile}> Your Profile</Text> */}

      <View style={styles.card}>
        <View style={styles.circle}>
          <Image
            resizeMode="contain"
            source={require('../../../Assets/Images/icon.png')}
            style={{
              alignSelf: 'center',
              height: 130 * heightRef,
              width: 130 * heightRef,
            }}
          />
        </View>
        <DropDownPicker
          dropDownDirection="TOP"
          open={open}
          arrowIconStyle={{
            tintColor: theme.primary,
          }}
          outlineColor={theme.lightgrey}
          style={styles.drop}
          labelStyle={styles.input}
          value={value}
          // activeUnderlineColor={theme.primary}
          closeOnBackPressed
          activeOutlineColor={theme.white}
          placeholder={'Select category'}
          placeholderStyle={styles.input}
          dropDownContainerStyle={styles.dropdown}
          items={items}
          bottomOffset={100}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          label={<Text>{'Abbreviation '}</Text>}
          value={abbreviation}
          // error={emailError}
          numberOfLines={5}
          underlineColor={theme.lightgrey}
          activeUnderlineColor={theme.primary}
          onChangeText={val => handleState({abbreviation: val})}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          mode="outlined"
          keyboardType="default"
          style={styles.input2}
          outlineColor={theme.lightgrey}
          placeholder="Enter your Abbreviation "
          placeholderTextColor={theme.white}
        />
        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          label={<Text>{'Full Form'}</Text>}
          value={phrase}
          // error={emailError}
          numberOfLines={5}
          underlineColor={theme.lightgrey}
          onChangeText={val => handleState({phrase: val})}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          mode="outlined"
          keyboardType="default"
          style={styles.input2}
          outlineColor={theme.lightgrey}
          placeholder="Enter your Full Form"
          placeholderTextColor={theme.white}
        />
        <Button
          elevation={10}
          buttonText={'Add'}
          buttonHeight={50 * heightRef}
          titleFontStyle={'600'}
          titleFontSize={20 * fontRef}
          buttonWidth={'85%'}
          isLoading={loading}
          buttonColor={theme.primary}
          borderColor={theme.primary}
          buttonCorners={10 * fontRef}
          style={{opacity: 1, marginTop: '7%'}}
          onPress={() => AddData()}
        />
      </View>

      <Icon
        type="Ionicons"
        name="book-outline"
        size={300 * fontRef}
        style={{
          alignSelf: 'flex-end',
          right: -50 * widthRef,
          marginTop: 10 * heightRef,
        }}
        color={'#F0F0F0'}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {AddAbbreviation, getUserAbbrevaitions};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
