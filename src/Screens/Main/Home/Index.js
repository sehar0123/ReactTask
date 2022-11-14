import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Constant/screenSize';
import {theme} from '../../../Core/Theme';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {data} from '../Categories/Index';

import {category, subscrition} from '../../../components/DummayData';
import Icon from 'react-native-dynamic-vector-icons';
import LottieView from 'lottie-react-native';
import DeletedModal from '../../../components/Modal';
import {Divider, FAB} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import MenuExample from '../../../components/Menu';
import Alert from '../../../components/Alert';
import { getproduct } from 'src/redux/reducers/ProductList/productActions';
import {connect, useSelector} from 'react-redux';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
import {EnableSnackBar} from 'src/config/function';
import Button from 'src/components/Button';
import {RefreshControl} from 'react-native';
import Header from 'src/components/Header';

const Home = props => {
  const viewRef = useRef();
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  // let AnimatedHeaderValue = new Animated.Value(0);
  // const [scroll, setScroll] = useState(true);
  const initialMode = useRef(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const navigation = useNavigation();
  const [progress, setProgress] = useState(false);
  const [page, setpage] = useState(1);
  const [listEnd, setListEnd] = useState(false);
  const [loader, setLoader] = useState(true);
  const [Loading, setLoading] = useState(false);
  const state = useSelector(state => state);
  const flatListRef = React.useRef();
  const [refreshing, setRefreshing] = useState(false);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 300;



  const fetchMoreData = () => {
    setLoading(true);
    if (!state.abbrevaition?.isListEnd && !state.abbrevaition?.moreLoading) {
      setpage(page + 1);
      setLoading(false);
    }
  };

  // console.log(state?.auth?.profile?.id);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  useEffect(() => {
    props.getproduct(undefined, ({success}) => {
      if (success) {
        setLoader(false)
        console.log('Product', state?.product?.product);
      } else {
        setLoader(false)
      }
    });
  }, []);

  
  return (
    <SafeAreaView style={{flex: 1,backgroundColor :props.theme.theme=="dark"?"black":theme.secondary}}>
        <Header title="Product"  />
      <ScrollView contentContainerStyle={{flex:1}}>
   
      {loader ? (
        <LottieView
          source={require('../../../Assets/Animation/progressbar.json')}
          autoPlay
          style={{
            width: 100,
            marginTop: '40%',
           
            alignSelf: 'center',
          }}
        />
      ) : (
        
        <FlatList
        
          data={state?.product?.product}
          // bounces={false}
        
          keyExtractor={item => item?.id}
          ItemSeparatorComponent={() => (
            <View style={{margin: 5 * heightRef}}></View>
          )}
          ListEmptyComponent={() => (
            setLoading(false),
            (
              <View
                style={{
                  marginTop: '50%',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Image
                resizeMode='contain'
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
                Product Not Found
                </Text>
              </View>
            )
          )}
          ListHeaderComponent={() => (
            <View style={{margin: 5 * heightRef}}></View>
          )}
        
          ListFooterComponent={() => (
            <View
              style={{
                // padding: 5 * heightRef,
                // backgroundColor: 'red',
                height: 50 * heightRef,
              }}>
             
            </View>
          )}
          renderItem={({item, index}) =>
          
              <View style={styles.card2} >
                <View style={{flexDirection:'row', }}>
                  <Image   resizeMode='contain' source={{uri:item.image}} style={{width:100*widthRef,height:100*heightRef}}>

                  </Image>
                  <View style={{width:'75%',marginHorizontal:10*widthRef,justifyContent:'space-evenly'}}>
                  <Text numberOfLines={4} style={styles.title}>{item?.title}</Text>
                  <Text style={styles.category}>{item?.category}</Text>
                  </View>
                </View>
                <Text style={styles.description}>{item?.description}</Text>
                
              
               
               
                <Divider style={{marginTop: 15 * heightRef}} />
                {/* <Text style={styles.name}>Full Form</Text> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10 * heightRef,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',

                     
                    }}
                 >
                    
                      <Icon
                    
                        name={'star'}
                        type="FontAwesome"
                        size={25 * fontRef}
                        color={'#FFDF00'}
                       
                      />
                    
                    <Text style={styles.rate}>{item?.rating?.rate}</Text>
                  </TouchableOpacity>
                  <Text style={styles.rate}>Count :{item.rating.count}</Text>
                 
                </View>
              </View>
         
          }
          
        />
      
      )}
      
      
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
 getproduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
