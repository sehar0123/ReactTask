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
const AuthorProfile = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const scrollA = useRef(new Animated.Value(0)).current;
  const onShare = async ({item}) => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: ' SDK \n software development kit',
        url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedHeader
        title={'Profile'}
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
              <Icon
                name="person"
                type="Fontisto"
                size={100 * fontRef}
                style={{alignSelf: 'center', marginTop: 10}}
                color={theme.primary}
                onPress={() => {}}
              />

              <Text style={styles.name}>Dan Amos</Text>

              <Text style={styles.title}> amos@gmail.com</Text>
              <Text style={styles.title}>+923647444</Text>
            </View>
          </Animated.View>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          bounces={false}
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
          renderItem={({item, index}) => (
            <View style={styles.card2}>
              <Text style={styles.category}>Computing</Text>
              <TouchableOpacity
                style={{...styles.circle, alignSelf: 'flex-end'}}
                onPress={() => {
                  console.log('hi', item.id);
                  props.addBookmark({abbreviation_id: item.id}, ({success}) => {
                    if (success) {
                      props.getBookMark(undefined, ({success}) => {
                        if (success) {
                          navigation.navigate('Bookmark');
                          // setLoading(false);
                          // navigation.goBack();
                        }
                      });
                    }
                  });
                }}>
                <Icon
                  name="bookmark-outline"
                  type="MaterialCommunityIcons"
                  size={20 * fontRef}
                  // style={{position:'absolute',top:10*heightRef,right:10*heightRef, }}
                  color={theme.dark}
                  onPress={() => {
                    console.log('hi', item.id);
                    props.addBookmark(
                      {abbreviation_id: item.id},
                      ({success}) => {
                        if (success) {
                          props.getBookMark(undefined, ({success}) => {
                            if (success) {
                              navigation.navigate('Bookmark');
                              // setLoading(false);
                              // navigation.goBack();
                            }
                          });
                        }
                      },
                    );
                  }}
                />
              </TouchableOpacity>
              {/* <Text style={styles.name}>Short Form</Text> */}
              <Text style={styles.name2}>SDK</Text>

              {/* <Text style={styles.name}>Full Form</Text> */}
              <Text style={styles.title2}>software development kit</Text>
              <Divider style={{marginTop: 10}} />
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.circle}
                  onPress={() => {
                    Clipboard.setString('software development kit'),
                      ToastAndroid.show('Copy', ToastAndroid.SHORT);
                  }}>
                  <Icon
                    name="content-copy"
                    type="MaterialCommunityIcons"
                    size={20 * fontRef}
                    color={'grey'}
                    onPress={() => {
                      Clipboard.setString('software development kit'),
                        ToastAndroid.show('Copy', ToastAndroid.SHORT);
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle} onPress={onShare}>
                  <Icon
                    name="share-variant-outline"
                    type="MaterialCommunityIcons"
                    size={20 * fontRef}
                    onPress={onShare}
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
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default AuthorProfile;
