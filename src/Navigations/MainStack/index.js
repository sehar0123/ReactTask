import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../BottomBar';

import Home from '../../Screens/Main/Home/Index';

import {StatusBar} from 'react-native';
import Login from '../../Screens/Authenication/Login';
import SignUp from '../../Screens/Authenication/SignUp';

import {theme} from '../../Core/Theme';

import Setting from '../../Screens/ProfileDashboard/Setting';
const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {
 


    return (
      <NavigationContainer independent={true}>
        <StatusBar backgroundColor={theme.primary} barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
         
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
         
         
       
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
        
         
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{
              headerShown: false,
            }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
 
  
};

export default MainStack;
