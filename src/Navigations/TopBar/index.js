import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Add from '../../Screens/ProfileDashboard/Add';
import {theme} from '../../Core/Theme';
import {fontRef, heightRef, widthRef} from '../../Constant/screenSize';
import Icon from 'react-native-dynamic-vector-icons';
import Header from '../../components/Header';
import List from '../../Screens/ProfileDashboard/Setting';
import Favourite from '../../Screens/ProfileDashboard/Favourite';
import {Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditedProfile from 'src/Screens/ProfileDashboard/EditedProfile';
import {UpdatePassword} from 'src/redux/reducers/Auth/authActions';
import PasswordChange from 'src/Screens/ProfileDashboard/PasswordChange';
const Tab = createMaterialTopTabNavigator();

const TopBar = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: theme.secondary}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',

            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name={'chevron-left'}
            size={35 * fontRef}
            color={'black'}
            onPress={() => navigation.goBack()}
          />

          <Text style={styles.headerText}>Profile</Text>
        </View>
      </View>

      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,

          style: {
            backgroundColor: theme.black,
          },
          indicatorStyle: {
            borderBottomColor: theme.dark,
            borderBottomWidth: 3,
            // width: '35%',
            // left: '10%',

            alignSelf: 'center',

            backgroundColor: 'white',
          },
          tabStyle: {
            height: 60 * heightRef,
            justifyContent: 'center',

            // width: fullWidth / 4,
          },
        }}>
        <Tab.Screen
          name="EditedProfile"
          component={EditedProfile}
          options={{
            tabBarLabel: 'Favourite',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  // bottom: 10,
                  position: 'absolute',
                  left: -50 * widthRef,
                  marginRight: 50 * heightRef,

                  alignItems: 'center',
                }}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="account-outline"
                  size={30 * fontRef}
                  color={theme.dark}
                />
                <Text
                  style={{
                    fontSize: 16 * heightRef,
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontFamily: theme.fontFamilyBold,
                    color: theme.primary,
                  }}>
                  Edit Profile
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="PasswordChange"
          component={PasswordChange}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 140,
                  // bottom: 10,
                  position: 'absolute',
                  left: -60 * widthRef,
                  marginRight: 60 * heightRef,

                  alignItems: 'center',
                }}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="lock-outline"
                  size={27 * fontRef}
                  color={theme.dark}
                />
                <Text
                  style={{
                    fontSize: 16 * heightRef,
                    fontWeight: 'bold',
                    marginRight: 15,
                    fontFamily: theme.fontFamilyBold,
                    color: theme.primary,
                  }}>
                  Channge Password
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default TopBar;
const styles = StyleSheet.create({
  container: {
    height: 60 * fontRef,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#C0C0C0',
    // borderBottomLeftRadius:20*fontRef,
    // borderBottomRightRadius:20*fontRef,
    // margin: 10 * fontRef,
    elevation: 2,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 22 * fontRef,
    color: 'black',
    marginHorizontal: 40 * widthRef,
    fontWeight: '700',
    alignSelf: 'center',
    marginRight: 40 * fontRef,
    fontFamily: theme.fontFamily,
  },
});
