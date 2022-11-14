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
  FlatList,
  ToastAndroid,
} from 'react-native';
import {Data} from '../../../components/DummayData';
import {styles} from './styles';
import Icon from 'react-native-dynamic-vector-icons';
import {getHeight} from '../../../Constant/functions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../../Core/Theme';
import {fontRef, fullHeight, heightRef} from '../../../Constant/screenSize';
import Header from '../../../components/Header';
import Share from 'react-native-share';
import AnimatedHeader from '../../../components/AnimatedHeader';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Divider} from 'react-native-paper';
import MenuExample from '../../../components/Menu';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Alert from '../../../components/Alert';
import {
  getcategoriesDetails,
  SubscribeCategories,
  getsubscribe,
  removeSubscribeCategories,
  getBookMark,
  addBookmark,
  removeBookmark,
} from 'src/redux/reducers/ProductList/productActions';
import {connect, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {EnableSnackBar} from 'src/config/function';
import {captureRef} from 'react-native-view-shot';
// create a component

const CategoryProfile = props => {
  const route = useRoute();
  const viewRef = useRef();
  const [data, setData] = useState(['']);
  const state = useSelector(state => state);
  const {icon, type, title, id, subscribed} = route.params;
  const [press, setPress] = React.useState(
    subscribed == 1 ? 'Subscribed' : 'Subscribe',
  );
  const navigation = useNavigation();
  const [loader, setLoader] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const scrollA = useRef(new Animated.Value(0)).current;

  // useFocusEffect(
  //   React.useCallback(() => {
  //     props.getcategoriesDetails(id, state?.auth?.profile?.id, ({success}) => {
  //       if (success) {
  //         setData(state?.abbrevaition?.categories_details);
  //         setLoader(false);
  //       } else {
  //         setLoader(false);
  //         console.log('error');
  //       }
  //     });
  //   }, [state.abbrevaition.book_mark]),
  // );
  useEffect(() => {
    props.getcategoriesDetails(id, state?.auth?.profile?.id, ({success}) => {
      if (success) {
        setData(state?.abbrevaition?.categories_details);
        setLoader(false);
      } else {
        setLoader(false);
        console.log('error');
      }
    });
  }, [state.abbrevaition.book_mark]);
  const handleBookmark = (item, index) => {
    console.log('subscribed', item?.bookmarked, index);
    if (item?.bookmarked == 1) {
      setData([
        ...data.slice(0, index),
        Object.assign({}, data[index], {bookmarked: 0}),
        ...data.slice(index + 1),
      ]);

      props.removeBookmark(
        {bookmark_id: item?.id},

        ({success}) => {
          if (success) {
            props.getBookMark(undefined, ({success, data}) => {
              if (success) {
                // acd?.push(item.id);
                // setData1(acd);
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
    if (item?.bookmarked == 0) {
      setData([
        ...data.slice(0, index),
        Object.assign({}, data[index], {bookmarked: 1}),
        ...data.slice(index + 1),
      ]);

      props.addBookmark({abbreviation_id: item?.id}, ({success}) => {
        if (success) {
          props.getBookMark(undefined, ({success, data}) => {
            if (success) {
              // setData1(ab);
              // setAbc(item.id - 1);
              // setData1(data);

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
  // console.log(state?.abbrevaition?.category?.subscribed);
  const shareImage = async () => {
    try {
      // capture component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      // share
      const shareResponse = await Share.open({url: uri});
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedHeader
        title={title}
        scrollA={scrollA}
        // bookmark
        LeftIcon={() => navigation.goBack()}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={styles.bannerContainer}>
          <Animated.View style={styles.banner(scrollA)}>
            <View // style={styles.banner(scrollA)}
              style={{height: 240, backgroundColor: theme.black}}>
              <View style={styles.circle}>
                <Icon
                  name={icon}
                  type={type}
                  size={70 * fontRef}
                  color={theme.primary}
                  // style={{marginTop:10*heightRef}}
                  onPress={() => {}}
                />
              </View>

              <Text style={styles.text}>{title}</Text>
              <TouchableOpacity
                style={press === 'Subscribe' ? styles.btn2 : styles.btn}
                onPress={() =>
                  props.auth.token
                    ? press == 'Subscribe'
                      ? props.SubscribeCategories(
                          {category_id: id},
                          ({success}) => {
                            if (success) {
                              props.getsubscribe(undefined, ({success}) => {
                                if (success) {
                                  // state.subscribe.categories.subscribed;

                                  setPress('Subscribed');
                                  // EnableSnackBar(
                                  //   {data: 'Category Subscribed Successfully'},
                                  //   true,
                                  // );
                                  // navigation.navigate('Favourite');
                                  // setLoading(false);
                                  // navigation.goBack();
                                }
                              });
                            }
                          },
                        )
                      : props.removeSubscribeCategories(
                          {category_id: id},
                          ({success}) => {
                            if (success) {
                              props.getsubscribe(undefined, ({success}) => {
                                if (success) {
                                  // state.subscribe.categories.subscribed;
                                  setPress('Subscribe');
                                  // EnableSnackBar(
                                  //   {data: 'Category unSubscribed Successfully'},
                                  //   true,
                                  // );
                                  // navigation.navigate('Favourite');
                                  // setLoading(false);
                                  // navigation.goBack();
                                }
                              });
                            }
                          },
                        )
                    : navigation.navigate('Login')
                }>
                <Text
                  style={{
                    ...styles.title,
                    color: press === 'Subscribe' ? theme.grey : theme.black,
                  }}>
                  {press === 'Subscribe' ? 'Subscribe' : 'Subscribed'}{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
        <View>
          {loader ? (
            <LottieView
              source={require('../../../Assets/Animation/progressbar.json')}
              autoPlay
              style={{
                width: 150,
                alignSelf: 'center',
                flex: 1,
                marginTop: '40%',
              }}
            />
          ) : (
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{margin: 5 * heightRef}}></View>
              )}
              ListHeaderComponent={() => (
                <View style={{margin: 15 * heightRef}}></View>
              )}
              ListFooterComponent={() => (
                <View style={{padding: 5 * heightRef}}></View>
              )}
              ListEmptyComponent={() => (
                <View
                  style={{
                    marginTop: '30%',
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
                    Abbreviation Not Found
                  </Text>
                </View>
              )}
              renderItem={({item, index}) => (
                console.log(item.bookmarked),
                (
                  <View style={styles.card2} ref={viewRef}>
                    {/*               
                 <Icon
      name="pencil"
      type="MaterialCommunityIcons"
      size={30 * fontRef}
      style={{position:'absolute',top:10*heightRef,right:20*heightRef, }}
      color={'green'}
      onPress={() => navigation.navigate('Edited')}
    /> */}
                    {/* <MenuExample /> */}
                    {/* <Icon
      name="dots-three-vertical"
      type="Entypo"
      size={30 * fontRef}
      style={{position:'absolute',top:10*heightRef,right:20*heightRef, }}
      color={'green'}
      onPress={() => navigation.navigate('Edited')}
    />  */}

                    <Text style={styles.category}>{title}</Text>
                    {/* <Text style={styles.name}>Short Form</Text> */}
                    <Text style={styles.name}>{item.abbreviation?.trim()}</Text>
                    <Text style={styles.title2}>{item.phrase?.trim()}</Text>
                    <Divider style={{marginTop: 15 * heightRef}} />
                    {/* <Text style={styles.name}>Full Form</Text> */}

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      {/* <TouchableOpacity
                      onPress={() => navigation.navigate('AuthorProfile')}>
                      <Text style={styles.author}>Dan Amos</Text>
                    </TouchableOpacity> */}
                      <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.circle2}
                          onPress={() => {
                            props.auth.token
                              ? handleBookmark(item, index)
                              : navigation.navigate('Login');
                          }}>
                          <Icon
                            name={
                              data[index]?.bookmarked == 1
                                ? 'bookmark'
                                : 'bookmark-outline'
                            }
                            type="MaterialCommunityIcons"
                            size={25 * fontRef}
                            onPress={() => {
                              props.auth.token
                                ? handleBookmark(item, index)
                                : navigation.navigate('Login');
                            }}
                            color={
                              data[index]?.bookmarked == 1
                                ? theme.primary
                                : 'grey'
                            }
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.circle2}
                          onPress={() => {
                            `${item.abbrevaition}${':'}${item.phrase} `,
                              ToastAndroid.show(
                                'Copy to clipboard',
                                ToastAndroid.SHORT,
                              );
                          }}>
                          <Icon
                            name="content-copy"
                            type="MaterialCommunityIcons"
                            size={25 * fontRef}
                            color={'grey'}
                            onPress={() => {
                              `${item.abbrevaition}${':'}${item.phrase} `,
                                ToastAndroid.show(
                                  'Copy to clipboard',
                                  ToastAndroid.SHORT,
                                );
                            }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.circle2}
                          onPress={shareImage}>
                          <Icon
                            name="share-variant-outline"
                            type="MaterialCommunityIcons"
                            size={25 * fontRef}
                            onPress={shareImage}
                            color={'grey'}
                          />
                          {selectedIndex == index ? (
                            <Alert
                              isModalVisible={isModalVisible}
                              setModalVisible={setModalVisible}
                              onPress={() => {
                                navigation.navigate(
                                  'BottomTab',
                                  {screen: 'Bookmark'},
                                  setModalVisible(false),
                                );
                              }}
                              title="Are you want to sure Bookmark this Bookmark"
                            />
                          ) : null}
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )
              )}
            />
          )}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
const mapStateToProps = state => state;
const mapDispatchToProps = {
  getcategoriesDetails,
  getsubscribe,
  getBookMark,
  addBookmark,
  SubscribeCategories,
  removeSubscribeCategories,
  removeBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProfile);
