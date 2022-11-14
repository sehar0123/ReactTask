import React, {useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import styles from './Style';
import LottieView from 'lottie-react-native';
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
import {Divider, FAB} from 'react-native-paper';
import Button from '../../../components/Button';
import Clipboard from '@react-native-clipboard/clipboard';
import Alert from '../../../components/Alert';
import {
  getBookMark,
  removeBookmark,
  getabbreviation,
} from 'src/redux/reducers/ProductList/productActions';
import {connect, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {EnableSnackBar} from 'src/config/function';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
const Bookmark = props => {
  const viewRef = useRef();
  const navigation = useNavigation();
  const [short, setShort] = useState();
  const [loading, setLoading] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [full, setFull] = useState();
  const [loader, setLoader] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const flatListRef = React.useRef();
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 300;
  const [items, setItems] = useState([
    {label: 'computer', value: 'apple'},
    {label: 'Science', value: 'banana'},
  ]);
  const state = useSelector(state => state);
  const toTop = () => {
    // use current
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  useFocusEffect(
    React.useCallback(() => {
      props.getBookMark(undefined, ({success}) => {
        if (success) {
          setLoader(false);
          setSearch('');
          // console.log('hello', state?.abbrevaition.book_mark);
        } else {
          setLoader(false);
        }
      });
    }, [state.abbrevaition.book_mark]),
  );
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
  const searchFilterFunction = text => {
    if (text) {
      const newData = state?.abbrevaition.book_mark.filter(function (item) {
        const itemData = item?.abbreviation
          ? item?.abbreviation.toUpperCase()
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
      setFilteredDataSource(state?.abbrevaition?.book_mark);
      setSearch(text);
    }
  };
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {showSearch ? (
        <View style={styles.container2}>
          <View style={styles.searchbar}>
            <TextInput
              style={styles.input}
              placeholder="Search Abbreviation..."
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
            <Text style={styles.headerText}>{'Bookmarks'}</Text>
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
            marginTop: '50%',
          }}
        />
      ) : !props.auth.token ? (
        <TouchableOpacity
          style={{
            // marginTop: '50%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../../Assets/Images/emptyicon.png')}
            style={{
              width: 100,
              height: 100,
              tintColor: theme.primary,
            }}></Image>
          <Text
            style={{
              fontSize: 18 * fontRef,
              fontFamily: theme.fontFamily,
              color: theme.inactive,
              fontFamily: '500',
            }}>
            Login to Access Bookmarks
          </Text>
        </TouchableOpacity>
      ) : (
        <FlatList
          data={
            search == ''
              ? state?.abbrevaition?.book_mark?.filter(
                  item => item.bookmarked == 1,
                )
              : filteredDataSource
          }
          bounces={false}
          ref={flatListRef}
          onScroll={event => {
            setContentVerticalOffset(event.nativeEvent.contentOffset.y);
          }}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{margin: 5 * heightRef}}></View>
          )}
          ListHeaderComponent={() => (
            <View style={{padding: 5 * heightRef}}></View>
          )}
          ListFooterComponent={() => (
            <View style={{padding: 5 * heightRef}}></View>
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
                  width: 100,
                  height: 100,
                  tintColor: theme.primary,
                }}></Image>
              <Text
                style={{
                  fontSize: 18 * fontRef,
                  fontFamily: theme.fontFamily,
                  color: theme.inactive,
                  fontFamily: '500',
                }}>
                No Bookmarks
              </Text>
            </View>
          )}
          renderItem={({item, index}) => (
            console.log(JSON.stringify(item, null, 2)),
            (
              <View style={styles.card} ref={viewRef}>
                <TouchableOpacity
                  style={{...styles.circle, alignSelf: 'flex-end'}}
                  onPress={() => {
                    props.auth.token
                      ? (setSelectedIndex(index), setModalVisible(true))
                      : navigation.navigate('Login');
                  }}>
                  <Icon
                    type="FontAwesome"
                    name="bookmark"
                    size={20 * fontRef}
                    // style={{position:'absolute',top:10*heightRef,right:20*heightRef, }}
                    color={theme.primary}
                    onPress={() => {
                      props.auth.token
                        ? (setSelectedIndex(index), setModalVisible(true))
                        : navigation.navigate('Login');
                    }}
                    //   onPress={() => navigation.navigate('Edited')}
                  />
                </TouchableOpacity>

                <Text style={styles.category}>{item?.category?.title}</Text>
                {/* <Text style={styles.name}>Short Form</Text> */}
                <Text style={styles.name}>{item?.abbreviation}</Text>
                <Text style={styles.title}>{item?.phrase}</Text>
                <Divider style={{marginTop: 15 * heightRef}} />
                {/* <Text style={styles.name}>Full Form</Text> */}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  {/* <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Publisherdetails', {
                        id: item.id,
                        title: item?.user?.name,
                      })
                    }>
                    <Text style={styles.author}>{item?.user?.name}</Text>
                  </TouchableOpacity> */}
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.circle}
                      onPress={() => {
                        `${item.abbreviation}${':'}${item.phrase} `,
                          ToastAndroid.show(
                            'Copy to clipboard',
                            ToastAndroid.SHORT,
                          );
                      }}>
                      <Icon
                        name="content-copy"
                        type="MaterialCommunityIcons"
                        size={20 * fontRef}
                        color={'grey'}
                        onPress={() => {
                          `${item.abbreviation}${':'}${item.phrase} `,
                            ToastAndroid.show(
                              'Copy to clipboard',
                              ToastAndroid.SHORT,
                            );
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.circle}
                      onPress={shareImage}>
                      <Icon
                        name="share-variant-outline"
                        type="MaterialCommunityIcons"
                        size={20 * fontRef}
                        onPress={shareImage}
                        color={'grey'}
                      />
                      {selectedIndex == index ? (
                        <Alert
                          disabled={loading == true ? true : false}
                          isModalVisible={isModalVisible}
                          isLoading={loading}
                          setModalVisible={setModalVisible}
                          onPress={() => {
                            setLoading(true);
                            console.log('hi', item.id);
                            props.removeBookmark(
                              {bookmark_id: item.id},
                              ({success}) => {
                                if (success) {
                                  props.getBookMark(undefined, ({success}) => {
                                    if (success) {
                                      setLoading(false);
                                      props.getabbreviation(
                                        state?.auth?.profile?.id,
                                      );

                                      setModalVisible(false);
                                      EnableSnackBar(
                                        {
                                          data: 'Abbreviation removed from Bookmark Successfully  ',
                                        },
                                        true,
                                      );
                                      // setSelectedIndex(false);
                                    }
                                  });
                                }
                              },
                            );
                          }}
                          title="Are you sure you want to remove the bookmarked Abbreviations"
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
      {loader == false
        ? contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
            <TouchableOpacity onPress={() => toTop()}>
              <FAB
                icon="arrow-up"
                style={styles.fab}
                color={theme.black}
                onPress={() => toTop()}
              />
            </TouchableOpacity>
          )
        : null}
      <View></View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  getBookMark,
  removeBookmark,
  getabbreviation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
