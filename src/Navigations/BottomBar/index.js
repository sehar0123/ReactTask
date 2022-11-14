import React, {useState, useEffect} from 'react';
import Icon4 from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

import Ionicons from 'react-native-vector-icons/Ionicons';

import LottieView from 'lottie-react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {theme} from '../../Core/Theme';
import Home from '../../Screens/Main/Home/Index';
;
import {fontRef, heightRef} from '../../Constant/screenSize';

import Profile from '../../Screens/Profile';


import Location from '../../Screens/Main/Location';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const [loading, setLoading] = useState(false);
  const state = useSelector(state => state);
  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);
  return  (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: 'true',
        tabBarStyle: {
          height: 70 * heightRef,
          backgroundColor:state.theme.theme=="dark"?"black":"white",
          paddingHorizontal: 10,
          paddingVertical: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <Octicons
              name="home"
              size={focused ? 35 * fontRef : 30 * fontRef}
              color={focused ? theme.primary : theme.active}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              name="search"
              size={focused ? 35 * fontRef : 30 * fontRef}
              color={focused ? theme.primary : theme.inactive}
            />
          ),
        }}
      /> */}

    
   
      
     
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="location-outline"
              size={focused ? 40 * fontRef : 35 * fontRef}
              color={focused ? theme.primary : theme.active}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={focused ? 40 * fontRef : 35 * fontRef}
              color={focused ? theme.primary : theme.active}
            />
          ),
        }}
      />
    </Tab.Navigator>
  
  );
}
