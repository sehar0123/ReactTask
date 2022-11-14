//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/Header';
import {fontRef, fullWidth, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import {data} from '../Categories/Index';
import {styles} from './styles';
// create a component
const CategoriesList = ({navigation, route}) => {
  const {title} = route.params;

  const [checked, setChecked] = React.useState();
  return (
    <View style={{flex: 1}}>
      <Header
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
        title={title}
      />

      <FlatList
        numColumns={3}
        style={{width: fullWidth - 20, alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}
        data={data}
        ListHeaderComponent={() => (
          <View style={{marginTop: 30 * heightRef}}></View>
        )}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <LinearGradient
            colors={item.backgroundColor}
            style={{
              flex: 1,

              margin: 10 * heightRef,
              alignItems: 'center',
              justifyContent: 'center',

              borderRadius: 5 * fontRef,
            }}>
            <ImageBackground
              resizeMode="contain"
              imageStyle={{
                borderRadius: 4,
              }}
              style={styles.backimage1}
              source={item.image}>
              <Text style={styles.movieName}>{item.name}</Text>
            </ImageBackground>
            <TouchableOpacity
              onPress={() => {
                setChecked(index);
              }}
              style={{
                ...styles.checkbox,
                backgroundColor: checked == index ? theme.black : theme.primary,
              }}>
              <AntDesign
                name={checked == index ? 'check' : 'plus'}
                color={checked == index ? theme.primary : theme.black}
                size={35 * fontRef}
                style={{
                  alignSelf: 'center',
                  position: 'absolute',
                  top: -2,
                  left: -1,
                }}
              />
            </TouchableOpacity>
          </LinearGradient>
        )}
      />
    </View>
  );
};

//make this component available to the app
export default CategoriesList;
