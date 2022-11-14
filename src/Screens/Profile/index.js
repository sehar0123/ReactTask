import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-dynamic-vector-icons';
import {fontRef, fullWidth, heightRef} from '../../Constant/screenSize';
import {theme} from '../../Core/Theme';
import Header from '../../components/Header';
import {connect, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {logout} from 'src/redux/reducers/Auth/authActions';
import {getUserDetails} from 'src/redux/reducers/Auth/authActions';
import auth, { firebase } from '@react-native-firebase/auth';
const Profile = props => {
  const navigation = useNavigation();
  const state = useSelector(state => state);
  useEffect(() => {
    console.log('PROFILE', JSON.stringify(props?.auth?.profile, null, 2));
    // props.getUserDetails();
    props.getUserDetails(undefined, ({success}) => {
      if (success) {
        // setLoader(false);
        console.log('HDHDH', state?.auth?.userDetaills);
      }
    });
  }, []);
  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        navigation.navigate('Login');
    } catch (e) {
        console.log(e);
    }
}
  const states = useSelector(state => state);
  return (
    <SafeAreaView style={{...styles.container,backgroundColor:props.theme.theme=="dark"?"black":theme.secondary}}>
      <Header title="Profile" onPressLeft={() => navigation.goBack()} />

      {/* <Text style={styles.profile}> Your Profile</Text> */}

      <View style={styles.card}>
        <View style={styles.circle2}>
          <Icon
            name="person"
            type="Fontisto"
            size={110 * fontRef}
            style={{alignSelf: 'center'}}
            color={theme.primary}
            onPress={() => {}}
          />
        </View>
       

       

        <Text style={styles.title}>
          {auth()?.currentUser?.email || '@username@gmail.com'}
        </Text>
       
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={{...styles.bottomcard}}
            onPress={() =>
             
                 navigation.navigate('Setting')
            }>
            <View style={styles.circle}>
              <Icon
                type="Ionicons"
                name="newspaper"
                size={40 * fontRef}
                style={{alignSelf: 'center'}}
                color={theme.primary}
              />
            </View>
            <Text style={styles.profile}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomcard}
            onPress={() => {
                  
              signOutUser()
          }}>
            <View style={styles.circle}>
              <Icon
                name="logout"
                type="MaterialIcons"
                size={40 * fontRef}
                style={{alignSelf: 'center'}}
                color={theme.primary}
                onPress={() => {
                  
                    signOutUser()
                }}
              />
            </View>
            <Text style={styles.profile}>
              {' '}
              { 'Logout'}{' '}
            </Text>
          </TouchableOpacity>
           
         
        </View>
       
          
          
        
      </View>

      {/* <Button
      elevation={10}
      buttonText={'Edited  Profile'}
      buttonHeight={70 * heightRef}
      titleFontStyle={'600'}
      titleFontSize={20 * fontRef}
      buttonWidth={'80%'}
      buttonColor={globalStyles.Theme.BlackColor}
      borderColor={globalStyles.Theme.BlackColor}
      buttonCorners={10 * fontRef}
      style={styles.btn}
      onPress={() => navigation.navigate('EditedProfile')}
    /> */}
    </SafeAreaView>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {logout, getUserDetails};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
