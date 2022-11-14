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
import {fontRef, fullWidth, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Header from '../../../components/Header';
import {TextInput} from 'react-native-paper';
import Button from '../../../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  updateUserAbbrevaition,
  getUserAbbrevaitions,
} from 'src/redux/reducers/ProductList/productActions';
import {connect, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {EnableSnackBar} from 'src/config/function';
const Edited = props => {
  const state = useSelector(state => state);
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(route.params.category);
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState();
  const [states, setState] = React.useState({
    phrase: route?.params?.phrase,
    abbreviation: route?.params?.abbreviation,
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
      props.updateUserAbbrevaition(
        {
          ...states,
          category_id: value,
          _method: 'PUT',
          status: 1,
          id: route.params.id,
        },

        ({success}) => {
          if (success) {
            props.getUserAbbrevaitions(undefined, ({success}) => {
              if (success) {
                EnableSnackBar(
                  {data: 'Abbreviation Update Successfully            '},
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
  useEffect(() => {
    console.log('prams', route.params.abbreviation);
    console.log('prams', route.params.phrase);
    console.log('id', route.params.id);
    handleState({phrase: route.params.phrase});
    handleState({abbreviation: route.params.abbreviation});
  }, []);

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
        title="Edit Abbreviation"
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
      />

      {/* <Text style={styles.profile}> Your Profile</Text> */}
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
          closeOnBackPressed
          style={styles.drop}
          labelStyle={styles.input}
          value={value}
          activeOutlineColor={theme.primary}
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
          value={states?.abbreviation}
          // error={emailError}
          numberOfLines={5}
          underlineColor={theme.lightgrey}
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
          label={<Text>{'Full From'}</Text>}
          value={states?.phrase}
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
          placeholder="Enter your Full From"
          placeholderTextColor={theme.white}
        />
        <Button
          elevation={10}
          buttonText={'Save Changes'}
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
        style={{alignSelf: 'flex-end', right: -50}}
        color={'#F0F0F0'}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {updateUserAbbrevaition, getUserAbbrevaitions};

export default connect(mapStateToProps, mapDispatchToProps)(Edited);
