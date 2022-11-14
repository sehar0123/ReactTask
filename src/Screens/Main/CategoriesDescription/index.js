//import liraries
import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header';
const CategoriesDescription = ({navigation, route}) => {
  const {title} = route.params;
  const SECTIONS = [
    {
      horizontal: true,
      data: [
        {
          id: '1',
          numbers: '3',
          name: 'Hania Amir',
          Age: '23',
          image: require('../../../Assets/Images/post1.jpg'),
        },
        {
          id: '2',
          numbers: '3',
          name: 'Hania Amir',
          Age: '23',
          image: require('../../../Assets/Images/post2.jpg'),
        },
        {
          id: '3',
          numbers: '3',
          name: 'Hania Amir',
          Age: '23',
          image: require('../../../Assets/Images/post3.jpg'),
        },
        {
          id: '4',
          numbers: '3',
          name: 'Hania Amir',
          Age: '23',
          image: require('../../../Assets/Images/post4.jpg'),
        },
        {
          id: '5',
          numbers: '3',
          name: 'Hania Amir',
          Age: '23',
          image: require('../../../Assets/Images/post5.jpg'),
        },
        // {
        //   id: '6',
        //   numbers: '3',
        //   name: 'Hania Amir',
        //   Age: '23',
        //   image: require('../../../Assets/Images/movieposter3.jpg'),
        // },
        // {
        //   id: '7',
        //   numbers: '3',
        //   name: 'Hania Amir',
        //   Age: '23',
        //   image: require('../../../Assets/Images/movieposter3.jpg'),
        // },
        // {
        //   id: '8',
        //   numbers: '3',
        //   name: 'Hania Amir',
        //   Age: '23',
        //   image: require('../../../Assets/Images/movieposter3.jpg'),
        //   gradient: ['#f6e6d9', '#ffffff00'],
        // },
        // {
        //   id: '9',
        //   numbers: '3',
        //   name: 'Hania Amir',
        //   Age: '23',
        //   image: require('../../../Assets/Images/movieposter3.jpg'),
        // },
      ],
    },
  ];

  const ListItem = ({item}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('Description', {
            backgroundImage: item.image,
          })
        }>
        <ImageBackground
          // resizeMode="cover"
          source={item.image}
          imageStyle={{borderRadius: 10 * fontRef}}
          style={styles.image}>
          <LinearGradient
            colors={['#233329', '#ffffff00']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            style={styles.linervertical}>
            <View style={styles.footertext}>
              <Text style={styles.text}>
                While this is correct, please explain a bit more about the
                answer instead of just pasting code
              </Text>
              <Text style={styles.title}>
                While this is correct, please explain a bit more about the
                answer instead of just pasting code
              </Text>
            </View>
            <View style={styles.cardfotter}>
              <View style={styles.headerview}>
                <View style={styles.row}>
                  <Text style={{...styles.logotext, color: 'yellow'}}>
                    Fandom
                  </Text>
                  <Text style={styles.logotext}>5/27/2022</Text>
                </View>
                <AntDesign name="sharealt" size={30 * fontRef} color={'#FFF'} />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  let AnimatedHeaderValue = new Animated.Value(0);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon="chevron-left"
        onPressLeft={() => navigation.goBack()}
        title={title}
        rightIcon="dots-vertical"
      />
      <ScrollView
        decelerationRate={0.9}
        style={styles.container}
        snapToInterval={fullHeight - 60 * heightRef}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: AnimatedHeaderValue},
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          style={fullHeight - 10}
          snapToInterval={fullHeight}
          // renderSectionHeader={({section}) => <Text>{section.id}</Text>}
          renderItem={({item, section}) => {
            // const inputRange=[-1,0]
            return <ListItem item={item} />;
          }}
        />
        {/* <Text style={styles.headertext}>Featured</Text>
        <SectionList
          // ...

          sections={SECTIONS}
          renderSectionHeader={({section, index}) => (
            <>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  style={{width: fullWidth}}
                  data={section.data}
                  // ListHeaderComponent={() => (

                  // )}
                  snapToInterval={fullWidth}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        navigation.navigate('Description', {
                          backgroundImage: item.image,
                        })
                      }>
                      <ImageBackground
                        // resizeMode="cover"
                        source={item.image}
                        imageStyle={{borderRadius: 10 * fontRef}}
                        style={styles.image2}>
                        <LinearGradient
                          colors={['#233329', '#006460', '#ffffff00']}
                          start={{x: 0, y: 1}}
                          end={{x: 0, y: 0}}
                          style={styles.linearhorzontal}>
                          <View style={styles.footertext}>
                            <Text style={styles.text}>
                              While this is correct, please explain a bit more
                              about the answer instead of just pasting code
                            </Text>
                            <Text style={styles.title}>
                              While this is correct, please explain a bit more
                              about the answer instead of just pasting code
                            </Text>
                          </View>

                          <View style={styles.cardfotter}>
                            <View style={styles.headerview}>
                              <View style={styles.row}>
                                <Text
                                  style={{...styles.logotext, color: 'yellow'}}>
                                  Fandom
                                </Text>
                                <Text style={styles.logotext}>5/27/2022</Text>
                              </View>
                              <View>
                                <AntDesign
                                  name="sharealt"
                                  size={30 * fontRef}
                                  color={'#FFF'}
                                />
                              </View>
                            </View>
                          </View>
                        </LinearGradient>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({item, section}) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        /> */}
        <SectionList
          sections={SECTIONS}
          snapToInterval={fullHeight - 60 * heightRef}
          renderItem={({item, index}) => (
            console.log(SECTIONS[0].data.length - 1),
            (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate('Description', {
                    backgroundImage: item.image,
                  })
                }>
                <ImageBackground
                  // resizeMode="cover"
                  source={item.image}
                  imageStyle={{borderRadius: 10 * fontRef}}
                  style={{
                    ...styles.image3,
                    // marginBottom:
                    //   SECTIONS[0].data.length - 1 != index
                    //     ? 80 * heightRef
                    //     : 50 * heightRef,
                  }}>
                  <LinearGradient
                    colors={['#233329', '#ffffff00']}
                    start={{x: 0, y: 1}}
                    end={{x: 0, y: 0}}
                    style={styles.linervertical2}>
                    <View style={styles.footertext}>
                      <Text style={styles.text}>
                        While this is correct, please explain a bit more about
                        the answer instead of just pasting code
                      </Text>
                      <Text style={styles.title}>
                        While this is correct, please explain a bit more about
                        the answer instead of just pasting code
                      </Text>
                    </View>
                    <View style={styles.cardfotter}>
                      <View style={styles.headerview}>
                        <View style={styles.row}>
                          <Text style={{...styles.logotext, color: 'yellow'}}>
                            Fandom
                          </Text>
                          <Text style={styles.logotext}>5/27/2022</Text>
                        </View>
                        <AntDesign
                          name="sharealt"
                          size={30 * fontRef}
                          color={'#FFF'}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            )
          )}
        />
        <View style={{height: 0}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
//make this component available to the app
export default CategoriesDescription;
