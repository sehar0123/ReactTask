import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {theme} from '../Core/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontRef, heightRef, widthRef} from '../Constant/screenSize';
import Icon from 'react-native-dynamic-vector-icons';

const AnimatedHeader = props => {
  const safeArea = useSafeArea();

  const {title, scrollA, left, bookmark} = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = 400 - 50 - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      {/* <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="white"
        translucent
      /> */}

      {isTransparent ? (
        <View style={styles.container(safeArea, isFloating, isTransparent)}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={35 * fontRef}
            style={{marginBottom: 10}}
            color={isTransparent ? theme.white : theme.white}
            onPress={props.LeftIcon}
          />

          {left ? (
            <MaterialCommunityIcons
              name="bookmark-outline"
              size={35 * fontRef}
              color={isTransparent ? theme.white : theme.white}
            />
          ) : null}
        </View>
      ) : (
        <View style={styles.container(safeArea, isFloating, isTransparent)}>
          {showSearch ? (
            <View style={{flexDirection: 'row'}}>
              <Icon
                type="Feather"
                name="x-circle"
                size={25 * fontRef}
                style={{top: 18 * heightRef, marginLeft: 10}}
                color={theme.primary}
                onPress={() => setShowSearch(false)}
              />
              <View style={styles.searchbar}>
                <TextInput
                  style={styles.input}
                  placeholder="Search for Abbrevation..."
                  value={search}
                  placeholderTextColor={theme.grey}
                  onChangeText={text => setSearch(text)}
                  onFocus={() => {
                    text => setSearch(text);
                  }}
                />
              </View>
              <Icon
                type="Feather"
                name="search"
                size={25 * fontRef}
                style={{top: 18 * heightRef}}
                color={theme.primary}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={40 * fontRef}
                onPress={props.LeftIcon}
                color={isTransparent ? '#FFF' : theme.white}
              />
              <Text style={styles.title(isTransparent)}>{title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '20%',
                  justifyContent: 'space-around',
                }}>
                {/* <MaterialCommunityIcons
              name="share-variant-outline"
              size={30 * fontRef}
              color={isTransparent ? '#FFF' : theme.white}
            /> */}
                {bookmark ? (
                  <Icon
                    type="Feather"
                    name="search"
                    size={25 * fontRef}
                    color={theme.white}
                    onPress={() => setShowSearch(true)}
                  />
                ) : null}
              </View>
            </View>
          )}
        </View>
      )}
    </>
  );
};

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    flexDirection: 'row',

    marginBottom: isFloating ? -60 * heightRef - safeArea.top : 0,
    height: 60 * heightRef + safeArea.top,
    justifyContent: 'space-between',
    shadowOffset: {y: 0},
    alignItems: 'center',
    backgroundColor: isTransparent ? 'transparent' : theme.black,
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: isTransparent => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24 * fontRef,
    color: isTransparent ? '#FFF' : theme.white,
  }),
  searchbar: {
    width: '84%',
    height: 60 * heightRef,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,

    borderBottomWidth: 1,
    bottom: 15,
    borderColor: theme.grey,
    paddingHorizontal: 10 * widthRef,
    flexDirection: 'row',
    backgroundColor: theme.black,
  },
  input: {
    fontSize: 16 * fontRef,
    top: 20 * heightRef,

    paddingHorizontal: 13 * widthRef,
    color: theme.grey,
  },
};

export default AnimatedHeader;
