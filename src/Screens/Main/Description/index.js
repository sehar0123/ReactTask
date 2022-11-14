//import liraries
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
import {Data} from '../../../components/DummayData';
import {styles} from './styles';

import {getHeight} from '../../../Constant/functions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../../Core/Theme';
import {fontRef, fullHeight} from '../../../Constant/screenSize';
import Header from '../../../components/Header';
import AnimatedHeader from '../../../components/AnimatedHeader';
import LinearGradient from 'react-native-linear-gradient';
// create a component

const Description = ({route, navigation}) => {
  const {backgroundImage} = route.params;

  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedHeader
        title="Fandom"
        scrollA={scrollA}
        LeftIcon={() => navigation.goBack()}
      />
      <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={styles.bannerContainer}>
          <Animated.View style={styles.banner(scrollA)}>
            <ImageBackground
              // style={styles.banner(scrollA)}
              resizeMode="cover"
              style={{height: 400}}
              source={backgroundImage}>
              <LinearGradient
                colors={['#233329', '#ffffff00']}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                style={styles.linervertical}>
                <View style={styles.footertext}>
                  <Text numberOfLines={3} style={styles.title}>
                    While this is correct, please explain a bit more about the
                    answer instead of just pasting code
                  </Text>
                </View>
                <View style={styles.cardfotter}>
                  <View style={styles.headerview}>
                    <View style={styles.row}>
                      <Text style={{...styles.logotext, color: 'yellow'}}>
                        Fandom
                      </Text>
                      <Text style={styles.logotext}>5/27/2022</Text>
                    </View>
                    <AntDesign
                      name="sharealt"
                      size={30 * fontRef}
                      color={'#FFF'}
                    />
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </Animated.View>
        </View>
        <Text style={styles.text}>{Data.Description}</Text>
        <Text style={styles.text}>{Data.Description}</Text>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default Description;
