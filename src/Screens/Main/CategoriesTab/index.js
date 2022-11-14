import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {fontRef, heightRef} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AnimatedHeader from '../../../components/AnimatedHeader';
import {data} from '../Categories/Index';
import LinearGradient from 'react-native-linear-gradient';
const TabBarHeight = 48;
const HeaderHeight = 250;
const tab1ItemSize = (Dimensions.get('window').width - 30) / 2;
const tab2ItemSize = (Dimensions.get('window').width - 40) / 3;

const TabScene = ({
  numCols,
  data,
  renderItem,
  onGetRef,
  scrollY,

  onScrollEndDrag,
  onMomentumScrollEnd,
  onMomentumScrollBegin,
}) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <Animated.FlatList
      scrollToOverflowEnabled={true}
      // onScrollToTop={setShow(false)}
      // onScrollAnimationEnd={() => setShow(false)}
      numColumns={numCols}
      ref={onGetRef}
      scrollEventThrottle={16}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollEnd={onMomentumScrollEnd}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      ListHeaderComponent={() => <View style={{height: 10}} />}
      contentContainerStyle={{
        paddingTop: HeaderHeight + TabBarHeight,
        paddingHorizontal: 10,
        minHeight: windowHeight - TabBarHeight,
      }}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const CollapsibleTabView = ({route, navigation}) => {
  const [tabIndex, setIndex] = useState(0);

  const {image, backgroundColor, name} = route.params;
  console.log(route.params);
  const [press, setPress] = React.useState();
  const [tab, setTab] = React.useState('Home');
  // const Tab = createMaterialTopTabNavigator();
  const scrollA = useRef(new Animated.Value(0)).current;
  const [routes] = useState([
    {key: 'tab1', title: 'Home'},
    {key: 'tab2', title: 'Wiki'},
  ]);
  const [tab1Data] = useState(data);
  const [tab2Data] = useState(data);

  const scrollY = useRef(new Animated.Value(0)).current;
  let listRefArr = useRef([]);
  let listOffset = useRef({});
  let isListGliding = useRef(false);

  useEffect(() => {
    scrollY.addListener(({value}) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });
    return () => {
      scrollY.removeAllListeners();
    };
  }, [routes, tabIndex]);

  const syncScrollOffset = () => {
    if (scrollY._value < HeaderHeight) {
    }
    const curRouteKey = routes[tabIndex].key;
    listRefArr.current.forEach(item => {
      if (item.key !== curRouteKey) {
        if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
          if (item.value) {
            item.value.scrollToOffset({
              offset: scrollY._value,
              animated: false,
            });

            listOffset.current[item.key] = scrollY._value;
          }
        } else if (scrollY._value >= HeaderHeight) {
          if (
            listOffset.current[item.key] < HeaderHeight ||
            listOffset.current[item.key] == null
          ) {
            if (item.value) {
              item.value.scrollToOffset({
                offset: HeaderHeight,
                animated: false,
              });

              listOffset.current[item.key] = HeaderHeight;
            }
          }
        }
      }
    });
  };

  const onMomentumScrollBegin = () => {
    isListGliding.current = true;
  };

  const onMomentumScrollEnd = () => {
    isListGliding.current = false;

    syncScrollOffset();
  };

  const onScrollEndDrag = () => {
    syncScrollOffset();
  };

  const renderHeader = () => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [0, -HeaderHeight],
      extrapolateRight: 'clamp',
    });
    return (
      <Animated.View style={[styles.header, {transform: [{translateY: y}]}]}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <MaterialCommunityIcons name="chevron-left" size={40 * fontRef} />

          <MaterialCommunityIcons name="bookmark-outline" size={40 * fontRef} />
        </View> */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // height: 200 * heightRef,
          }}>
          <LinearGradient style={styles.card} colors={backgroundColor}>
            <ImageBackground
              resizeMode="contain"
              imageStyle={{
                borderRadius: 4 * fontRef,
              }}
              style={styles.backimage1}
              source={image}></ImageBackground>
          </LinearGradient>
          <Text style={styles.logotext}>{name}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setPress(!press);
            }}
            style={{
              ...styles.button,
              backgroundColor: press ? theme.black : theme.primary,
            }}>
            <Text
              style={{
                ...styles.btntext,
                color: press ? theme.primary : theme.black,
              }}>
              {press ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  const rednerTab1Item = ({item, index}) => {
    return (
      <LinearGradient
        colors={item.backgroundColor}
        style={{
          borderRadius: 16,
          marginLeft: index % 2 === 0 ? 0 : 10,
          width: tab1ItemSize,
          marginTop: 50 * heightRef,
          height: tab1ItemSize,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={item.image}
          resizeMode="contain"
          style={styles.backimage2}></ImageBackground>
        <Text style={styles.movieText}>{item.name}</Text>
      </LinearGradient>
    );
  };

  const rednerTab2Item = ({item, index}) => {
    return (
      <LinearGradient
        colors={item.backgroundColor}
        style={{
          marginLeft: index % 3 === 0 ? 0 : 10,
          borderRadius: 16,
          width: tab2ItemSize,
          height: tab2ItemSize,
          marginTop: 50 * heightRef,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={item.image}
          resizeMode="contain"
          style={styles.backimage1}></ImageBackground>
        <Text style={styles.movieText2}>{item.name}</Text>
      </LinearGradient>
    );
  };

  const renderLabel = ({route, focused}) => {
    return (
      <Text style={{...styles.label, color: focused ? 'white' : '#D3D3D3'}}>
        {route.title}
      </Text>
    );
  };

  const renderScene = ({route}) => {
    const focused = route.key === routes[tabIndex].key;
    let numCols;
    let data;
    let renderItem;
    switch (route.key) {
      case 'tab1':
        numCols = 2;
        data = tab1Data;
        renderItem = rednerTab1Item;
        break;
      case 'tab2':
        numCols = 3;
        data = tab2Data;
        renderItem = rednerTab2Item;
        break;
      default:
        return null;
    }
    return (
      <TabScene
        numCols={numCols}
        data={data}
        renderItem={renderItem}
        scrollY={scrollY}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onGetRef={ref => {
          if (ref) {
            const found = listRefArr.current.find(e => e.key === route.key);
            if (!found) {
              listRefArr.current.push({
                key: route.key,
                value: ref,
              });
            }
          }
        }}
      />
    );
  };
  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    console.log('height', height, x, y);
    console.log('width', width);
  };
  const renderTabBar = props => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [HeaderHeight, 0],
      extrapolateRight: 'clamp',
    });
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,

          position: 'absolute',
          transform: [{translateY: y}],
          width: '100%',
        }}>
        <TabBar
          {...props}
          onTabPress={({route, preventDefault}) => {
            if (isListGliding.current) {
              preventDefault();
            }
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
      </Animated.View>
    );
  };

  const renderTabView = () => {
    return (
      <TabView
        onIndexChange={index => setIndex(index)}
        navigationState={{index: tabIndex, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{
          height: 0,
          width: Dimensions.get('window').width,
        }}
      />
    );
  };

  return (
    <ImageBackground
      imageStyle={{opacity: 0.9, backgroundColor: 'rgba(0,0,0,0.5)'}}
      style={{flex: 1}}
      source={require('../../../Assets/Images/images.jpg')}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 60 * heightRef,
            backgroundColor: '#0001',
            alignItems: 'center',
            width: '100%',
            // marginBottom: 20,
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-left"
              size={35 * fontRef}
              color={'white'}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text style={styles.logotext}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#0001',
              width: '30%',
            }}>
            <MaterialIcons
              name="notifications-none"
              size={35 * fontRef}
              color={'white'}
            />
            <MaterialIcons name="search" size={35 * fontRef} color={'white'} />
            <MaterialCommunityIcons
              name="dots-vertical"
              size={35 * fontRef}
              color={'white'}
            />
          </View>
        </TouchableOpacity>
        {renderHeader()}
        {renderTabView()}
      </View>
    </ImageBackground>
  );
};

export default CollapsibleTabView;
