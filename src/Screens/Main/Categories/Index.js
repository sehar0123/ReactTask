import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ScrollView,
  SectionList,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Checkbox} from 'react-native-paper';

import {
  fontRef,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import {styles} from '../Categories/Style';
import Index from '../Home/Index';
import LinearGradient from 'react-native-linear-gradient';

export const data = [
  {
    id: '1',
    numbers: '3',
    name: 'Spider-Man',
    Age: '23',
    backgroundColor: ['#CB356B', '#bd3f32'],
    image: require('../../../Assets/Images/char1.png'),
  },
  {
    id: '2',
    numbers: '3',
    name: 'Superman',
    backgroundColor: ['#1cb5e0', '#000046'],
    Age: '23',
    image: require('../../../Assets/Images/char2.png'),
  },
  {
    id: '3',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#f7b733', '#fc4a1a'],
    image: require('../../../Assets/Images/char3.png'),
  },
  {
    id: '4',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#61045f', '#aa076b'],
    image: require('../../../Assets/Images/char4.png'),
  },
  {
    id: '5',
    numbers: '3',
    backgroundColor: ['#3f4c6b', '#606c88'],

    name: 'Dr Strange',
    Age: '23',
    image: require('../../../Assets/Images/char5.png'),
  },
  {
    id: '6',
    numbers: '3',
    name: 'Spider-Man',
    Age: '23',
    backgroundColor: ['#CB356B', '#bd3f32'],
    image: require('../../../Assets/Images/char1.png'),
  },
  {
    id: '7',
    numbers: '3',
    name: 'Superman',
    backgroundColor: ['#1cb5e0', '#000046'],
    Age: '23',
    image: require('../../../Assets/Images/char2.png'),
  },
  {
    id: '8',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#f7b733', '#fc4a1a'],
    image: require('../../../Assets/Images/char3.png'),
  },
  {
    id: '9',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#61045f', '#aa076b'],
    image: require('../../../Assets/Images/char4.png'),
  },
  {
    id: '10',
    numbers: '3',
    backgroundColor: ['#3f4c6b', '#606c88'],

    name: 'Dr Strange',
    Age: '23',
    image: require('../../../Assets/Images/char5.png'),
  },
  {
    id: '11',
    numbers: '3',
    name: 'Spider-Man',
    Age: '23',
    backgroundColor: ['#CB356B', '#bd3f32'],
    image: require('../../../Assets/Images/char1.png'),
  },
  {
    id: '12',
    numbers: '3',
    name: 'Superman',
    backgroundColor: ['#1cb5e0', '#000046'],
    Age: '23',
    image: require('../../../Assets/Images/char2.png'),
  },
  {
    id: '13',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#f7b733', '#fc4a1a'],
    image: require('../../../Assets/Images/char3.png'),
  },
  {
    id: '14',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#61045f', '#aa076b'],
    image: require('../../../Assets/Images/char4.png'),
  },
  {
    id: '15',
    numbers: '3',
    backgroundColor: ['#3f4c6b', '#606c88'],

    name: 'Dr Strange',
    Age: '23',
    image: require('../../../Assets/Images/char5.png'),
  },
  {
    id: '16',
    numbers: '3',
    name: 'Spider-Man',
    Age: '23',
    backgroundColor: ['#CB356B', '#bd3f32'],
    image: require('../../../Assets/Images/char1.png'),
  },
  {
    id: '17',
    numbers: '3',
    name: 'Superman',
    backgroundColor: ['#1cb5e0', '#000046'],
    Age: '23',
    image: require('../../../Assets/Images/char2.png'),
  },
  {
    id: '18',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#f7b733', '#fc4a1a'],
    image: require('../../../Assets/Images/char3.png'),
  },
];
export const data2 = [
  {
    id: '1',
    numbers: '3',
    name: 'Spider-Man',
    Age: '23',
    backgroundColor: ['#CB356B', '#bd3f32'],
    image: require('../../../Assets/Images/char1.png'),
  },
  {
    id: '2',
    numbers: '3',
    name: 'Superman',
    backgroundColor: ['#1cb5e0', '#000046'],
    Age: '23',
    image: require('../../../Assets/Images/char2.png'),
  },
  {
    id: '3',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#f7b733', '#fc4a1a'],
    image: require('../../../Assets/Images/char3.png'),
  },
  {
    id: '4',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#61045f', '#aa076b'],
    image: require('../../../Assets/Images/char4.png'),
  },
  {
    id: '5',
    numbers: '3',
    backgroundColor: ['#3f4c6b', '#606c88'],

    name: 'Dr Strange',
    Age: '23',
    image: require('../../../Assets/Images/char5.png'),
  },
  {
    id: '6',
    numbers: '3',
    name: 'Spider-Man',
    Age: '23',
    backgroundColor: ['#CB356B', '#bd3f32'],
    image: require('../../../Assets/Images/char1.png'),
  },
  {
    id: '7',
    numbers: '3',
    name: 'Superman',
    backgroundColor: ['#1cb5e0', '#000046'],
    Age: '23',
    image: require('../../../Assets/Images/char2.png'),
  },
  {
    id: '8',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#f7b733', '#fc4a1a'],
    image: require('../../../Assets/Images/char3.png'),
  },
  {
    id: '9',
    numbers: '3',
    name: 'Cartoon',
    Age: '23',
    backgroundColor: ['#61045f', '#aa076b'],
    image: require('../../../Assets/Images/char4.png'),
  },
  {
    id: '10',
    numbers: '3',
    backgroundColor: ['#3f4c6b', '#606c88'],

    name: 'Dr Strange',
    Age: '23',
    image: require('../../../Assets/Images/char5.png'),
  },
  {
    id: '11',
    numbers: '3',
    name: 'Spider-Man',
    Age: '23',
    backgroundColor: ['#CB356B', '#bd3f32'],
    image: require('../../../Assets/Images/char1.png'),
  },
  {
    id: '12',
    numbers: '3',
    name: 'Superman',
    backgroundColor: ['#1cb5e0', '#000046'],
    Age: '23',
    image: require('../../../Assets/Images/char2.png'),
  },
];
const Categories = ({navigation}) => {
  const [checked, setChecked] = React.useState();
  const [tvchecked, setTVCheck] = React.useState();
  const [movchecked, setMovCheck] = React.useState();
  const [press, setPress] = React.useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data2}
          style={{width: fullWidth}}
          snapToInterval={fullWidth}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          renderItem={({item, index}) => (
            <LinearGradient
              colors={item.backgroundColor}
              style={{
                ...styles.headerCard,
              }}>
              <ImageBackground
                resizeMode="contain"
                imageStyle={{
                  borderRadius: 10 * fontRef,
                  alignSelf: 'center',
                }}
                style={styles.headerimage}
                source={item.image}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      press == index ? theme.black : theme.primary,
                  }}
                  onPress={() => {
                    setPress(index);
                  }}>
                  <Text
                    style={{
                      ...styles.btntext,
                      color: press == index ? theme.primary : theme.black,
                    }}>
                    {press == index ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </LinearGradient>
          )}
        />

        <FlatList
          numColumns={3}
          style={{width: fullWidth - 10 * widthRef, alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
          data={data2}
          ListHeaderComponent={() => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20 * heightRef,
                borderBottomWidth: 0.7,
                marginBottom: 20 * heightRef,
                borderColor: 'grey',
                paddingHorizontal: 3 * heightRef,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.Tvtext}>Game</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CategoriesList', {
                    title: 'Game',
                  })
                }>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={1}
              onPress={() =>
                checked == index
                  ? navigation.navigate(
                      'CategoriesDescription',

                      {
                        title: item.name,
                      },
                    )
                  : navigation.navigate(
                      'CategoriesTab',

                      {
                        title: item.name,
                        image: item.image,
                        backgroundColor: item.backgroundColor,

                        name: item.name,
                      },
                    )
              }>
              <LinearGradient
                style={{width: '100%', borderRadius: 5 * fontRef}}
                colors={item.backgroundColor}>
                <ImageBackground
                  resizeMode="contain"
                  imageStyle={{
                    borderRadius: 4 * fontRef,
                  }}
                  style={styles.backimage1}
                  source={item.image}>
                  <Text style={styles.movieName}>{item.name}</Text>
                </ImageBackground>
                <TouchableOpacity
                  onPress={() => {
                    setChecked(index);
                  }}
                  style={{
                    ...styles.checkbox,
                    backgroundColor:
                      checked == index ? theme.black : theme.primary,
                  }}>
                  <AntDesign
                    name={checked == index ? 'check' : 'plus'}
                    color={checked == index ? theme.primary : theme.black}
                    size={35 * fontRef}
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      top: -1,
                    }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />

        <FlatList
          numColumns={3}
          style={{width: fullWidth - 10 * widthRef, alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
          data={data}
          ListHeaderComponent={() => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20 * heightRef,
                borderBottomWidth: 0.7,
                marginBottom: 20 * heightRef,
                paddingHorizontal: 10 * widthRef,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.Tvtext}>TV</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CategoriesList', {
                    title: 'TV',
                  })
                }>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                tvchecked == index
                  ? navigation.navigate(
                      'CategoriesDescription',

                      {
                        title: item.name,
                      },
                    )
                  : navigation.navigate(
                      'CategoriesTab',

                      {
                        title: item.name,
                        image: item.image,
                        backgroundColor: item.backgroundColor,

                        name: item.name,
                      },
                    )
              }
              style={styles.card}>
              <LinearGradient
                colors={item.backgroundColor}
                style={{width: '100%', borderRadius: 5 * fontRef}}>
                <ImageBackground
                  resizeMode="contain"
                  imageStyle={{
                    borderRadius: 4 * fontRef,
                  }}
                  style={styles.backimage1}
                  source={item.image}>
                  <Text style={styles.movieName}>{item.name}</Text>
                </ImageBackground>
                <TouchableOpacity
                  onPress={() => {
                    setTVCheck(index);
                  }}
                  style={{
                    ...styles.checkbox,
                    backgroundColor:
                      tvchecked == index ? theme.black : theme.primary,
                  }}>
                  <AntDesign
                    name={tvchecked == index ? 'check' : 'plus'}
                    color={tvchecked == index ? theme.primary : theme.black}
                    size={35 * fontRef}
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      top: -1,
                    }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />

        <FlatList
          numColumns={3}
          style={{width: fullWidth - 10 * widthRef, alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
          data={data2}
          ListHeaderComponent={() => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10 * heightRef,
                borderBottomWidth: 0.7,
                marginBottom: 10 * heightRef,
                borderColor: 'grey',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.Tvtext}>Movies</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CategoriesList', {
                    title: 'Movies',
                  })
                }>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                movchecked == index
                  ? navigation.navigate(
                      'CategoriesDescription',

                      {
                        title: item.name,
                      },
                    )
                  : navigation.navigate(
                      'CategoriesTab',

                      {
                        title: item.name,
                        image: item.image,
                        backgroundColor: item.backgroundColor,

                        name: item.name,
                      },
                    )
              }
              style={styles.card}>
              <LinearGradient
                colors={item.backgroundColor}
                style={{
                  width: '100%',
                  borderRadius: 5 * fontRef,
                }}>
                <ImageBackground
                  resizeMode="contain"
                  imageStyle={{
                    borderRadius: 4,
                  }}
                  style={styles.backimage1}
                  source={item.image}>
                  <Text style={styles.movieName}>{item.name}</Text>
                </ImageBackground>
                <TouchableOpacity
                  onPress={() => {
                    setMovCheck(index);
                  }}
                  style={{
                    ...styles.checkbox,
                    backgroundColor:
                      movchecked == index ? theme.black : theme.primary,
                  }}>
                  <AntDesign
                    name={movchecked == index ? 'check' : 'plus'}
                    color={movchecked == index ? theme.primary : theme.black}
                    size={35 * fontRef}
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      top: -1,
                    }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
