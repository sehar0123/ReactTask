import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from '../Search/Style';
import Feather from 'react-native-vector-icons/Feather';
import {Searchbar} from 'react-native-paper';
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchiconview}>
          <Feather name="search" size={30} color={'#212F3D'} />
        </View>
        <Text style={styles.searchtext}>
          Use search to explore your fandoms, wikis and news
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Search;
