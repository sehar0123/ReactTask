import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';

import {theme} from '../../Core/Theme';
import {getcategories} from 'src/redux/reducers/ProductList/productActions';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// create a component
const onBoarding = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigation = useNavigation();
  const next = () => {
    if (!!swiperRef) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      showsPagination={currentIndex == 2 ? false : true}
      onIndexChanged={index => {
        setCurrentIndex(index);
      }}
      paginationStyle={{marginBottom: '25%'}}
      dotColor={theme.primary}
      activeDotStyle={{width: '7%'}}
      activeDotColor={theme.primary}
      loop={false}>
      <ImageBackground
        style={styles.container}
        source={require('../../Assets/Images/boarding.jpg')}>
        <Text style={styles.Textintro}>
          {' '}
          Don’t get confused by {'\n'} an abbreviation just {'\n'}copy-paste and
          find out
        </Text>
        <Image
          source={require('../../Assets/Animation/Blogpost.gif')}
          style={{
            width: 300,
            height: 300,
            marginTop: '20%',
            alignSelf: 'center',
          }}></Image>
        <TouchableOpacity style={styles.nextButton2} onPress={() => next()}>
          <TouchableOpacity style={styles.nextButton} onPress={() => next()}>
            <LinearGradient
              style={styles.nextButton}
              colors={['#58A176', '#116F37']}>
              <Feather
                name="arrow-right"
                size={25}
                color={theme.black}
                onPress={() => next()}
              />
            </LinearGradient>
          </TouchableOpacity>
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground
        style={styles.container}
        source={require('../../Assets/Images/boarding.jpg')}>
        <Text style={styles.Textintro}>
          {' '}
          Get Free instant access of {'\n'} 1 million + abbreviations {'\n'}
          Learning will be more{'\n'} fun with ABBREVIATION
        </Text>
        <Image
          source={require('../../Assets/Animation/Search.gif')}
          style={{
            width: 300,
            height: 300,
            marginTop: '20%',
            alignSelf: 'center',
          }}></Image>
        <TouchableOpacity
          style={styles.nextButton2}
          onPress={() => {
            navigation.replace('BottomTab'), props.getcategories(undefined);
          }}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              navigation.replace('BottomTab'), props.getcategories(undefined);
            }}>
            <LinearGradient
              style={styles.nextButton}
              colors={['#58A176', '#116F37']}>
              <Feather
                name="arrow-right"
                size={25}
                color={theme.black}
                onPress={() => {
                  navigation.replace('BottomTab'),
                    props.getcategories(undefined);
                }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </TouchableOpacity>
      </ImageBackground>
    </Swiper>
  );
};
const mapStateToProps = state => state;
//make this component available to the app
const mapDispatchToProps = {getcategories};

export default connect(mapStateToProps, mapDispatchToProps)(onBoarding);
