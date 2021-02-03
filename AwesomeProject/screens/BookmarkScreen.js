import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
import BackgroundHeader from '../components/BackgroundHeader';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../src/utils/responsive';
const Icon = createIconSetFromFontello(fontelloConfig);
const {width} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import data from './data';
const BookmarkScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  const { mode, theme : themeforDarkMode , toggle } = useTheme();
  const [isBookmakEmpty, setisBookmarkEmpty] = useState(false);
  const [changeBookmark, setBookmarkChange] = useState(false);
  const [BookmarkData, setBookmarkData] = useState([]);
  const removeBookmarkData = async ({id}) => {
    try {
      let bookmarkData = await AsyncStorage.getItem('BookmarkID');
      // console.log('kk', JSON.parse(bookmarkData).bookmark);
      if (JSON.parse(bookmarkData).bookmark.length < 2) {
        setisBookmarkEmpty(true);
      } else {
        // console.log(typeof JSON.parse(bookmarkData).bookmark);
        //   // AsyncStorage.setItem(Bookmark,);
        let newBookmarkData = JSON.parse(bookmarkData).bookmark.filter(
          (item) => item != id,
        );
        await AsyncStorage.setItem(
          'BookmarkID',
          JSON.stringify({bookmark: newBookmarkData}),
        );

        let dataBookmark = data.filter((item) => {
          return newBookmarkData.some((data) => {
            return item.id == data;
          });
        });
        // console.log('shere', dataBookmark);
        if (dataBookmark.length < 1) {
          setisBookmarkEmpty(true);
        }
        setBookmarkData(dataBookmark);
      }

      //   //   if(newB)
      //   if (newBookmarkData.length < 2) {
      //     setisBookmarkEmpty(true);
      //     let stringifieddata = JSON.stringify({bookmark: newBookmarkData});
      //     await AsyncStorage.setItem('BookmarkID', stringifieddata);

      //     setBookmarkData(newBookmarkData);
      //   } else {
      //     let stringifieddata = JSON.stringify(newBookmarkData);
          console.log(stringifieddata);
      //     await AsyncStorage.setItem(
      //       'BookmarkID',
      //       JSON.stringify({bookmark: newBookmarkData}),
      //     );

      //     setBookmarkData(stringifieddata);
      //   }
    } catch (err) {
      // console.log('Error Removing bookmark', err);
    }
  };
  const checkBookmarkStatus = async () => {
 
    try {
      let bookmarkData = await AsyncStorage.getItem('BookmarkID');

      
      let checker = await JSON.parse(bookmarkData).bookmark.length;
      // console.log("1",bookmarkData,checker);
      bookmarkData = ( checker >= 2)
        ? bookmarkData
        : await JSON.stringify({bookmark: [0]});
      // console.log("sss",bookmarkData);
      let finalData = await JSON.parse(bookmarkData).bookmark;
      // console.log('final', finalData);
      let parsedBookmarkData =
        typeof finalData === 'undefined' ? [0] : finalData;
      // console.log('l', parsedBookmarkData);
      if (finalData.length < 2) {
        // console.log("is here");
        setisBookmarkEmpty(true);
        // console.log('here', finalData.length);
      }
      let dataBookmark = data.filter((item) => {
        return parsedBookmarkData.some((data) => {
          return item.id == data;
        });
      });
      // console.log('shere', dataBookmark);
      setBookmarkData(dataBookmark);
     
      if(dataBookmark.length > 0){
        // console.log("finalss",dataBookmark.length);
        setisBookmarkEmpty(false);
      }
    } catch (err) {
      // AsyncStorage.setItem(Bookmark,);
      //   let asyncData = await AsyncStorage.getItem('BookmarkID');
      //   let arrLength =
      //     asyncData == null ? 0 : await JSON.parse(asyncData).bookmark.length;
      //   if (asyncData == null || arrLength <= 1) {
      //     setisBookmarkEmpty(true);
      //   } else {
      //     let dataBookmark = data.filter((item) => {
      //       return JSON.parse(asyncData).bookmark.some((data) => {
      //         return item.id == data;
      //       });
      //     });

      //     setisBookmarkEmpty(false);
      //     setBookmarkData(dataBookmark);
      // await JSON.parse(asyncData).bookmark.length;

      // let newArray = await JSON.parse(asyncData).bookmark;
      // let verifiednewArray = newArray.filter((item) => {
      //   return item != id;
      // });
      // if (newArray.length == verifiednewArray.length) {
      //   let length = verifiednewArray.length;
      //   verifiednewArray[length] = id;
      // } else {
      //   setisBookmark(!isBookmark);
      // }

      // let stringifieddata = await JSON.stringify({ bookmark: verifiednewArray });
      // AsyncStorage.setItem('BookmarkID', stringifieddata);
      // setBookmark(stringifieddata);
      // console.log('BookmarkStatus', err);
    }
  };

  useEffect(() => {
    checkBookmarkStatus();


  }, [isBookmakEmpty,isFocused]);
  return (
    <ScrollView
      style={{flexDirection: 'column'}}
      contentContainerStyle={{justifyContent: 'flex-start'}}>


      {/* <BackgroundHeader navigation={navigation} /> */}

      <View>
        <Text style={{ color: themeforDarkMode.primaryText }}>
           Current themeforDarkMode: {mode}
        </Text>
        <Text
          style={{ color: themeforDarkMode.primaryText,backgroundColor:themeforDarkMode.primaryText }}
          onPress={() => toggle()}
         >
           Toggle Theme
         </Text>
      </View>


      <View>
        <Text  >
           Current Theme: {mode}
        </Text>
        <Text
          style={{ backgroundColor:"red" }}
          onPress={() => toggle()}
         >
           Toggle Theme
         </Text>
      </View>
      {isBookmakEmpty ? (
        <TouchableOpacity>
          <Text>No Bookmark Set Currently</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          {!isBookmakEmpty &&
            BookmarkData.map((item) => (
              <TouchableOpacity
              onPress={() => {
                navigation.navigate('Content', {data: item});}}
                key={item.id}
                style={[styles.searchContentBox, styles.shadow]}>
                <View style={styles.image}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/cuboidal.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={styles.searchContent}>
                  <Text style={styles.searchContentTitle}>{item.title}</Text>
                  <Text style={styles.searchContentText} numberOfLines={2}>
                    {item.introduction.content}{' '}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeBookmarkData({id: item.id})}
                  style={styles.bookmark}>
                  <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </ScrollView>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 10,
    // paddingHorizontal: 15,
    paddingVertical: heightPercentageToDP(1.23),
    paddingHorizontal: widthPercentageToDP(3.8),
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    // height: 45,
    // width: 45,
    borderRadius: 5,
    height: heightPercentageToDP(5.4),
    width: widthPercentageToDP(11),
  },
  searchContentBox: {
    // paddingHorizontal: 15,
    // paddingVertical: 19,
    flexDirection: 'row',
    // marginVertical: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 11,
    paddingHorizontal: widthPercentageToDP(3.8),
    paddingVertical: heightPercentageToDP(2.3),
    marginVertical: heightPercentageToDP(1.2),
  },
  searchContent: {
    flex: 1,
    // backgroundColor:'yellow',
    // marginLeft: 15,
    marginLeft: widthPercentageToDP(3.5),
  },
  searchContentTitle: {
    color: 'black',
    // fontSize: 18,
    fontFamily: 'Roboto-Bold',
    fontSize: widthPercentageToDP(4.3),
  },
  searchContentText: {
    // marginRight: 23,
    flex: 1,
    color: 'gray',
    // lineHeight: 17,
    textAlign: 'justify',
    // fontSize: 15,
    fontFamily: 'LiberationSerif-Regular',
    marginRight: widthPercentageToDP(6.5),
    lineHeight: heightPercentageToDP(2),
    fontSize: widthPercentageToDP(3.6),
  },
  bookmark: {
    position: 'absolute',
    top: 2,
    right: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
