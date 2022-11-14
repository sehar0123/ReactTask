import React, {useState} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-dynamic-vector-icons';
import {fontRef, fullWidth, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Header from '../../../components/Header';
import {TextInput} from 'react-native-paper';
import Button from '../../../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
const About = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          title="About"
          leftIcon="chevron-left"
          onPressLeft={() => navigation.goBack()}
        />

        {/* <Text style={styles.title}>
        Thanks for using {'\n'} Abbrevation Application
      </Text> */}
        <Image
          resizeMode="contain"
          source={require('../../../Assets/Images/icon.png')}
          style={{
            alignSelf: 'center',
            height: 150 * heightRef,
            width: 150 * heightRef,
            marginVertical: 50 * heightRef,
          }}
        />
        <Text style={styles.author}>
          In Full Form Application, we are providing unlimited definitions of
          abbreviations. User can copy, paste, delete any abbreviation and
          bookmark any abbreviation. Get abbreviations from different sectors,
          Filter through these categories to find any abbreviation definition
          quickly. Accounting, Computer Science, Medical, Database, Income
          Statement, Doctorate, Engineering, Emergency, Business and many more.
          Search more than 1,000,000 abbreviations from Full Form. All items are
          approved by our editor. Abbreviations can be bookmarked indefinitely.
          See search recommendations as you enter to ensure that you
          consistently find what you’re searching for. User can share
          abbreviation of his/her own choice to social platforms. Full Form is
          the ideal free abbreviation reference for medical personnels, business
          people, government officials, education employees, and anybody who
          needs to swiftly interpret the ever-increasing number of
          abbreviations.
        </Text>
        {/* <Button
        elevation={10}
        buttonText={'Rate the App'}
        buttonHeight={50 * heightRef}
        titleFontStyle={'600'}
        titleColor={theme.black}
        titleFontSize={20 * fontRef}
        buttonWidth={'85%'}
        //   isLoading={state.loginLoading}
        buttonColor={theme.primary}
        borderColor={theme.primary}
        buttonCorners={5 * heightRef}
        style={{opacity: 1, marginTop: '5%'}}
        onPress={() =>
          Linking.openURL(
            'https://play.google.com/store/apps/details?id=com.abbrevation.dictionary',
          )
        }
      /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
