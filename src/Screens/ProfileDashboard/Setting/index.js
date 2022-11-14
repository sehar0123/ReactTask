//import liraries
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,

} from 'react-native';

import styles from './styles';


import Header from 'src/components/Header';
import {Divider, ProgressBar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Switch } from 'react-native';
import { theme } from 'src/Core/Theme';
import { changeTheme } from 'src/redux/reducers/ChangeTheme/themeAction';
import { connect, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
export const SwitchTheme = React.createContext(false);
// create a component
const Setting = props => {
  const [switchOn, setSwitchOn] = useState(null);
  const state = useSelector(state => state);
  const navigation=useNavigation();
  const togglebtn = async () => {
   if(props.theme.theme==="dark"){
    props.changeTheme("light")

   }else{
    props.changeTheme("dark")
   }
  };

  useEffect(() => {
    AsyncStorage.setItem('switch', JSON.stringify(switchOn));
    console.log('Switch===>', switchOn);
  }, [switchOn]);

  return (
   
      <View style={{...styles.container,backgroundColor:props.theme.theme=="dark"?"black":theme.secondary}}>
        <Header
        title="Setting"
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
      />
        <View style={styles.row}>
          <View>
            <Text style={{...styles.title,color:props.theme.theme=="dark"?"white":'black'}}>Dark Mode</Text>
            {/* <Text style={styles.heading}>Switch to play the quiz</Text> */}
          </View>
          <Switch
        trackColor={{ false: theme.primary, true: theme.primary }}
        thumbColor={props.theme.theme ?theme.primary : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={togglebtn}
        value={props.theme.theme}
      />
        </View>
        <Divider style={{backgroundColor:props.theme.theme=="dark"?theme.primary: 'grey'}} />
      </View>
   
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
changeTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);