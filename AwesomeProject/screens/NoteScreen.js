import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import {colors} from '../constants/theme';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../src/utils/responsive';

// import { TouchableOpacity } from 'react-native-gesture-handler';
// const notes = require('./notes.json');
const {width} = Dimensions.get('window');

const NoteScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  const [NotesData, setNotesData] = useState({});
  const [isNoteEmpty, setNoteEmpty] = useState(true);
  const [isNoteChange, setNoteChange] = useState(false);
  // const [item, setItem] = useState(0);
  // const [modal, setModal] = useState(false);
  // const [noteTitle, setNoteTitle] = useState('Title');
  // const [noteContent, setNoteContent] = useState('Notes');
  // const [data, setData] = useState([]);

  const removeNotes = async ({id, titleId}) => {
    try {
      let NoteData = NotesData.filter((item) => {
        return item.id.toString() + item.titleId != id.toString() + titleId;
      });
      await AsyncStorage.setItem('NotesData', JSON.stringify(NoteData));
      setNotesData(NoteData);
      setNoteChange((initialstate) => !initialstate);
    } catch (err) {
      console.log('Error removing notes data', err);
    }
  };

  const getNotesData = async () => {
    try {
      let NoteData = await AsyncStorage.getItem('NotesData');
      NoteData = NoteData == null ? [] : JSON.parse(NoteData);
      console.log('aaa', NoteData);

      if (NoteData.length > 0 && NotesData != null && NotesData != undefined) {
        setNotesData((init) => NoteData);
        setNoteEmpty(false);
        console.log('Notes Data', NotesData);
      } else {
        setNoteEmpty(true);
        setNoteChange(true);
        console.log('Here');
      }
    } catch (err) {
      console.log('Error getting notes', err);
    }
  };

  useEffect(() => {
    getNotesData();
  }, [isNoteEmpty, isFocused, isNoteChange]);

  return (
    <ScrollView style={{backgroundColor: themeforDarkMode.secondaryHeader}}>
      {isNoteEmpty ? (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: '50%',
          }}>
          <Icon name="paper-plane-empty" size={48} color="#ABB4BD" />
          <Text
            style={[
              {
                color: themeforDarkMode.secondaryText,
                fontSize: 12,
                paddingTop: 12,
              },
            ]}>
            No Notes set.
          </Text>
          <Text
            style={[
              {
                color: themeforDarkMode.secondaryText,
                fontSize: 12,
              },
            ]}>
            Please set Notes to view it later.
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          {NotesData.map((note, k) => {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var date = new Date().getDate();
            return (
              <TouchableOpacity
                key={note.id.toString() + note.titleId.toString()}
                onPress={() => {
                  setModal(true);
                }}>
                <View
                  key={k}
                  style={[
                    styles.cardContentBox,
                    styles.shadow,
                    {backgroundColor: themeforDarkMode.cardBox},
                  ]}>
                  <View style={styles.dateContainer}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: themeforDarkMode.secondaryText,
                      }}>
                      {year}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: themeforDarkMode.secondaryText,
                      }}>
                      {month}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: themeforDarkMode.secondaryText,
                      }}>
                      {date}
                    </Text>
                  </View>
                  <View style={styles.cardContent}>
                    <Text
                      style={[
                        styles.cardContentTitle,
                        {color: themeforDarkMode.secondaryText},
                      ]}>
                      {note.noteTitle}
                    </Text>
                    <Text style={styles.cardContentText}>
                      {note.noteContent}
                    </Text>
                  </View>
                  <View style={styles.note}>
                    <TouchableOpacity
                      onPress={() =>
                        removeNotes({id: note.id, titleId: note.titleId})
                      }>
                      <Icon
                        style={styles.closeIcon}
                        name="cancel-circled-outline"
                        size={21}
                        color="#ABB4BD"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    paddingHorizontal: widthPercentageToDP(3.8),
  },
  dateContainer: {
    // width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: widthPercentageToDP(21.3),
  },
  cardContentBox: {
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
  cardContent: {
    flex: 1,
    // backgroundColor:'yellow',
    // marginLeft: 15,
    marginLeft: widthPercentageToDP(3.5),
  },
  cardContentTitle: {
    color: 'black',
    // fontSize: 18,
    fontFamily: 'Roboto-Bold',
    fontSize: widthPercentageToDP(4.3),
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
  cardContentText: {
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
  note: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
  },
  closeIcon: {
    // marginLeft: 5,
    marginTop: 5,
    marginLeft: widthPercentageToDP(1.2),
  },
  modalCloseIcon: {
    flex: 0.24,
    color: 'red',
  },
  modalSaveIcon: {
    flex: 0.24,
    color: colors.secondary,
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    borderColor: 'green',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // paddingVertical: 15,
    flex: 1,
    // backgroundColor: colors.primary,
    borderColor: 'green',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: heightPercentageToDP(1.8),
  },
  f_c_c_c: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    // flex:0.2,
    color: 'red',
    // fontSize: 16,
    fontSize: widthPercentageToDP(4),
  },
  saveButtonText: {
    color: colors.secondary,
    // fontSize: 16,
    fontSize: widthPercentageToDP(4),
  },
  modalContentContainer: {
    // paddingHorizontal: 15,
    // paddingVertical: 25,
    flex: 1,
    width: '100%',
    // backgroundColor: 'yellow',
    paddingHorizontal: widthPercentageToDP(3.5),
    paddingVertical: heightPercentageToDP(3),
  },
  modalFooter: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.lightWhite,
    // width:widthPercentageToDP(85)
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
});
