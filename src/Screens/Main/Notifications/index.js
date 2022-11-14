import React, {Component, useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  Animated,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import {Divider, RadioButton} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Style';
import {getHeight} from '../../../Constant/functions';
import {theme} from '../../../Core/Theme';
import {fontRef} from '../../../Constant/screenSize';
import Header from '../../../components/Header';
// create a component
const Notifications = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      heading: 'March SaulLA Corna',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      Time: '2 hour ago',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      heading: 'John Doe Link',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      Time: 'Yesterday',
      date: 'Yesterday',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      heading: 'The googler',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      date: 'Last week',
      Time: '1 day ago',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      heading: 'March SaulLA Corna',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      Time: '2 hour ago',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      heading: 'The googler',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      date: 'Last week',
      Time: 'Tuesday',
    },

    {
      id: '58694a0f-3da1-471f-bd96-145571e29d100',
      heading: 'March SaulLA Corna',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      Time: '2 hour ago',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      heading: 'The googler',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      date: 'Last week',
      Time: 'Tuesday',
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notifications" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => <Divider />}
       ListHeaderComponent={() => <View style={{margin: getHeight(0.5)}} />}
        ListFooterComponent={() => <View style={{margin: getHeight(12)}} />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setSelectedIndex(index), setModalVisible(!modalVisible);
            }}>
            {/* <View>
                <Text style={styles.date}>{item.date}</Text>
              </View> */}
            <View style={styles.card}>
              <View style={styles.RowView}>
                <View style={styles.Iconbg}>
                  <MaterialCommunityIcons
                    name={'bell-ring-outline'}
                    size={30 * fontRef}
                    color={'white'}
                  />
                </View>
                <View>
                  <Text numberOfLines={1} style={styles.heading}>
                    {item.heading}
                  </Text>
                  <Text numberOfLines={2} style={styles.paragraph}>
                    {item.paragraph}
                  </Text>
                  <Text style={styles.Time}>{item.Time}</Text>
                </View>
                <View style={styles.active}></View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Notifications;
