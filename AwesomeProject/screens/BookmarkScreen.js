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
import {useIsFocused} from '@react-navigation/native';
import {topics, topicImages} from '../constants/mocks';
const BookmarkScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  const [isBookmakEmpty, setisBookmarkEmpty] = useState(false);
  const [changeBookmark, setBookmarkChange] = useState(false);
  const [BookmarkData, setBookmarkData] = useState([]);
  const removeBookmarkData = async ({id, titleId}) => {
    try {
      let bookmarkData = await AsyncStorage.getItem('BookmarkID');
      console.log('kk', JSON.parse(bookmarkData));
      //console.log('#################################', bookmarkData);
      if (JSON.parse(bookmarkData)?.bookmark?.length < 1) {
        setisBookmarkEmpty(true);
      } else {
        //        // //console.log(typeof JSON.parse(bookmarkData).bookmark);
        //   // AsyncStorage.setItem(Bookmark,);
        let newBookmarkData = JSON.parse(bookmarkData).bookmark.filter(
          (item) => item.id != id && item.titleId != titleId,
        );
        newBookmarkData = newBookmarkData.length == 0 ? [0] : newBookmarkData;
        await AsyncStorage.setItem(
          'BookmarkID',
          JSON.stringify({bookmark: newBookmarkData}),
        );
        setBookmarkChange((init) => !init);
        setisBookmarkEmpty(false);

        // let dataBookmark = topics.filter((item) => {
        //   return parsedBookmarkData.some((data) => {
        //     //console.log(item, data);
        //     return item.id == data.titleId;
        //   });
        // });

        // let finaldataBookmark = [];
        // dataBookmark.map((ele) => {
        //   ele.subtopics.map((data) => {
        //     parsedBookmarkData.map((item) => {
        //       if (data.id == item.id && ele.id == item.titleId) {
        //         finaldataBookmark.push(data);
        //       }
        //     });
        //   });
        // });
        // //console.log('777777777777777777777777777777', finaldataBookmark);
        // // let finaldataBookmark = dataBookmark.map((item) => {
        // //   item.subtopics.filter((ele) => {
        // //     return parsedBookmarkData.some((data) => {
        // //       //console.log('{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{', item, data);
        // //       return ele.id == data.id;
        // //     });
        // //   });
        // // });

        // //console.log('shere', finaldataBookmark);
        // setBookmarkData(finaldataBookmark);

        // if (finaldataBookmark.length > 0) {
        //   //        // //console.log("finalss",finaldataBookmark.length);
        //   setisBookmarkEmpty(false);
        // }

        // //      // //console.log('shere', finaldataBookmark);
        // setBookmarkData(finaldataBookmark);
        //        // //console.log('shere', dataBookmark);
      }

      //   //   if(newB)
      //   if (newBookmarkData.length < 2) {
      //     setisBookmarkEmpty(true);
      //     let stringifieddata = JSON.stringify({bookmark: newBookmarkData});
      //     await AsyncStorage.setItem('BookmarkID', stringifieddata);

      //     setBookmarkData(newBookmarkData);
      //   } else {
      //     let stringifieddata = JSON.stringify(newBookmarkData);
      //      //console.log(stringifieddata);
      //     await AsyncStorage.setItem(
      //       'BookmarkID',
      //       JSON.stringify({bookmark: newBookmarkData}),
      //     );

      //     setBookmarkData(stringifieddata);
      //   }
    } catch (err) {
      console.log('Error Removing bookmark', err);
    }
  };
  const checkBookmarkStatus = async () => {
    try {
      let bookmarkData = await AsyncStorage.getItem('BookmarkID');
      if (bookmarkData == null) {
        setisBookmarkEmpty(true);
      }
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>', bookmarkData);
      let checker = await JSON.parse(bookmarkData).bookmark.length;
      //console.log('1', bookmarkData, checker);
      bookmarkData =
        checker > 1 ? bookmarkData : await JSON.stringify({bookmark: [0]});
      //console.log('sss', bookmarkData);
      let finalData = await JSON.parse(bookmarkData).bookmark;
      //      // //console.log('final', finalData);
      let parsedBookmarkData =
        typeof finalData === 'undefined' ? [0] : finalData;
      //console.log(finalData, '<<<<<<<<<<<<<<<<<<<<<');
      //console.log('l', parsedBookmarkData);
      if (finalData.length < 2) {
        console.log('here', finalData.length);
        setisBookmarkEmpty(true);
      } else {
        //console.log('else++++++++++++');
        let dataBookmark = topics.filter((item) => {
          return finalData.some((data) => {
            //console.log(item, data);
            return item.id == data.titleId;
          });
        });
        console.log('&&&&&&&&&&&&&&&&', dataBookmark);
        let finaldataBookmark = [];
        dataBookmark.map((ele) => {
          ele.subtopics.map((data) => {
            parsedBookmarkData.map((item) => {
              if (data.id == item.id && ele.id == item.titleId) {
                data.titleId = item.titleId;
                //console.log('pppp', data);
                finaldataBookmark.push(data);
              }
            });
          });
        });
        console.log('##################', finaldataBookmark);

        //console.log('777777777777777777777777777777', finaldataBookmark);
        // let finaldataBookmark = dataBookmark.map((item) => {
        //   item.subtopics.filter((ele) => {
        //     return parsedBookmarkData.some((data) => {
        //       //console.log('{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{', item, data);
        //       return ele.id == data.id;
        //     });
        //   });
        // });

        //console.log('shere', finaldataBookmark);
        setBookmarkData(finaldataBookmark);
        setisBookmarkEmpty(false);
        setBookmarkChange(true);
      }

      // }
      // if (finaldataBookmark.length > 1) {
      //   //        // //console.log("finalss",finaldataBookmark.length);
      //   setisBookmarkEmpty(false);
      // }

      //      // //console.log('shere', finaldataBookmark);
      // setBookmarkData(finaldataBookmark);

      //       if (dataBookmark.length > 0) {
      // //        // //console.log("finalss",dataBookmark.length);
      //         setisBookmarkEmpty(false);
      //       }
      //     let dataBookmark = data.filter((item) => {
      //       return JSON.parse(asyncData).bookmark.some((data) => {
      //         return item.id == data;
      //       });
      //     });
      //     setisBookmarkEmpty(false);
      //     setBookmarkData(dataBookmark);
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
      //      // //console.log('BookmarkStatus', err);
    } catch (err) {
      //console.log('Error checking bookmark status', err);
    }
  };

  useEffect(() => {
    //console.log('hereee', isBookmakEmpty);
    //console.log(

    checkBookmarkStatus();
  }, [isBookmakEmpty, isFocused, changeBookmark]);
  return (
    <ScrollView
      style={{
        flexDirection: 'column',
        backgroundColor: themeforDarkMode.secondaryHeader,
      }}
      contentContainerStyle={{justifyContent: 'flex-start'}}>
      {/* <BackgroundHeader navigation={navigation} /> */}
      {/* <View>
        <Text style={{color: themeforDarkMode.secondaryText}}>
          Current themeforDarkMode: {mode}
        </Text>
        <Text
          style={{
            color: themeforDarkMode.secondaryText,
            backgroundColor: themeforDarkMode.secondaryText,
          }}
          onPress={() => toggle()}>
          Toggle Theme
        </Text>
      </View> */}
      {/* <View>
        <Text>Current Theme: {mode}</Text>
        <Text style={{backgroundColor: 'red'}} onPress={() => toggle()}>
          Toggle Theme
        </Text>
      </View> */}
      {isBookmakEmpty ? (
        <TouchableOpacity>
          <Text>No Bookmark Set Currently</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          {BookmarkData.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Content', {data: item});
              }}
              key={item.id + item.title}
              style={[
                styles.searchContentBox,
                styles.shadow,
                {backgroundColor: themeforDarkMode.cardBox},
              ]}>
              <View style={styles.image}>
                <Image
                  resizeMode="contain"
                  source={item.imgPath}
                  style={styles.imageStyle}
                />
              </View>
              <View style={styles.searchContent}>
                <Text
                  style={[
                    styles.searchContentTitle,
                    {color: themeforDarkMode.secondaryText},
                  ]}>
                  {item.title}
                </Text>
                <Text style={styles.searchContentText} numberOfLines={2}>
                  dskjbfkjdsbfdskjfbkjdsfdskj
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  removeBookmarkData({id: item.id, titleId: item.titleId})
                }
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
    paddingTop: 5,
    // fontSize: 15,
    fontFamily: 'LiberationSerif-Regular',
    marginRight: widthPercentageToDP(6.5),
    lineHeight: heightPercentageToDP(2),
    fontSize: widthPercentageToDP(3.6),
  },
  bookmark: {
    position: 'absolute',
    top: 10,
    right: 15,
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
