import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useTheme} from '../../src/utils/DarkTheme/ThemeManager';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import {colors} from '../../constants/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../src/utils/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fontelloConfig from '../../src/config.json';
import {createIconSetFromFontello} from 'react-native-vector-icons';
const Icon = createIconSetFromFontello(fontelloConfig);
export const NotesModal = ({modal, changeModal, datas}) => {
  const [noteTitle, setNoteTitle] = useState((initState) => datas.title);
  const [noteContent, setNoteContent] = useState('Notes');
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  const getNotesData = async () => {
    try {
      let NoteData = await AsyncStorage.getItem('NotesData');
      NoteData = NoteData ? JSON.parse(NoteData) : [];

      NoteData.map((item) => {
        if (item.id == datas.id && item.titleId == datas.titleId) {
          setNoteTitle(item.noteTitle);
          setNoteContent(item.noteContent);
          // item.noteTitle = noteTitle;
          // item.noteContent = noteContent;
          // alreadyexist = true;
        }
      });
    } catch (err) {
      console.log('Error getting notes', err);
    }
  };

  useEffect(() => {
    getNotesData();
  }, []);

  const saveNotes = async () => {
    try {
      let alreadyexist = false;
      let NoteData = await AsyncStorage.getItem('NotesData');
      NoteData = NoteData ? JSON.parse(NoteData) : [];
      console.log('Today', NoteData);
      NoteData.map((item) => {
        if (item.id == datas.id && item.titleId == datas.titleId) {
          item.noteTitle = noteTitle;
          item.noteContent = noteContent;
          alreadyexist = true;
        }
      });
      if (alreadyexist) {
        console.log('a', NoteData);
        await AsyncStorage.setItem('NotesData', JSON.stringify(NoteData));
      } else {
        console.log('b', NoteData);
        NoteData.push({
          id: datas.id,
          noteContent: noteContent,
          noteTitle: noteTitle,
          titleId: datas.titleId,
        });
        await AsyncStorage.setItem('NotesData', JSON.stringify(NoteData));
      }

      changeModal();
    } catch (err) {
      console.log('Error saving notes', err);
    }
  };

  return (
    <Modal visible={modal} transparent={true} animationType="slide">
      <View style={[styles.modalContainer]}>
        <View style={styles.modalWrapper}>
          <TextInput
            style={styles.modalTitle}
            onChangeText={(text) => setNoteTitle(text)}
            value={noteTitle}></TextInput>
          <View style={styles.modalContentContainer}>
            <TextInput
              multiline
              onChangeText={(text) => setNoteContent(text)}
              value={noteContent}></TextInput>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              onPress={() => {
                changeModal();
              }}
              style={[styles.closeButton, styles.f_c_c_c]}>
              <Icon
                style={styles.modalCloseIcon}
                name="cancel-circled-outline"
                size={18}
              />
              <Text style={[styles.closeButtonText]}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveNotes()}
              style={[styles.saveButton, styles.f_c_c_c]}>
              <Icon style={styles.modalSaveIcon} name="ok-circled2" size={18} />
              <Text style={[styles.saveButtonText]}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: widthPercentageToDP(6.5),
    paddingVertical: heightPercentageToDP(1.4),
    fontSize: widthPercentageToDP(5),
  },
});
