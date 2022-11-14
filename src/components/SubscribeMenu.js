import React, {useState} from 'react';
import {View, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

import {fontRef, heightRef, widthRef} from '../Constant/screenSize';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../Core/Theme';
import DeletedModal from './Modal';
const SubscribeMenu = ({onPress}) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    setVisible(false), onPress();
  };
  const showMenu = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setModalVisible(true), setVisible(false);
  };
  const Edited = () => {
    setVisible(false), navigation.navigate('Edited');
  };
  return (
    <View style={{alignSelf: 'flex-end'}}>
      <Menu>
        <MenuTrigger>
          <View
            style={{
              width: 25 * heightRef,
              height: 25 * heightRef,
              borderRadius: (25 / 2) * heightRef,
              backgroundColor: theme.secondary,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              margin: 5 * heightRef,
            }}>
            <Icon
              name="dots-three-horizontal"
              type="Entypo"
              size={20 * fontRef}
              style={{alignSelf: 'center'}}
              color={'grey'}
            />
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{width: 130 * widthRef}}>
          <MenuOption onSelect={hideMenu}>
            <Text style={{color: theme.grey, margin: 5 * heightRef}}>
              UnSubscribe
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default SubscribeMenu;

const styles = StyleSheet.create({
  container: {
    // padding: 50,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // height: 200,
  },
});
const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'green',
    width: 40,
  },
  optionsWrapper: {
    backgroundColor: 'purple',
  },
  optionWrapper: {
    backgroundColor: 'yellow',
    margin: 5,
  },
  optionTouchable: {
    underlayColor: 'gold',
    activeOpacity: 70,
  },
  optionText: {
    color: 'brown',
  },
};
