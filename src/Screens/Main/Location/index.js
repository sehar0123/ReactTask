import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text,  PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useSelector } from 'react-redux';
import Button from 'src/components/Button';
import Header from 'src/components/Header';
import { fontRef, heightRef } from 'src/Constant/screenSize';
import { theme } from 'src/Core/Theme';

import styles from './styles';

// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};
const Setting = props => {
 
  const [location, setLocation] = useState(false);
  const state = useSelector(state => state);
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
  return (
    <View style={{...styles.container,backgroundColor:state.theme.theme=="dark"?"black":theme.secondary}}>
       <Header title="Location"  />
      <View
        style={{marginTop: "40%", padding: 10, borderRadius: 10, width: '80%', padding: 10,
        alignItems: 'center',
        alignSelf:'center',
       justifyContent: 'center',}}>
            
        <Button
          elevation={10}
          buttonText={"Get Location"}
          buttonHeight={50 * heightRef}
          titleFontStyle={'600'}
          titleColor={theme.black}
          titleFontSize={20 * fontRef}
          buttonWidth={'90%'}
          
          buttonColor={theme.primary}
          borderColor={theme.primary}
          buttonCorners={5 * heightRef}
          style={{opacity: 1, marginTop: '20%'}}
          onPress={getLocation}
        />
       
      </View>
      <Text style={{...styles.boldText,color:state.theme.theme=="dark"?"white":"black"}}>Latitude: {location ? location.coords.latitude :" ...."}</Text>
      <Text style={{...styles.boldText,color:state.theme.theme=="dark"?"white":"black"}}>Longitude: {location ? location.coords.longitude : "....."}</Text>
     
    </View>
  );
};

export default Setting;