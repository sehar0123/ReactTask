//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontRef, widthRef} from '../../Constant/screenSize';
import {theme} from '../../Core/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const Header = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',

          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name={props.leftIcon}
          size={35 * fontRef}
          color={'black'}
          onPress={props.onPressLeft}
        />

        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <MaterialCommunityIcons
        name={props.rightIcon}
        size={35 * fontRef}
        color={'black'}
        onPress={props.onPressRight}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 60 * fontRef,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#C0C0C0',
    borderBottomLeftRadius: 20 * fontRef,
    borderBottomRightRadius: 20 * fontRef,
    // margin: 10 * fontRef,
    elevation: 2,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 22 * fontRef,
    color: 'black',
    marginHorizontal: 20 * widthRef,
    fontWeight: '700',
    alignSelf: 'center',

    marginRight: 10 * fontRef,
    fontFamily: theme.fontFamily,
  },
});

//make this component available to the app
export default Header;
