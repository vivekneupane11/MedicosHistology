import React, { useState, useEffect, useLayoutEffect } from 'react';
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
  TextInput,
} from 'react-native';
import { color } from 'react-native-reanimated';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
import { colors } from '../constants/theme';
import fontelloConfig from '../src/config.json';
import { useIsFocused } from '@react-navigation/native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../src/utils/DarkTheme/ThemeManager';
const Icon = createIconSetFromFontello(fontelloConfig);
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../src/utils/responsive';

import { AllHistologyContent } from '../constants/mocks';

const width = Dimensions.get('screen').width;
const height = width / 1.61;

const ContentScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [Bookmark, setBookmark] = useState(JSON.stringify({ bookmark: [0] }));
  const [isBookmark, setisBookmark] = useState(false);
  const { id, title, titleId } = route.params;
  const { mode, theme: themeforDarkMode, toggle } = useTheme();
  const [contents, setContent] = useState({});
  const [isContent, setisContent] = useState(false);

  const extractContent = () => {
    let specificContent = AllHistologyContent.filter((item) => {
      return item.id == titleId;
    });
    if (specificContent) {
      specificContent = specificContent ? specificContent : [];

      setContent(item => specificContent[0]?.subTopics[id]);
      console.log("iddddddddddddddddddddddd", id);
      console.log('xxxxxxx', specificContent[0]);
      console.log('zzzz', specificContent[0]?.subTopics[id]);
      console.log('yyyyy', contents);
      setisContent(true);
    }

    // console.log(
    //   'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
    //   contents.content,
    // );
  };

  useEffect(() => {
    extractContent();
  }, [isContent]);

  const saveBookmarkData = async ({ id, titleId }) => {
    try {
      let bookmarkData = await AsyncStorage.getItem('BookmarkID');

      bookmarkData = bookmarkData
        ? bookmarkData
        : await JSON.stringify({ bookmark: [0] });
      let finalData = await JSON.parse(bookmarkData).bookmark;

      let parsedBookmarkData =
        typeof finalData === 'undefined' ? [0] : finalData;

      if (parsedBookmarkData.length >= 1) {
        let parsedNewArray = parsedBookmarkData.filter((item) => {
          return item != id && titleId != item.titleId;
        });
        // console.log('hello');
        if (parsedBookmarkData.length == parsedNewArray.length) {
          console.log('aa', parsedBookmarkData);
          let length = parsedNewArray.length;
          parsedNewArray[length] = { id: id, titleId: titleId };
          await AsyncStorage.setItem(
            'BookmarkID',
            JSON.stringify({ bookmark: parsedNewArray }),
          );
          setisBookmark(true);
          console.log(Bookmark);
        } else {
          // console.log('***********************', parsedBookmarkData);
          await AsyncStorage.setItem(
            'BookmarkID',
            JSON.stringify({ bookmark: parsedNewArray }),
          );
          setisBookmark(!isBookmark);
        }
      } else {
        // console.log('***********************', parsedBookmarkData);
        await AsyncStorage.setItem(
          'BookmarkID',
          JSON.stringify({ bookmark: [0, { id: id, titleId: titleId }] }),
        );
        setisBookmark(!isBookmark);
      }
    } catch (err) {
      // console.log('Error saving bookmark data', err);
    }
  };

  const getBookmarkDatas = async () => {
    let bookmarkData = await AsyncStorage.getItem('BookmarkID');
    // console.log('What in Bookmark', bookmarkData);
    bookmarkData = bookmarkData
      ? bookmarkData
      : await JSON.stringify({ bookmark: [0] });
    let parsedBookmarkData = await JSON.parse(bookmarkData).bookmark;
    parsedBookmarkData =
      typeof parsedBookmarkData === 'undefined' ? [0] : parsedBookmarkData;
    if (parsedBookmarkData.length > 1) {
      parsedBookmarkData.map((item) => {
        if (item.id == id && item.titleId == titleId) {
          setisBookmark(true);
          // console.log('What in bookmark State', Bookmark);
          return;
        }
      });
    }
  };
  useEffect(() => {
    getBookmarkDatas();
  }, [isBookmark, Bookmark]);

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
          <View style={{ flexDirection: 'row' }}>
            <Icon
              style={{ marginHorizontal: 0 }}
              name="edit"
              size={25}
              color="#fff"
            />

            <TouchableOpacity
              onPress={() => saveBookmarkData({ id: id, titleId: titleId })}>
              {isBookmark ? (
                <Icon
                  style={{ marginHorizontal: 20 }}
                  name="bookmark"
                  size={24}
                  color="#fff"
                />
              ) : (
                  <Icon
                    style={{ marginHorizontal: 20 }}
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
      {/* <Modal visible={modal} transparent={true} animationType="slide">
        <View style={[styles.modalContainer]}>
          <View style={styles.modalWrapper}>
            <TextInput style={styles.modalTitle} onChangeText={text => setNoteTitle(text)} value={noteTitle}></TextInput>
            <View style={styles.modalContentContainer}>
              <TextInput multiline onChangeText={text => setNoteContent(text)} value={noteContent}></TextInput>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity onPress={() => { setModal(false) }} style={[styles.closeButton, styles.f_c_c_c]} >
                <Icon style={styles.modalCloseIcon} name="cancel-circled2" size={18} />

                <Text style={[styles.closeButtonText]}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.saveButton, styles.f_c_c_c]}>
                <Icon style={styles.modalSaveIcon} name="ok-circled2" size={18} />
                <Text style={[styles.saveButtonText]}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
      <View style={styles.container}>
        <Slider />

        <View style={styles.contentContainer}>
          <View>
            {/* Tile is Here */}
            <Text style={styles.contentTitleText}>{title}</Text>

            {/* Introduction is Here  */}
            {contents?.isIntroduction && (
              <Text
                style={[
                  styles.contentBox,
                  styles.contentParagraphTypography,
                  { color: themeforDarkMode.primaryText },
                ]}>
                {'data.introduction.content'}
              </Text>
            )}
            {
              contents?.content?.subTopic.map(data => {
                console.log("***", data.content);
                return (
                  <View>
                    <Text>{data?.title}</Text>
                    {
                      typeof data.content == 'string' ? <Text>{data.content}</Text>
                        : <View>
                          {data?.content?.map(item => {
                            console.log("************", item);
                            return (
                              <View>
                                {/* Here is Subtopics */}
                                <Text >{item?.title} </Text>
                                {/* Should have to check the title  */}
                                {
                                  typeof item == 'string' ? <Text>{item}</Text>
                                    : <View>
                                      {
                                        typeof item?.content == 'string' ? <Text>{item?.content}</Text>
                                          : <View>
                                            {
                                              item?.content?.map(data => {
                                                return (
                                                  <View>
                                                    {
                                                      typeof data == 'string' ? <Text>{data}</Text>
                                                        : <View>
                                                          {
                                                            typeof data?.content == 'string' ? <Text>{data?.content}</Text>
                                                              : <View>
                                                                {
                                                                  data?.content?.map(data =>
                                                                    <Text>{data}</Text>
                                                                  )
                                                                }
                                                              </View>
                                                          }
                                                        </View>
                                                    }
                                                  </View>
                                                )
                                              }
                                              )
                                            }
                                          </View>
                                      }
                                    </View>
                                }
                              </View>
                            )
                          }
                          )}
                        </View>
                    }
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
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
    color: colors.secondary,
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
  },

  modalContentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    flex: 1,
    width: '100%',
    // backgroundColor: 'yellow',
    // paddingHorizontal:widthPercentageToDP(1.5),
    // paddingVertical:heightPercentageToDP(2.5)
  },
  modalFooter: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.lightWhite,
  },
  modalContainer: {
    // paddingVertical: 100,
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(12),
  },
  modalWrapper: {
    flex: 1,
    // width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: widthPercentageToDP(85),
  },
  closeButtonText: {
    // flex:0.2,
    color: 'red',
    // fontSize: 16,
    fontSize: widthPercentageToDP(4),
  },
  saveButtonText: {
    // flex:0.5,
    color: colors.secondary,
    // fontSize: 16,
    fontSize: widthPercentageToDP(4),
  },
  modalCloseIcon: {
    flex: 0.2,
    color: 'red',
  },
  modalSaveIcon: {
    flex: 0.2,
    color: colors.secondary,
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: 'green',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
    flex: 1,
    // backgroundColor: colors.primary,
    borderColor: 'green',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: heightPercentageToDP(1.8),
  },
  modalTitle: {
    // marginHorizontal: 25,
    // paddingVertical: 12,
    textAlign: 'center',
    color: colors.secondary,
    // fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: widthPercentageToDP(6.5),
    paddingVertical: heightPercentageToDP(1.4),
    fontSize: widthPercentageToDP(6),
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
    paddingVertical: heightPercentageToDP(0.5),
  },
});

export default ContentScreen;
