import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {color} from 'react-native-reanimated';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
import {colors} from '../constants/theme';
import fontelloConfig from '../src/config.json';
import {useIsFocused} from '@react-navigation/native';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
import {NotesModal} from '../components/NotesModal';
import firestore from '@react-native-firebase/firestore';
const Icon = createIconSetFromFontello(fontelloConfig);
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../src/utils/responsive';

import {AllHistologyContent} from '../constants/mocks';

const width = Dimensions.get('screen').width;
const height = width / 1.61;

const ContentScreen = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const [Bookmark, setBookmark] = useState(JSON.stringify({bookmark: [0]}));
  const [isBookmark, setisBookmark] = useState(false);
  const [modal, setModal] = useState(false);
  const {id, title, titleId, Modal = false} = route.params;
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  const [contents, setContent] = useState({});
  const [isContent, setisContent] = useState(false);
  const [isPremiumUser, setIspremiumUser] = useState(false);
  const [data, setData] = useState([]);
  const changeModal = () => {
    setModal((initialstate) => !initialstate);
  };
  const extractContent = () => {
    let specificContent;
    if (isPremiumUser) {
      specificContent = AllHistologyContent.filter((item) => {
        return item.id == titleId;
      });
    }

    if (specificContent) {
      specificContent = specificContent ? specificContent : [];

      setContent((item) => specificContent[0]?.subTopics[id]);
      console.log('iddddddddddddddddddddddd', id);
      console.log('xxxxxxx', specificContent[0]);
      console.log('zzzz', specificContent[0]?.subTopics[id]);
      console.log('yyyyy', contents);
      setisContent(true);
    }

    //    // console.log(
    //   'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
    //   contents.content,
    // );
  };
  //get bool data from firebase
  const firestoreData = async () => {
    try {
      const users = await firestore().collection('Allhistologydata').get();
      const histoData = await firestore()
        .collection('Allhistologydata')
        .doc('Tcfx8PDKef1MJCtWR0ix')
        .get();
      if (histoData && histoData.data().data[0]) {
        setIspremiumUser(true);
      }
    } catch (err) {
      console.log('error fetching firestore data', err);
    }
  };
  useEffect(() => {
    if (isPremiumUser == false) {
      firestoreData();
    }

    return () => {
      setIspremiumUser(false);
    };
  }, [isFocused, id, titleId]);
  useEffect(() => {
    if (isPremiumUser) {
      extractContent();
    }

    setModal(Modal);
  }, [isContent, Modal, isPremiumUser]);

  const saveBookmarkData = async ({id, titleId}) => {
    try {
      //      console.log(id, titleId);
      let bookmarkData = await AsyncStorage.getItem('BookmarkID');

      bookmarkData = bookmarkData
        ? bookmarkData
        : await JSON.stringify({bookmark: []});
      console.log('Bookmark data', bookmarkData);
      let finalData = await JSON.parse(bookmarkData).bookmark;
      console.log('Final data', finalData);

      let parsedBookmarkData = typeof finalData == 'undefined' ? [] : finalData;
      if (parsedBookmarkData.length > 0) {
        let parsedNewArray = parsedBookmarkData.filter(
          (item) =>
            item.id.toString() + item.titleId != id.toString() + titleId,
        );

        console.log(parsedNewArray, 'ccccccccccccccccccccccc');

        if (parsedBookmarkData.length == parsedNewArray.length) {
          console.log(
            '------------------------',
            parsedBookmarkData,
            parsedNewArray,
          );

          console.log('here');
          let length = parsedNewArray.length;
          parsedNewArray[length] = {id: id, titleId: titleId};
          await AsyncStorage.setItem(
            'BookmarkID',
            JSON.stringify({
              bookmark: parsedNewArray,
            }),
          );
          setisBookmark(!isBookmark);
        } else {
          // console.log(
          //   parsedNewArray.push({id: id, titleId: titleId}),
          //   parsedBookmarkData,
          //   'heresssssssssssssss',
          // );
          await AsyncStorage.setItem(
            'BookmarkID',
            JSON.stringify({
              bookmark: parsedNewArray,
            }),
          );
          setisBookmark(!isBookmark);
        }
      } else {
        console.log('herssse', {id: id, titleId: titleId});
        await AsyncStorage.setItem(
          'BookmarkID',
          JSON.stringify({bookmark: [{id: id, titleId: titleId}]}),
        );
        setisBookmark(!isBookmark);
      }
    } catch (err) {
      console.log('Error saving bookmark data', err);
    }
  };

  const getBookmarkDatas = async () => {
    let bookmarkData = await AsyncStorage.getItem('BookmarkID');

    bookmarkData = bookmarkData
      ? bookmarkData
      : await JSON.stringify({bookmark: []});
    let parsedBookmarkData = await JSON.parse(bookmarkData).bookmark;
    parsedBookmarkData =
      typeof parsedBookmarkData == 'undefined' ? [] : parsedBookmarkData;

    if (parsedBookmarkData.length > 0) {
      //      console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<', parsedBookmarkData.length);
      parsedBookmarkData.map((item) => {
        if (item.id == id && item.titleId == titleId) {
          setisBookmark(true);
          return;
        }
      });
    }
  };
  useEffect(() => {
    getBookmarkDatas();
  }, [isBookmark, Bookmark, isFocused, id, titleId]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            {...props}
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            Epithelial Tissue
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setModal((initialstate) => !initialstate)}>
              <Icon
                style={{marginHorizontal: 0}}
                name="edit"
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveBookmarkData({id: id, titleId: titleId})}>
              {isBookmark ? (
                <Icon
                  style={{marginHorizontal: 20}}
                  name="bookmark"
                  size={24}
                  color="#fff"
                />
              ) : (
                <Icon
                  style={{marginHorizontal: 20}}
                  name="bookmark-empty"
                  size={24}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      ),
      headerStyle: {
        backgroundColor: themeforDarkMode.primaryHeader,
      },
      headerTintColor: '#fff',
    });
  }, [navigation, isBookmark]);
  return (
    <ScrollView
      style={{
        backgroundColor: themeforDarkMode.contentBackground,
      }}>
      {isPremiumUser && (
        <View style={styles.container}>
          <Slider title={title} />
          <NotesModal
            modal={modal}
            changeModal={changeModal}
            datas={{id: id, title: title, titleId: titleId}}
          />
          <View style={styles.contentContainer}>
            <View>
              {/* Tile is Here */}
              <Text
                style={[
                  {color: themeforDarkMode.title},
                  styles.contentTitleText,
                ]}>
                {title}
              </Text>
              {/* Introduction is Here  */}
              {/* {console.log("7777777777777777", contents?.content)} */}
              {contents?.isIntroduction &&
                (typeof contents?.introductionContent == 'string' ? (
                  <Text
                    style={[
                      styles.contentBox,
                      styles.contentParagraphTypography,
                      {color: themeforDarkMode.contentParagraphTypography},
                    ]}>
                    {contents?.introductionContent}
                  </Text>
                ) : (
                  <View>
                    {contents?.introductionContent.length &&
                      contents?.introductionContent?.map(
                        (introductionContent) => {
                          // { console.log("88888888888888888888", introductionContent) }
                          return typeof introductionContent == 'string' ? (
                            <Text
                              style={[
                                styles.contentBox,
                                styles.contentParagraphTypography,
                                {
                                  color:
                                    themeforDarkMode.contentParagraphTypography,
                                },
                              ]}>
                              {introductionContent}
                            </Text>
                          ) : (
                            <View>
                              <Text style={styles.borderBottom}>
                                {introductionContent.title}
                              </Text>
                              {introductionContent?.content.length &&
                                introductionContent?.content.map((content) => {
                                  return (
                                    <Text
                                      style={[
                                        styles.contentBox,
                                        styles.contentParagraphTypography,
                                        {
                                          color:
                                            themeforDarkMode.contentParagraphTypography,
                                        },
                                      ]}>
                                      {content}
                                    </Text>
                                  );
                                })}
                            </View>
                          );
                        },
                      )}
                  </View>
                ))}
              {contents?.content?.subTopic.length &&
                contents?.content?.subTopic.map((data) => {
                  // console.log("***", data.content);
                  return (
                    <View>
                      <Text
                        style={[
                          styles.contentBox,
                          styles.subTitle,
                          styles.borderBottom,
                          {color: themeforDarkMode.subTitle},
                        ]}>
                        {data?.title}
                      </Text>
                      {
                        //START
                        //content subtopic content
                        //SUBTOPIC CEHCKER
                        data?.content?.subTopic == null ? (
                          //CONTENT WITHOUT NESETD SUBTOPIC
                          typeof data.content == 'string' ? (
                            <Text
                              style={[
                                styles.contentBox,
                                styles.contentParagraphTypography,
                                {
                                  color:
                                    themeforDarkMode.contentParagraphTypography,
                                },
                              ]}>
                              {data.content}
                            </Text>
                          ) : (
                            <View>
                              {/* {console.log("CONTENT WITHOUT NESETD SUBTOPIC")} */}
                              {data?.content.length &&
                                data?.content?.map((item) => {
                                  // console.log("************", item);
                                  return (
                                    <View>
                                      {/* Here is Subtopics */}
                                      <Text
                                        style={[
                                          styles.contentBox,
                                          styles.subTitle,
                                          {color: themeforDarkMode.subTitle},
                                        ]}>
                                        {item?.title}
                                      </Text>
                                      {/* Should have to check the title  */}
                                      {typeof item == 'string' ? (
                                        <Text
                                          style={[
                                            styles.contentBox,
                                            styles.contentParagraphTypography,
                                            {
                                              color:
                                                themeforDarkMode.contentParagraphTypography,
                                            },
                                          ]}>
                                          {item}
                                        </Text>
                                      ) : (
                                        <View>
                                          {typeof item?.content == 'string' ? (
                                            <Text
                                              style={[
                                                styles.contentBox,
                                                styles.contentParagraphTypography,
                                                {
                                                  color:
                                                    themeforDarkMode.contentParagraphTypography,
                                                },
                                              ]}>
                                              {item?.content}
                                            </Text>
                                          ) : (
                                            <View>
                                              {item?.content.length &&
                                                item?.content?.map((data) => {
                                                  return (
                                                    <View>
                                                      {typeof data ==
                                                      'string' ? (
                                                        <Text
                                                          style={[
                                                            styles.contentBox,
                                                            styles.contentParagraphTypography,
                                                            {
                                                              color:
                                                                themeforDarkMode.contentParagraphTypography,
                                                            },
                                                          ]}>
                                                          {data}
                                                        </Text>
                                                      ) : (
                                                        <View>
                                                          {typeof data?.content ==
                                                          'string' ? (
                                                            <Text
                                                              style={[
                                                                styles.contentBox,
                                                                styles.contentParagraphTypography,
                                                                {
                                                                  color:
                                                                    themeforDarkMode.contentParagraphTypography,
                                                                },
                                                              ]}>
                                                              {data?.content}
                                                            </Text>
                                                          ) : (
                                                            <View>
                                                              {data?.content
                                                                .length &&
                                                                data?.content?.map(
                                                                  (data) => (
                                                                    <Text
                                                                      style={[
                                                                        styles.contentBox,
                                                                        styles.contentParagraphTypography,
                                                                        {
                                                                          color:
                                                                            themeforDarkMode.contentParagraphTypography,
                                                                        },
                                                                      ]}>
                                                                      {data}
                                                                    </Text>
                                                                  ),
                                                                )}
                                                            </View>
                                                          )}
                                                        </View>
                                                      )}
                                                    </View>
                                                  );
                                                })}
                                            </View>
                                          )}
                                        </View>
                                      )}
                                    </View>
                                  );
                                })}
                            </View>
                          )
                        ) : (
                          //CONTENT WITH NESETD SUBTOPIC
                          <View>
                            {data?.content?.subTopic.length &&
                              data?.content?.subTopic.map((content) => {
                                // console.log("CONTENT WITH NESETD SUBTOPIC");
                                // console.log("************", content)
                                return (
                                  <View>
                                    <Text
                                      style={[
                                        styles.contentBox,
                                        styles.subTitle,

                                        {color: themeforDarkMode.subTitle},
                                      ]}>
                                      {content.title}
                                    </Text>
                                    {typeof content.content == 'string' ? (
                                      <Text
                                        style={[
                                          styles.contentBox,
                                          styles.contentParagraphTypography,
                                          {
                                            color:
                                              themeforDarkMode.contentParagraphTypography,
                                          },
                                        ]}>
                                        {content.content}
                                      </Text>
                                    ) : (
                                      <View>
                                        {content?.content.length &&
                                          content?.content.map((data) => {
                                            // console.log("*******************",data);
                                            return (
                                              <Text
                                                style={[
                                                  styles.contentBox,
                                                  styles.contentParagraphTypography,
                                                  {
                                                    color:
                                                      themeforDarkMode.contentParagraphTypography,
                                                  },
                                                ]}>
                                                {data}
                                              </Text>
                                            );
                                          })}
                                      </View>
                                    )}
                                  </View>
                                );
                              })}
                          </View>
                        )
                        //END
                      }
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      )}
      {!isPremiumUser && (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: '50%',
          }}>
          <Icon name="globe" size={48} color="#ABB4BD" />
          <Text
            style={[
              {
                color: themeforDarkMode.secondaryText,
                fontSize: 14,
                paddingTop: 12,
              },
            ]}>
            Share this app 5 times.
          </Text>
          <Text
            style={[
              {
                color: themeforDarkMode.secondaryText,
                fontSize: 14,
              },
            ]}>
            To access content offline for lifetime.
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // titleText: {
  //     fontFamily: 'Arial',
  //     fontWeight: 'bold',
  //     fontSize: 25,
  //     color: 'white'
  // },
  contentTitleText: {
    // marginTop: 25,
    // marginBottom: 10,
    textAlign: 'center',
    // marginHorizontal: 8,
    fontFamily: 'PTSerif-Bold',
    // fontSize: 35,
    marginTop: heightPercentageToDP(3),
    marginBottom: heightPercentageToDP(1.3),
    marginHorizontal: widthPercentageToDP(0.8),
    fontSize: widthPercentageToDP(8.5),
  },
  contentSubTitleText: {
    // paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // marginBottom: 10,
    // marginHorizontal: 12,
    fontFamily: 'Roboto-Bold',
    // fontSize: 21,
    color: 'black',
    paddingTop: heightPercentageToDP(3.5),
    marginBottom: heightPercentageToDP(1),
    marginHorizontal: widthPercentageToDP(3.5),
    // fontSize: widthPercentageToDP(3.9),
    fontSize: widthPercentageToDP(5.1),
  },
  subTitle: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    // fontSize: 18,
    fontWeight: 'bold',
    fontSize: widthPercentageToDP(4.3),
    // marginBottom: heightPercentageToDP(1.3),
    marginTop: heightPercentageToDP(2.5),
    // marginHorizontal: widthPercentageToDP(2.5),
  },

  contentParagraphTypography: {
    // lineHeight: 22,
    textAlign: 'justify',
    // fontSize: 17,
    fontFamily: 'LiberationSerif-Regular',
    lineHeight: heightPercentageToDP(2.9),
    fontSize: widthPercentageToDP(4),
  },
  contentBox: {
    // paddingHorizontal: 25,
    // paddingVertical: 5,
    paddingHorizontal: widthPercentageToDP(5.8),
    paddingVertical: heightPercentageToDP(0.1),
  },
  borderBottom: {
    paddingBottom: 2,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default ContentScreen;
