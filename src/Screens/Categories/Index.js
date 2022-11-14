import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ScrollView,
  ImageBackground,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {styles} from '../Categories/Style';

const items = [
  {
    id: '1',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '2',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '3',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '4',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '5',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '6',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '7',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '8',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '9',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
];
const items1 = [
  {
    id: '1',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '2',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '3',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '4',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '5',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '6',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '7',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '8',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
  {
    id: '9',
    numbers: '3',
    name: 'Hania Amir',
    Age: '23',
  },
];
const Categories = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          horizontal={true}
          data={items}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          renderItem={({item, index}) => (
            <ImageBackground
              resizeMode="cover"
              imageStyle={{
                borderRadius: 2,
              }}
              style={styles.backimage}
              source={require('../../../Assets/Images/movieposter3.jpg')}></ImageBackground>
          )}
        />
        <FlatList
          data={items1}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          ListHeaderComponent={() => (
            <View style={styles.headerview}>
              <Text style={styles.Tvtext}>TV</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{padding: 5}}></View>}
          renderItem={({item, index}) => (
            <ImageBackground
              resizeMode="cover"
              imageStyle={{
                borderRadius: 4,
              }}
              style={styles.backimage1}
              source={require('../../../Assets/Images/movieposter3.jpg')}>
              <Checkbox
                color="blue"
                uncheckedColor="blue"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </ImageBackground>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
