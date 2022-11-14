import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {fontRef, fullHeight, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Icon from 'react-native-dynamic-vector-icons';
import styles from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {getHeight} from '../../../Constant/functions';
import {phoneCodes} from 'src/config/dummyData';
import {Modal} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {EditProfile, getUserDetails} from 'src/redux/reducers/Auth/authActions';
import {useNavigation} from '@react-navigation/native';
import {EnableSnackBar} from 'src/config/function';
const EditedProfile = props => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState('username@gmail.com');
  const [phone, setphone] = useState('+9385858558');
  const [country, setCountry] = useState('');
  const states = useSelector(state => state);
  const [state, setState] = React.useState({
    name: states?.auth?.profile?.name || 'username',
    email: '',
    mobile_no: states.auth.profile.mobile_no,

    country_code: states.auth.profile.country_code,
  });
  const handleState = data => {
    setState(s => ({...s, ...data}));
  };
  const searchFilterFunction = text => {
    if (text) {
      const newData = phoneCodes.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
      console.log(search, newData);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(phoneCodes);
      setSearch(text);
    }
  };

  const [zip, setZip] = useState('');
  const [password, setpassword] = useState('');
  const [checked, setChecked] = React.useState('Home');
  function validations() {
    if (state.name == '') {
      EnableSnackBar({data: 'Name should not be empty'}, false);
    } else {
      if (state.mobile_no == '') {
        EnableSnackBar({data: 'Phone number should not be empty'}, false);
      } else {
        if (state.mobile_no == '') {
          EnableSnackBar({data: 'Phone number should not be empty'}, false);
        } else {
          if (state.mobile_no.length != 10) {
            EnableSnackBar(
              {
                data: 'Your phone number should have valid ten characters',
              },
              false,
            );
          } else {
            setLoading(true);
            props.EditProfile({...state}, ({success}) => {
              if (success) {
                props.getUserDetails();
                setLoading(false);
                navigation.navigate('BottomTab');
                state?.auth?.profile;
              } else {
                setLoading(false);
                // EnableSnackBar({data: 'Something went wrong.'}, false);
              }
            });
            // signInWithPhoneNumber('+92' + state.mobile_no);hamza
          }
        }
      }
    }
  }
  console.log(states.auth.profile);
  return (
    <View style={styles.container}>
      {/* <Header
        title="Edit Profile"
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
      /> */}
      <View
        style={{paddingVertical: 10 * heightRef, marginTop: 40 * heightRef}}>
        <Image
          resizeMode="contain"
          source={require('../../../Assets/Images/icon.png')}
          style={{
            alignSelf: 'center',
            height: 150 * heightRef,
            width: 150 * heightRef,
          }}
        />
        {/* <Text style={styles.sign}>Register Account</Text> */}
      </View>
      <View style={styles.inner}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View
            style={{
              width: '100%',
              height: fullHeight - 400,
              backgroundColor: theme.black,
              paddingHorizontal: 10,
              // flex: 1,
              borderColor: theme.primary,
              borderWidth: 1,
              alignSelf: 'center',
              // position: 'absolute',
              marginTop: '110%',
              // top: 0,
              borderRadius: 20,
              elevation: 10,
              justifyContent: 'center',
            }}>
            <Button
              buttonWidth={20}
              buttonHeight={20}
              buttonText={''}
              isIcon={true}
              iconType={'Entypo'}
              iconName={'cross'}
              iconSize={15}
              buttonCorners={35}
              iconColor={'white'}
              isButtonText={false}
              buttonColor={theme.primary}
              borderColor={theme.primary}
              style={{
                alignSelf: 'flex-end',
                marginRight: 20,
                top: 30 * heightRef,
              }}
              onPress={() => {
                setModalVisible(false);
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={styles.searchbar}>
                <TextInput
                  style={styles.input3}
                  placeholder="Search Country Code..."
                  value={search}
                  activeOutlineColor={theme.grey}
                  outlineColor={theme.grey}
                  activeUnderlineColor={theme.grey}
                  // activeOutlineColor={theme.grey}

                  placeholderTextColor={theme.white}
                  onChangeText={text => searchFilterFunction(text)}
                  // onFocus={() => {
                  //   text => setSearch(text);
                  // }}
                />

                {/* <Icon
                  type="Feather"
                  name="search"
                  size={25 * fontRef}
                  style={{top: 25 * heightRef, left: 40 * heightRef}}
                  color={theme.primary}
                  onPress={text => searchFilterFunction(text)}
                /> */}
              </View>
            </View>
            <View
              style={{
                height: fullHeight - 450,
                width: '100%',

                // backgroundColor: 'red',
                // alignSelf: 'center',
              }}>
              <FlatList
                data={search == '' ? phoneCodes : filteredDataSource}
                bounces={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      handleState({country_code: item.dial_code});
                      setModalVisible(false);
                    }}>
                    {/* <Text style={styles.text}>{item.name}</Text> */}

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 10,
                        padding: 4,
                        paddingHorizontal: 20,
                      }}>
                      <Text style={{color: 'black'}}>
                        {item.name.toUpperCase()}
                      </Text>
                      <Text style={{color: theme.primary}}>
                        {item.dial_code}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
        <Text style={styles.text}>Edit Your Account</Text>
        <TextInput
          theme={{roundness: 5 * fontRef}}
          underlineColorAndroid="transparent"
          label={<Text>{'DisplayName'}</Text>}
          value={state.name}
          // error={emailError}
          underlineColor={theme.lightgrey}
          onChangeText={val => handleState({name: val})}
          activeOutlineColor={theme.primary}
          autoCapitalize="none"
          mode="outlined"
          keyboardType="default"
          style={styles.input}
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name="person-outline"
                  type="MaterialIcons"
                  size={25 * heightRef}
                  style={{
                    alignSelf: 'center',

                    marginTop: getHeight(1),
                  }}
                  color={theme.dark}
                />
              )}
            />
          }
          outlineColor={theme.lightgrey}
          placeholder="Enter your Name"
          placeholderTextColor={theme.white}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            // backgroundColor: theme.black,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <TextInput
            theme={{roundness: 5 * fontRef}}
            underlineColorAndroid="transparent"
            label={<Text>{'Country Code'}</Text>}
            value={state.country_code || 'Select'}
            // error={emailError}
            numberOfLines={5}
            underlineColor={theme.lightgrey}
            placeholderTextColor={theme.white}
            onChangeText={val => handleState({country_code: val})}
            activeOutlineColor={theme.primary}
            autoCapitalize="none"
            mode="outlined"
            onPressIn={() => setModalVisible(true)}
            keyboardType="number-pad"
            style={{...styles.input, width: '25%'}}
            outlineColor={theme.lightgrey}
            placeholder=""
          />

          <TextInput
            theme={{roundness: 5 * fontRef}}
            underlineColorAndroid="transparent"
            label={<Text>{'Phone Number'}</Text>}
            value={state.mobile_no}
            // error={emailError}
            numberOfLines={5}
            underlineColor={theme.lightgrey}
            placeholderTextColor={theme.white}
            onChangeText={val => handleState({mobile_no: val})}
            activeOutlineColor={theme.primary}
            autoCapitalize="none"
            mode="outlined"
            keyboardType="number-pad"
            style={{...styles.input, width: '70%'}}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name="phone-outline"
                    type="MaterialCommunityIcons"
                    size={25 * heightRef}
                    style={{
                      alignSelf: 'center',

                      marginTop: getHeight(1),
                    }}
                    color={theme.dark}
                  />
                )}
              />
            }
            outlineColor={theme.lightgrey}
            placeholder="Enter your  Number"
          />
        </View>

        <Button
          elevation={10}
          buttonText={'Save Changes'}
          buttonHeight={50 * heightRef}
          titleFontStyle={'600'}
          titleColor={theme.black}
          titleFontSize={20 * fontRef}
          buttonWidth={'85%'}
          isLoading={loading}
          buttonColor={theme.primary}
          borderColor={theme.primary}
          buttonCorners={5 * heightRef}
          style={{opacity: 1, marginTop: '20%'}}
          onPress={() => validations()}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}></View>
      </View>
      <Icon
        type="Ionicons"
        name="book-outline"
        size={300 * fontRef}
        style={{alignSelf: 'flex-end', right: -50, bottom: -30 * heightRef}}
        color={'#F0F0F0'}
      />
    </View>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {EditProfile, getUserDetails};

export default connect(mapStateToProps, mapDispatchToProps)(EditedProfile);
