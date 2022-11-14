//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox, Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/Header';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';

import styles from './styles';
import Icon from 'react-native-dynamic-vector-icons';
import {
  getcategories,
  SubscribeCategories,
  getsubscribe,
  getPrivatecategories,
  removeSubscribeCategories,
  getcategoriesDetails,
} from 'src/redux/reducers/ProductList/productActions';
import {connect, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
import {EnableSnackBar} from 'src/config/function';
import {data2} from 'src/Screens/Main/Categories/Index';
import Button from 'src/components/Button';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native';
const Abbrevation = props => {
  const [abc, setAbc] = useState(-1);
  const [data1, setData1] = useState([]);
  const [sub, setSub] = useState();
  const [checked, setChecked] = useState();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const state = useSelector(state => state);
  // console.log('jje', state.abbrevaition?.subscribe);
  useFocusEffect(
    React.useCallback(() => {
      setLoader(true),
        props?.auth?.token
          ? props.getsubscribe({}, ({success, data}) => {
              if (success) {
                setLoader(false);
                console.log('value', JSON.stringify(data, null, 2));
                setData1(data);
              } else {
                setLoader(false);
              }
            })
          : props.getcategories(undefined, ({success}) => {
              if (success) {
                // console.log('Public', state?.abbrevaition.categories);
                setData1(state?.abbrevaition?.categories);
                setLoader(false);
              } else {
                setLoader(false);
              }
            });
    }, [abc, props?.auth?.token]),
  );
  const searchFilterFunction = text => {
    if (text) {
      const newData = data1.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
      console.log(search, newData);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(data1);
      setSearch(text);
    }
  };
  // const catogries = () =
  //   props.getcategories(undefined, ({success}) => {
  //     if (success) {
  //       setLoading(false);
  //       // navigation.navigate('BottomTab');
  //     } else {
  //       setLoading(false);
  //       // EnableSnackBar({data: 'Something went wrong.'}, false);
  //     }
  //   });
  const handlecheck = (item, index) => {
    console.log('subscribed', item?.subscribed, index);
    if (item?.subscribed == 1) {
      setData1([
        ...data1.slice(0, index),
        Object.assign({}, data1[index], {subscribed: 0}),
        ...data1.slice(index + 1),
      ]);
      setLoading(true);
      props.removeSubscribeCategories(
        {category_id: item?.id},

        ({success}) => {
          if (success) {
            props.getsubscribe(undefined, ({success, data}) => {
              if (success) {
                // acd?.push(item.id);
                // setData1(acd);
                setLoading(false);
                // setData1(data);
                // setAbc(item.id - 1);
                // EnableSnackBar(
                //   {
                //     data: 'Category unSubscribed Successfully ',
                //   },
                //   true,
                // );
                // setAbc(item.id - 1);
              }
            });
          }
        },
      );
    }
    if (item?.subscribed == 0) {
      setData1([
        ...data1.slice(0, index),
        Object.assign({}, data1[index], {subscribed: 1}),
        ...data1.slice(index + 1),
      ]);
      setLoading(true);
      props.SubscribeCategories({category_id: item?.id}, ({success}) => {
        if (success) {
          props.getsubscribe(undefined, ({success, data}) => {
            if (success) {
              // setData1(ab);
              // setAbc(item.id - 1);
              // setData1(data);
              setLoading(false);
              // setAbc(item.id - 1);
              console.log(item, 'item');

              // state.subscribe.categories.subscribed;

              // navigation.navigate('Favourite');
              // setLoading(false);
              // navigation.goBack();
            }
          });
        }
      });
    }

    // setAbc(item.id);
    // console.log('2', index, data1);
  };

  return (
    <View style={styles.container}>
      {showSearch ? (
        <View style={styles.container2}>
          <View style={styles.searchbar}>
            <TextInput
              style={styles.input}
              placeholder="Search Categories..."
              value={search}
              placeholderTextColor={theme.grey}
              onChangeText={text => searchFilterFunction(text)}
            />
          </View>
          <Icon
            type="Feather"
            name="x-circle"
            size={25 * fontRef}
            style={{alignSelf: 'center', marginRight: 10 * widthRef}}
            color={theme.primary}
            onPress={() => {
              setShowSearch(false), setSearch('');
            }}
          />
          {/* <Icon
              type="Feather"
              name="search"
              size={25 * fontRef}
              style={{top: 18 * heightRef}}
              color={theme.primary}
            /> */}
        </View>
      ) : (
        <View style={styles.container2}>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',

              alignItems: 'center',
            }}>
            <Text style={styles.headerText}>{'Categories'}</Text>
          </View>
          <Icon
            type="Feather"
            name="search"
            size={25 * fontRef}
            color={theme.primary}
            style={{alignSelf: 'center', marginRight: 20 * widthRef}}
            onPress={() => setShowSearch(true)}
          />
        </View>
      )}

      {loader ? (
        <LottieView
          source={require('../../../Assets/Animation/progressbar.json')}
          autoPlay
          style={{
            width: 100,
            alignSelf: 'center',
            marginTop: '50%',
          }}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            marginLeft: '2%',
            height: fullHeight - 110 * heightRef,
            // alignItems: 'center',
            // alignSelf: 'center',
          }}>
          <FlatList
            data={search == '' ? data1 : filteredDataSource}
            showsVerticalScrollIndicator={false}
            style={{width: '100%', alignSelf: 'center', height: fullHeight}}
            contentContainerStyle={{
              justifyContent: 'center',
              // width: '100%',
              alignItems: 'flex-start',

              // alignSelf: 'center',
            }}
            bounces={false}
            numColumns={3}
            keyExtractor={item => item.id}
            // columnWrapperStyle={{

            // }}
            showsHorizontalScrollIndicator={false}
            // ItemSeparatorComponent={() => (
            //   <View style={{padding: 5 * heightRef}}></View>
            // )}
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
                  Categories Not Found
                </Text>
              </View>
            )}
            ListHeaderComponent={() => (
              <View style={{padding: 5 * heightRef}}></View>
            )}
            ListFooterComponent={() => (
              <View style={{padding: 5 * heightRef}}>
                <Text style={{color: 'transparent', fontSize: 16}}>{abc}</Text>
              </View>
            )}
            renderItem={({item, index}) => (
              // console.log(state?.abbrevaition?.subscribe[index]?.subscribed),
              <TouchableOpacity
                onPress={() => {
                  props.getcategoriesDetails(
                    item?.id,
                    state?.auth?.profile?.id,
                    ({success}) => {
                      if (success) {
                        navigation.navigate('CategoryProfile', {
                          icon: 'graduation-cap',
                          type: 'FontAwesome',
                          title: item?.title,
                          id: item?.id,
                          subscribed: item?.subscribed,
                        });
                      } else {
                        EnableSnackBar(
                          {
                            data: 'Cannot get categories details  at the moment ',
                          },
                          true,
                        );
                      }
                    },
                  );
                }}
                style={styles.card}>
                {/* <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  props.auth.token
                    ? handlecheck(item, index)
                    : // !data1?.includes(item.id)
                      //   ? handlecheck(item.id)
                      // : // props.SubscribeCategories(
                      //   //   {category_id: item.id},
                      //   //   ({success}) => {
                      //   //     if (success) {
                      //   //       console.log(item, 'item'),
                      //   //         props.getsubscribe(undefined, ({success}) => {
                      //   //           if (success) {
                      //   //             EnableSnackBar(
                      //   //               {
                      //   //                 data: 'Category Subscribe Successfully ',
                      //   //               },
                      //   //               true,
                      //   //             );
                      //   //             // state.subscribe.categories.subscribed;

                      //   //             // navigation.navigate('Favourite');
                      //   //             // setLoading(false);
                      //   //             // navigation.goBack();
                      //   //           }
                      //   //         });
                      //   //     }
                      //   //   },
                      //   // )
                      //   (handlecheck(item.id),
                      //   props.removeSubscribeCategories(
                      //     {category_id: item.id},

                      //     ({success}) => {
                      //       if (success) {
                      //         props.getsubscribe(undefined, ({success}) => {
                      //           if (success) {
                      //             EnableSnackBar(
                      //               {
                      //                 data: 'Category unSubscribe Successfully ',
                      //               },
                      //               true,
                      //             );
                      //           }
                      //         });
                      //       }
                      //     },
                      //   ))
                      navigation.navigate('Login');
                }}
                style={{
                  ...styles.checkbox,

                  backgroundColor:
                    data1[index]?.subscribed == 1
                      ? theme.black
                      : theme.subscribebtn,
                }}>
                <AntDesign
                  name={data1[index]?.subscribed == 1 ? 'check' : 'plus'}
                  color={
                    data1[index]?.subscribed == 1 ? theme.primary : theme.black
                  }
                  size={30 * fontRef}
                  // onPress={() => {
                  //   props.auth.token
                  //     ? !data1?.includes(index)
                  //       ? (handlecheck(index),
                  //         props.SubscribeCategories(
                  //           {category_id: item.id},
                  //           console.log(item),
                  //           ({success}) => {
                  //             if (success) {
                  //               props.getsubscribe(undefined, ({success}) => {
                  //                 if (success) {
                  //                   EnableSnackBar(
                  //                     {
                  //                       data: 'Category Subscribe Successfully ',
                  //                     },
                  //                     true,
                  //                   );
                  //                   // state.subscribe.categories.subscribed;

                  //                   // navigation.navigate('Favourite');
                  //                   // setLoading(false);
                  //                   // navigation.goBack();
                  //                 }
                  //               });
                  //             }
                  //           },
                  //         ))
                  //       : (handlecheck(index),
                  //         props.removeSubscribeCategories(
                  //           {category_id: item.id},

                  //           ({success}) => {
                  //             if (success) {
                  //               props.getsubscribe(undefined, ({success}) => {
                  //                 if (success) {
                  //                   EnableSnackBar(
                  //                     {
                  //                       data: 'Category unSubscribe Successfully ',
                  //                     },
                  //                     true,
                  //                   );
                  //                 }
                  //               });
                  //             }
                  //           },
                  //         ))
                  //     : navigation.navigate('Login');
                  // }}
                  style={{
                    alignSelf: 'center',
                    // position: 'absolute',
                    // top: -2,
                    // left: -1,
                  }}
                />
              </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => {
                    props.getcategoriesDetails(
                      item?.id,
                      state?.auth?.profile?.id,
                      ({success}) => {
                        if (success) {
                          navigation.navigate('CategoryProfile', {
                            icon: 'graduation-cap',
                            type: 'FontAwesome',
                            title: item?.title,
                            id: item?.id,
                            subscribed: item?.subscribed,
                          });
                        } else {
                          EnableSnackBar(
                            {
                              data: 'Cannot get categories details  at the moment ',
                            },
                            true,
                          );
                        }
                      },
                    );
                  }}
                  style={{
                    width: 70 * heightRef,
                    height: 70 * heightRef,
                    borderRadius: 35 * heightRef,
                    backgroundColor: theme.secondary,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: 5 * heightRef,
                  }}>
                  <Icon
                    name="graduation-cap"
                    type="FontAwesome"
                    size={40}
                    color={theme.primary}
                    onPress={() => {
                      props.getcategoriesDetails(
                        item?.id,
                        state?.auth?.profile?.id,
                        ({success}) => {
                          if (success) {
                            navigation.navigate('CategoryProfile', {
                              icon: 'graduation-cap',
                              type: 'FontAwesome',
                              title: item?.title,
                              id: item?.id,
                              subscribed: item?.subscribed,
                            });
                          } else {
                            EnableSnackBar(
                              {
                                data: 'Cannot get categories details  at the moment ',
                              },
                              true,
                            );
                          }
                        },
                      );
                    }}
                  />
                </TouchableOpacity>

                {/* <Divider style={styles.divider} /> */}
                <Text style={styles.name}>{item.title}</Text>
                <Button
                  elevation={10}
                  buttonText={
                    data1[index]?.subscribed == 1 ? 'Subcribed' : 'Subscribe'
                  }
                  buttonHeight={30 * heightRef}
                  titleFontStyle={'600'}
                  titleColor={
                    data1[index]?.subscribed == 1 ? theme.black : theme.dark
                  }
                  titleFontSize={14 * fontRef}
                  buttonWidth={'85%'}
                  // isLoading={data1[index]?.subscribed == 1 ? loading : null}
                  buttonColor={
                    data1[index]?.subscribed == 1
                      ? theme.primary
                      : 'transparent'
                  }
                  borderColor={theme.primary}
                  buttonCorners={5 * heightRef}
                  style={{opacity: 1, bottom: 5 * heightRef}}
                  onPress={() => {
                    props.auth.token
                      ? handlecheck(item, index)
                      : // !data1?.includes(item.id)
                        //   ? handlecheck(item.id)
                        // : // props.SubscribeCategories(
                        //   //   {category_id: item.id},
                        //   //   ({success}) => {
                        //   //     if (success) {
                        //   //       console.log(item, 'item'),
                        //   //         props.getsubscribe(undefined, ({success}) => {
                        //   //           if (success) {
                        //   //             EnableSnackBar(
                        //   //               {
                        //   //                 data: 'Category Subscribe Successfully ',
                        //   //               },
                        //   //               true,
                        //   //             );
                        //   //             // state.subscribe.categories.subscribed;

                        //   //             // navigation.navigate('Favourite');
                        //   //             // setLoading(false);
                        //   //             // navigation.goBack();
                        //   //           }
                        //   //         });
                        //   //     }
                        //   //   },
                        //   // )
                        //   (handlecheck(item.id),
                        //   props.removeSubscribeCategories(
                        //     {category_id: item.id},

                        //     ({success}) => {
                        //       if (success) {
                        //         props.getsubscribe(undefined, ({success}) => {
                        //           if (success) {
                        //             EnableSnackBar(
                        //               {
                        //                 data: 'Category unSubscribe Successfully ',
                        //               },
                        //               true,
                        //             );
                        //           }
                        //         });
                        //       }
                        //     },
                        //   ))
                        navigation.navigate('Login');
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  getcategories,
  SubscribeCategories,
  getsubscribe,
  getPrivatecategories,
  removeSubscribeCategories,
  getcategoriesDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Abbrevation);
//make this component available to the app
