import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import Button from '../Button';
import {fontRef, heightRef} from '../../Constant/screenSize';
import {theme} from '../../Core/Theme';
import Icon from 'react-native-dynamic-vector-icons';

const Alert = props => {
  const {isModalVisible, setModalVisible} = props;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection={['down']}
      style={styles.bottomView}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.content2}>
        {/* <Icon
      name="delete"
      type="MaterialCommunityIcons"
      size={80* fontRef}
     
      color={'red'}
      onPress={() => {}}
    /> */}
        <Text style={styles.title}>{props.title} </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: 10 * heightRef,
          }}>
          <Button
            disabled={props.disabled}
            elevation={10}
            buttonText={'NO'}
            buttonHeight={40 * heightRef}
            titleFontStyle={'600'}
            titleColor={theme.black}
            titleFontSize={20 * fontRef}
            buttonWidth={'45%'}
            //   isLoading={state.loginLoading}
            buttonColor={theme.dark}
            borderColor={theme.dark}
            buttonCorners={5 * heightRef}
            style={{opacity: 1}}
            onPress={() => setModalVisible(false)}
          />
          <Button
            elevation={10}
            buttonText={'YES'}
            buttonHeight={40 * heightRef}
            titleFontStyle={'600'}
            titleColor={theme.black}
            titleFontSize={20 * fontRef}
            buttonWidth={'45%'}
            isLoading={props.isLoading}
            buttonColor={'red'}
            borderColor={'red'}
            buttonCorners={5 * heightRef}
            style={{opacity: 1}}
            onPress={props.onPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
