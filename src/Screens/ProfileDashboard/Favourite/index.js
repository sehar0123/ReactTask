import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-dynamic-vector-icons';
import {fontRef, fullWidth, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Header from '../../../components/Header';
import {Divider, TextInput} from 'react-native-paper';
import Button from '../../../components/Button';
import Clipboard from '@react-native-clipboard/clipboard';
import DropDownPicker from 'react-native-dropdown-picker';
import {category} from '../../../components/DummayData';
import {
  getsubscribe,
  removeSubscribeCategories,
  getPrivatecategories,
} from 'src/redux/reducers/ProductList/productActions';
import SubscribeMenu from '../../../components/SubscribeMenu';
import {connect, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {EnableSnackBar} from 'src/config/function';
const Favourite = props => {
  const [abc, setAbc] = useState(-1);
  const [data, setData] = useState(category);
  const [data1, setData1] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigation = useNavigation();
  const [checked, setChecked] = useState();
  const state = useSelector(state => state);
  useEffect(() => {
    props.getsubscribe(undefined, ({success}) => {
      if (success) {
        setLoader(false);
        console.log('HDHDH', state?.abbrevaition?.subscribe);
      } else {
        setLoader(false);
      }
    });
  }, []);
  const remove = i => {
    // setData1([...data.slice(0,index)], ...[data.slice(index+1)])
    // // console.log(data)
    setData(data.filter(item => item.id != i));
    // console.log([...data.slice(0,index)],...[data.slice(index+1)])
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Subscribed"
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
      />
      {/* <Header title=" Abbrevation"  leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}/> */}

      {/* <Text style={styles.profile}> Your Profile</Text> */}
      {loader ? (
        <LottieView
          source={require('../../../Assets/Animation/progressbar.json')}
          autoPlay
          style={{
            width: 100,
            alignSelf: 'center',
            // flex: 1,
            marginTop: '50%',
          }}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: '1%',
            // alignItems: 'center',
            // alignSelf: 'center',
          }}>
          <FlatList
            data={state?.abbrevaition?.subscribe?.filter(
              item => item.subscribed == 1,
            )}
            showsVerticalScrollIndicator={false}
            bounces={false}
            numColumns={3}
            keyExtractor={item => item.id}
            style={{width: '100%', alignSelf: 'center'}}
            contentContainerStyle={{
              justifyContent: 'center',
              // width: '100%',
              alignItems: 'flex-start',

              // alignSelf: 'center',
            }}
            ListEmptyComponent={() => (
              <View
                style={{
                  marginTop: '50%',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../Assets/Images/emptyicon.png')}
                  style={{
                    width: 90 * heightRef,
                    height: 90 * heightRef,

                    tintColor: theme.primary,
                  }}></Image>
                <Text
                  style={{
                    fontSize: 18 * fontRef,
                    fontFamily: theme.fontFamily,
                    color: theme.inactive,
                    fontFamily: '500',
                  }}>
                  Subscribe Categories Not Found
                </Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            // ItemSeparatorComponent={() => (
            //   <View style={{padding: 5 * heightRef}}></View>
            // )}
            ListHeaderComponent={() => (
              <View style={{padding: 5 * heightRef}}></View>
            )}
            ListFooterComponent={() => (
              <View style={{padding: 5 * heightRef}}></View>
            )}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CategoryProfile', {
                    icon: 'graduation-cap',
                    type: 'FontAwesome',
                    title: item.title,
                    subscribed: item.subscribed,
                  })
                }
                style={styles.card}>
                <SubscribeMenu
                  onPress={() => {
                    console.log('hi', item.id);
                    props.removeSubscribeCategories(
                      {category_id: item.id},
                      ({success}) => {
                        if (success) {
                          props.getsubscribe(undefined, ({success, data}) => {
                            if (success) {
                              // props.();
                              EnableSnackBar(
                                {
                                  data: 'Category UnSubscribed Successfully ',
                                },
                                true,
                              );

                              console.log('------------');
                            }
                          });
                        }
                      },
                    );
                  }}
                />
                {/* <TouchableOpacity
             activeOpacity={1}
             onPress={() => handlecheck(index)}
              style={{
                ...styles.checkbox,
               
                backgroundColor: theme.black,
              }}>
              <AntDesign
                name={'check'}
                color={theme.primary}
                size={30 * fontRef}
                // onPress={() => handlecheck(index)}
                style={{
                  alignSelf: 'center',
                  // position: 'absolute',
                  // top: -2,
                  // left: -1,
                }}
              />
            </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CategoryProfile', {
                      icon: 'graduation-cap',
                      type: 'FontAwesome',
                      title: item.title,
                      subscribed: item.subscribed,
                    })
                  }
                  style={{
                    width: 70 * heightRef,
                    height: 70 * heightRef,
                    borderRadius: 35 * heightRef,
                    backgroundColor: theme.secondary,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginBottom: 10 * heightRef,
                  }}>
                  <Icon
                    name="graduation-cap"
                    type="FontAwesome"
                    size={40}
                    color={theme.primary}
                    onPress={() =>
                      navigation.navigate('CategoryProfile', {
                        icon: 'graduation-cap',
                        type: 'FontAwesome',
                        title: item.title,
                        subscribed: item.subscribed,
                      })
                    }
                  />
                </TouchableOpacity>

                <Divider style={styles.divider} />
                <Text style={styles.name}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  getsubscribe,
  removeSubscribeCategories,
  getPrivatecategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
