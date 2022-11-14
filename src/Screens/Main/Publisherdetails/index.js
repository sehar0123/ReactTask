import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-dynamic-vector-icons';
import {
  fontRef,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import Header from '../../../components/Header';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-paper';
import {Animated} from 'react-native';
import AnimatedHeader from '../../../components/AnimatedHeader';
import Clipboard from '@react-native-clipboard/clipboard';
import Alert from '../../../components/Alert';
import {
  getPublisherDetails,
  getBookMark,
  addBookmark,
  removeBookmark,
} from 'src/redux/reducers/ProductList/productActions';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';
import {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {Image} from 'react-native';

import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
import {EnableSnackBar} from 'src/config/function';
const Publisherdetails = props => {
  const viewRef = useRef();
  const navigation = useNavigation();
  const route = useRoute();
  const {id, title} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const scrollA = useRef(new Animated.Value(0)).current;
  const state = useSelector(state => state);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     props.getPublisherDetails(id, state?.auth?.profile?.id, ({success}) => {
  //       if (success) {
  //         setData(state?.abbrevaition?.publishers_details);
  //         setLoader(false);
  //       } else {
  //         setLoader(false);
  //         console.log('error');
  //       }
  //     });
  //   }, [state.abbrevaition?.book_mark]),

  // );
  useEffect(() => {
    props.getPublisherDetails(id, state?.auth?.profile?.id, ({success}) => {
      if (success) {
        setData(state?.abbrevaition?.publishers_details);
        setLoader(false);
        // console.log(
        //   'details',
        //   JSON.stringify(state?.abbrevaition?.publishers_details, null, 2),

        // );
      } else {
        setLoader(false);
        console.log('error');
      }
    });
  }, []);
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
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedHeader
        title={'Publisher Detail'}
        scrollA={scrollA}
        LeftIcon={() => navigation.goBack()}
      />
      <Animated.ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={styles.bannerContainer}>
          <Animated.View style={styles.banner(scrollA)}>
            <View style={styles.card}>
              <View style={styles.circle2}>
                <Icon
                  name="person"
                  type="Fontisto"
                  size={100 * fontRef}
                  style={{alignSelf: 'center'}}
                  color={theme.primary}
                  onPress={() => {}}
                />
              </View>
              <Text style={styles.name}>{title}</Text>

              {/* <Text style={styles.title}> amos@gmail.com</Text>
              <Text style={styles.title}>+923647444</Text> */}
            </View>
          </Animated.View>
        </View>
        {loader ? (
          <LottieView
            source={require('../../../Assets/Animation/progressbar.json')}
            autoPlay
            style={{
              width: 150,
              alignSelf: 'center',
              flex: 1,
              marginTop: '30%',
            }}
          />
        ) : (
          <FlatList
            data={data}
            bounces={false}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{margin: 5 * heightRef}}></View>
            )}
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
                  Abbreviations Not Found
                </Text>
              </View>
            )}
            ListHeaderComponent={() => (
              <View style={{padding: 5 * heightRef}}></View>
            )}
            ListFooterComponent={() => (
              <View style={{padding: 5 * heightRef}}></View>
            )}
            renderItem={({item, index}) => (
              <View style={styles.card2} ref={viewRef}>
                <Text style={styles.category}>{item.category?.title}</Text>
                <TouchableOpacity
                  style={{...styles.circle, alignSelf: 'flex-end'}}
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
                    // style={{position:'absolute',top:10*heightRef,right:10*heightRef, }}
                    color={
                      data[index]?.bookmarked == 1 ? theme.primary : 'grey'
                    }
                    onPress={() => {
                      props.auth.token
                        ? handleBookmark(item, index)
                        : navigation.navigate('Login');
                    }}
                  />
                </TouchableOpacity>
                {/* <Text style={styles.name}>Short Form</Text> */}

                <Text style={styles.name2}>{item.abbreviation}</Text>
                <Text style={styles.title2}>{item.phrase}</Text>
                {/* <Text style={styles.name}>Full Form</Text> */}

                <Divider style={{marginTop: 10}} />
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.circle}
                    onPress={() => {
                      Clipboard.setString(
                        `${item.abbreviation}${':'}${item.phrase} `,
                      ),
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
                        Clipboard.setString(
                          `${item.abbreviation}${':'}${item.phrase} `,
                        ),
                          ToastAndroid.show(
                            'Copy to clipboard',
                            ToastAndroid.SHORT,
                          );
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.circle} onPress={shareImage}>
                    <Icon
                      name="share-variant-outline"
                      type="MaterialCommunityIcons"
                      size={25 * fontRef}
                      onPress={shareImage}
                      color={'grey'}
                    />
                  </TouchableOpacity>
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
                      title="Are you want to sure Bookmark this Abbrevation"
                    />
                  ) : null}
                </View>
              </View>
            )}
          />
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  getPublisherDetails,
  getBookMark,
  addBookmark,
  removeBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publisherdetails);
