import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Dimensions, StyleSheet, Alert, TouchableOpacity, Modal, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
import { colors } from '../constants/theme';
import fontelloConfig from '../src/config.json';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Icon = createIconSetFromFontello(fontelloConfig);

const width = Dimensions.get('screen').width;
const height = width / 1.61;



const ContentScreen = ({ navigation, route }) => {
    const [modal, setModal] = useState(false);
    const [noteTitle, setNoteTitle] = useState('Title');
    const [noteContent, setNoteContent] = useState('Notes');
    const [BookmarkData, setBookmarkData] = useState(JSON.stringify([]));
    const saveBookmark = ({ id }) => {
        setBookmarkData(JSON.parse(BookmarkData).push(id));
        AsyncStorage.setItem('Bookmark-id', JSON.stringify(BookmarkData));
        console.log("Bookmark added");
    }

    useEffect(() => {
        AsyncStorage.getItem('Bookmark-id').then(value => {
            value = (value === null) ? BookmarkData : value;
            setBookmarkData(value);
            console.log('Bookmarks' + BookmarkData);
        });
    }, [BookmarkData]);
    const { data } = route.params;
    console.info('**********************************************************************' + data.subtitle)
    React.useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: (props) => (
                    <View style={{ justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
                        <Text {...props} style={{ color: 'white', fontSize: 18, backgroundColor: colors.primary }}>Epithelial Tissue</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={()=>{setModal(true)}}>
                                <Icon style={{ marginHorizontal: 0 }} name="edit" size={25} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => saveBookmark({ id: data.id })}>
                                <Icon style={{ marginHorizontal: 20 }} name="bookmark-empty" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: '#fff'
            }
        );
    }, [navigation])
    return (

        <ScrollView style={{
            backgroundColor: 'lightgrey',
        }}>
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

            <View
                style={styles.container}>
                <Slider />
                <View style={styles.contentContainer}>
                    <View>
                        <Text style={styles.contentTitleText}>{data.title}</Text>
                        <Text style={[styles.contentText1, styles.contentParagraphTypography]}>{data.introduction.content}</Text>
                        <View>
                            <Text style={styles.contentSubTitleText}>{data.subtitle}</Text>
                            <View>
                                <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                                    <Text style={styles.subTitle}>{data.subtitle}</Text>
                                </Unorderedlist>
                                <Text style={[styles.contentText2, styles.contentParagraphTypography]}>{data.description.content[0].content}</Text>
                            </View>
                        </View>
                    </View>
                    {/* // Container for the introduction portion */}
                </View>
            </View>
            {/* Container */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // titleText: {
    //     fontFamily: 'Arial',
    //     fontWeight: 'bold',
    //     fontSize: 25,
    //     color: 'white'
    // },
    contentTitleText: {
        marginTop: 25,
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 8,
        fontFamily: 'PTSerif-Bold',
        fontSize: 35,
        color: '#156B9A'
    },
    contentSubTitleText: {
        paddingBottom: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        marginHorizontal: 12,
        fontFamily: 'Roboto-Bold',
        fontSize: 21,
        color: 'black'
    },
    subTitle: {
        color: 'black',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        fontWeight: 'bold'
    },

    // headerWave: {
    //     backgroundColor: '#156B9A',
    //     height: 80,
    //     width: '100%',
    //     borderBottomLeftRadius: 15,
    //     elevation: 25
    // },
    // headerIconTab: {
    //     paddingHorizontal: 5,
    //     height: 50,
    //     width: '100%',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // headerIconGroup: {
    //     flexDirection: 'row'
    // },
    container: {
        width: '100%'
    },
    contentContainer: {
        width: '100%',
    },
    contentText1: {
        marginBottom: 19,
        marginTop: 5,
        marginHorizontal: 25
    },
    contentText2: {
        marginBottom: 19,
        marginTop: 5,
        marginHorizontal: 35
    },
    unorderedlist: {
        marginLeft: 14,
        fontSize: 18
    },
    suggestionTitle: {
        marginBottom: 9,
        marginHorizontal: 12,
        fontFamily: 'Roboto-Bold',
        fontSize: 21,
        color: 'gray',
    },
    articleList: {
        // flex:1,
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        height: 90,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 3,
        marginHorizontal: 25,
        marginVertical: 7

    },
    imageContainer: {
        width: '20%',
        borderRadius: 8,
        // height: 70,
        // width: 70
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 5
    },
    articleContainer: {
        // paddingLeft: 19,
        width: '76%'
    },
    listTitleText: {
        flex: 0.7,
        color: 'black',
        fontFamily: 'Roboto-Bold',
        fontSize: 17,
    },
    articleContent: {
        flex: 1,
        paddingRight: 19,
        paddingVertical: 5,

    },
    suggestionBox: {
        paddingVertical: 21,
        marginTop: 14,
        justifyContent: 'space-evenly'
    },
    contentParagraphTypography: {
        lineHeight: 22,
        textAlign: 'justify',
        fontSize: 17,
        fontFamily: 'LiberationSerif-Regular',

    },
    cardContentParagraphTypography: {
        color: 'gray',
        lineHeight: 17,
        textAlign: 'justify',
        fontSize: 14,
        fontFamily: 'LiberationSerif-Regular',
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
    closeButtonText: {
        // flex:0.2,
        color: "red",
        fontSize: 16,
    },
    saveButtonText: {
        color: colors.secondary,
        fontSize: 16,
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
})

export default ContentScreen;