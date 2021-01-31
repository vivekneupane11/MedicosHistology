import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, Modal, Alert, Button, TouchableOpacity } from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { colors } from "../constants/theme";
import { TextInput } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const notes = require("./notes.json");
const { width } = Dimensions.get("window");


const NoteScreen = ({ navigation }) => {
    const [item, setItem] = useState(0);
    const [modal, setModal] = useState(false);
    const [noteTitle, setNoteTitle] = useState('Title');
    const [noteContent, setNoteContent] = useState('Notes');

    const deleteNote = (index) => {
        console.log('hello');

        console.log(index);
    }
    return (
        <ScrollView>
            <BackgroundHeader navigation={navigation} />
            <Modal visible={modal} transparent={true} animationType="slide">
                <View style={[styles.modalContainer]}>
                    <View style={styles.modalWrapper}>
                        <TextInput style={styles.modalTitle} onChangeText={text => setNoteTitle(text)} value={noteTitle}></TextInput>
                        <View style={styles.modalContentContainer}>
                            <TextInput multiline style={styles.contentParagraphTypography} onChangeText={text => setNoteContent(text)} value={noteContent}></TextInput>
                        </View>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity onPress={() => { setModal(false) }} style={[styles.closeButton, styles.f_c_c_c]} >
                                <Icon style={styles.modalCloseIcon} name="cancel-circled2" size={18} />

                                <Text style={[styles.closeButtonText]}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.saveButton, styles.f_c_c_c]}>
                                <Icon style={styles.modalSaveIcon} name="cancel-circled2" size={18} />
                                <Text style={[styles.saveButtonText]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                {
                    notes.map((note, k) => {
                        var year = new Date().getFullYear();
                        var month = new Date().getMonth() + 1;
                        var date = new Date().getDate();
                        return <View key={k} style={[styles.cardContentBox, styles.shadow]}>
                            <View style={styles.dateContainer}>
                                <Text style={{ fontWeight: 'bold' }}>{year}</Text>
                                <Text style={{ fontWeight: 'bold' }}>{month}</Text>
                                <Text style={{ fontWeight: 'bold' }}>{date}</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardContentTitle}>{note.title}</Text>
                                <Text style={styles.cardContentText}>{note.note}</Text>
                            </View>
                            <View style={styles.note}>
                                <TouchableOpacity onPress={() => {
                                    setModal(true);
                                }}>
                                    <Icon name="sticky-note-o" size={21} color="#ABB4BD" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon style={styles.closeIcon} name="cancel-circled2" size={21} color="#ABB4BD" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    })
                }
            </View>
        </ScrollView >
    );
}

export default NoteScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    dateContainer: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imageStyle: {
        height: 45,
        width: 45,
        borderRadius: 5
    },
    cardContentBox: {
        paddingHorizontal: 15,
        paddingVertical: 19,
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 11,
    },
    cardContent: {
        flex: 1,
        // backgroundColor:'yellow',
        marginLeft: 15,
    },
    cardContentTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Roboto-Bold',

    },
    modalTitle: {
        marginHorizontal: 25,
        paddingVertical: 12,
        textAlign: 'center',
        color: colors.secondary,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    cardContentText: {
        marginRight: 23,
        flex: 1,
        color: 'gray',
        lineHeight: 17,
        textAlign: 'justify',
        fontSize: 15,
        fontFamily: 'LiberationSerif-Regular',
    },
    note: {
        flexDirection: 'row',
        position: 'absolute',
        top: 5,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 1,
    },
    closeIcon: {
        marginLeft: 5
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
        fontSize: 16,
        borderColor: 'green',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    saveButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        // backgroundColor: colors.primary,
        fontSize: 16,
        borderColor: 'green',
        borderTopWidth: StyleSheet.hairlineWidth
    },
    f_c_c_c: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        // flex:0.2,
        color: "red",
        fontSize: 16,
    },
    saveButtonText: {
        color: colors.secondary,
        fontSize: 16,
    },
    modalContentContainer: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        flex: 1,
        width: '100%',
        // backgroundColor: 'yellow'
    },
    modalFooter: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.lightWhite,
    },
    modalContainer: {
        paddingVertical: 100,
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalWrapper: {
        flex: 1,
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'

    },
    contentParagraphTypography: {
        lineHeight: 22,
        textAlign: 'justify',
        fontSize: 15,
        fontFamily: 'LiberationSerif-Regular',
    },
})