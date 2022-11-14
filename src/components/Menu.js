import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

import {fontRef, heightRef} from '../Constant/screenSize';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../Core/Theme';
import DeletedModal from './Modal';
import {
  deleteUserAbbrevaition,
  getUserAbbrevaitions,
} from 'src/redux/reducers/ProductList/productActions';
import {connect} from 'react-redux';
const MenuExample = props => {
  const {id, phrase, abbreviation, category} = props;
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const hideMenu = () => setVisible(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const showMenu = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setModalVisible(true), setVisible(false);
  };
  const Edited = () => {
    setVisible(false),
      navigation.navigate('Edited', {
        phrase: phrase,
        abbreviation: abbreviation,
        category: category,
        id: id,
      });
  };
  return (
    <View style={{alignSelf: 'flex-end'}}>
      <Menu
        visible={visible}
        style={{alignSelf: 'flex-end'}}
        anchor={
          <Icon
            name="dots-three-horizontal"
            type="Entypo"
            size={20 * fontRef}
            style={{alignSelf: 'flex-end'}}
            color={'grey'}
            onPress={showMenu}
          />
        }
        onRequestClose={hideMenu}>
        <MenuItem
          onPress={hideModal}
          textStyle={{color: theme.grey}}
          style={{color: theme.grey}}>
          Delete
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onPress={Edited}
          textStyle={{color: theme.grey}}
          style={{color: theme.grey}}>
          Edit
        </MenuItem>
      </Menu>
      <DeletedModal
        isLoading={loader}
        disabled={loader == true ? true : false}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        onPress={() => {
          console.log('hi', id);
          setLoader(true);
          props.deleteUserAbbrevaition(id, ({success}) => {
            if (success) {
              setModalVisible(false);
              setLoader(false);
              EnableSnackBar(
                {
                  data: 'Abbreviation removed  Successfully  ',
                },
                true,
              );
            }
          });
        }}
      />
    </View>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {deleteUserAbbrevaition};

export default connect(mapStateToProps, mapDispatchToProps)(MenuExample);

const styles = StyleSheet.create({
  container: {
    // padding: 50,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // height: 200,
  },
});
