import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import {fontRef, heightRef, widthRef} from 'src/Constant/screenSize';
import {theme} from 'src/Core/Theme';

const Nointernet = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../Assets/Images/nowifi.png')}
        style={styles.image}></Image>
      <Text style={styles.text}>There is no Internet {'\n'} Connectivity</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100 * heightRef,
    width: 100 * widthRef,
    tintColor: 'grey',
    margin: 10 * heightRef,
  },
  text: {
    color: 'grey',
    fontSize: 18 * fontRef,

    fontWeight: '500',
    textAlign: 'center',
  },
});

// define your styles

//make this component available to the app
export default Nointernet;
