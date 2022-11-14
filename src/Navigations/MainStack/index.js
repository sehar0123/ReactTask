import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../BottomBar';
import Bookmark from '../../Screens/Main/Bookmark';
import Notifications from '../../Screens/Main/Notifications';
import Categories from '../../Screens/Main/Categories/Index';
import Search from '../../Screens/Main/Search/Index';
import Home from '../../Screens/Main/Home/Index';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CategoriesList from '../../Screens/Main/CategoriesList';
import Description from '../../Screens/Main/Description';
import CategoriesDescription from '../../Screens/Main/CategoriesDescription';
import CategoriesTab from '../../Screens/Main/CategoriesTab';
import {StatusBar} from 'react-native';
import Login from '../../Screens/Authenication/Login';
import SignUp from '../../Screens/Authenication/SignUp';

import Add from '../../Screens/ProfileDashboard/Add';

import Edited from '../../Screens/ProfileDashboard/Edited';
import TopBar from '../TopBar';
import AuthorProfile from '../../Screens/ProfileDashboard/AuthorProfile';
import EditedProfile from '../../Screens/ProfileDashboard/EditedProfile';
import {theme} from '../../Core/Theme';
import About from '../../Screens/ProfileDashboard/About';
import CategoryProfile from '../../Screens/Category/CategoryProfile';
import Publisherdetails from '../../Screens/Main/Publisherdetails';
import PasswordChange from 'src/Screens/ProfileDashboard/PasswordChange';
import Favourite from 'src/Screens/ProfileDashboard/Favourite';
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
            name="Publisherdetails"
            component={Publisherdetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Bookmark"
            component={Bookmark}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesList"
            component={CategoriesList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesDescription"
            component={CategoriesDescription}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Favourite"
            component={Favourite}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesTab"
            component={CategoriesTab}
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
            name="Add"
            component={Add}
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
          <Stack.Screen
            name="Edited"
            component={Edited}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="TopBar"
            component={TopBar}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AuthorProfile"
            component={AuthorProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditedProfile"
            component={EditedProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PasswordChange"
            component={PasswordChange}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoryProfile"
            component={CategoryProfile}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
 
  
};

export default MainStack;
