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
import { createIconSetFromFontello } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Icon = createIconSetFromFontello(fontelloConfig);
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';

const width = Dimensions.get('screen').width;
const height = width / 1.61;

const ContentScreen = ({ navigation, route }) => {
  const [Bookmark, setBookmark] = useState([]);
  const [isBookmark, setisBookmark] = useState(false);
  const [modal, setModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState('Title');
  const [noteContent, setNoteContent] = useState('Notes');
  const { data } = route.params;

  // const getBookmarkData = async ()=>{
  //     try{

  //         let  bookmarkData = await AsyncStorage.getItem('BookmarkID');
  //         bookmarkData = (bookmarkData == null)?[]: await JSON.parse(bookmarkData);
  //          let stringBookmarkData = JSON.stringify(bookmarkData);
  //      return stringBookmarkData;
  //     }
  // catch(err){
  //     console.log('Error getting Bookmark',err);
  // }
  //  }
  const saveBookmarkData = async ({ id }) => {
    try {
      // AsyncStorage.setItem(Bookmark,);
      let asyncData = await AsyncStorage.getItem('BookmarkID');
      asyncData =
        asyncData == null ? JSON.stringify({ bookmark: [0] }) : asyncData;
      await JSON.parse(asyncData).bookmark.length;

      let newArray = await JSON.parse(asyncData).bookmark;
      let verifiednewArray = newArray.filter((item) => {
        return item != id;
      });
      if (newArray.length == verifiednewArray.length) {
        let length = verifiednewArray.length;
        verifiednewArray[length] = id;
      } else {
        setisBookmark(!isBookmark);
      }

      let stringifieddata = await JSON.stringify({ bookmark: verifiednewArray });
      AsyncStorage.setItem('BookmarkID', stringifieddata);
      console.log('STRIGIFIED', stringifieddata);
      setBookmark(stringifieddata);
    } catch (err) {
      console.log('Error saving bookmark', err);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('BookmarkID').then((value) => {
      console.log('here' + value);
      let asyncData = value == null ? JSON.stringify({ bookmark: [0] }) : value;

      setBookmark(asyncData);
      let AsyncBookmarkData = JSON.parse(asyncData).bookmark;
      AsyncBookmarkData.map((item) => {
        if (item == data.id) {
          // console.log(item,data.id);
          setisBookmark(true);
          return;
        }
      });
    });

    console.log('Is bookmark', isBookmark);
  }, [Bookmark]);

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
              backgroundColor: colors.primary,
            }}>
            Epithelial Tissue
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => {setModal(true);}}>
              <Icon name="edit" size={23} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveBookmarkData({ id: data.id })}>
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
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    });
  }, [navigation, isBookmark]);
  return (
    <ScrollView
      style={{
        backgroundColor: 'lightgrey',
      }}>
      <Modal visible={modal} transparent={true} animationType="slide">
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
      </Modal>
      <View style={styles.container}>
        <Slider />

        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.contentTitleText}>{data.title}</Text>
            <Text
              style={[styles.contentBox, styles.contentParagraphTypography]}>
              {data.introduction.content}
            </Text>

            <View>
              <Text style={styles.contentSubTitleText}>{data.subtitle}</Text>

              <View style={styles.contentBox}>
                <Unorderedlist
                  bulletUnicode={0x2023}
                  style={styles.unorderedlist}>
                  <Text style={styles.subTitle}>{data.subtitle}</Text>
                </Unorderedlist>
                <Text
                  style={[
                    styles.contentBox,
                    styles.contentParagraphTypography,
                  ]}>
                  {data.description.content[0].content}
                </Text>
              </View>
            </View>
          </View>
          {/* // Container for the introduction portion */}
        </View>
      </View>
      {/* Container */}
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
    fontSize: widthPercentageToDP(8.5)
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
    paddingVertical: heightPercentageToDP(12)
  },
  modalWrapper: {
    flex: 1,
    // width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: widthPercentageToDP(85)
  },
  closeButtonText: {
    // flex:0.5,
    color: "red",
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
    paddingVertical: heightPercentageToDP(1.8)
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
    paddingVertical: heightPercentageToDP(0.5)
  },
});

export default ContentScreen;
