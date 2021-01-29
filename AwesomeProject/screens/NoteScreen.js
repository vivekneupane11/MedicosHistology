import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, Modal, Alert } from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { colors } from "../constants/theme";
import { TouchableOpacity } from 'react-native-gesture-handler';
const notes = require("./notes.json");
const { width } = Dimensions.get("window");


const NoteScreen = ({ navigation }) => {
    const [item, setItem] = useState(0);
    const [modal, setModal] = useState(false);

    const deleteNote = (index) => {
        console.log('hello');

        console.log(index);
    }
    return (
        <ScrollView>
            <BackgroundHeader navigation={navigation} />
            <Modal visible={modal} transparent={true}>
                <View style={{ backgroundColor: '#000000aa', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '80%', width: '75%', backgroundColor: 'white' }}>
                        <Text style={styles.cardContentTitle}>Notes</Text>
                        <View style={styles.footer}>
                            <TouchableOpacity onPress={()=>console.log('close')} style={[styles.submitContainer, styles.shadow, styles.f_c_c_c]} >
                                <Text style={[styles.text, styles.buttonText]}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.submitContainer, styles.shadow, styles.f_c_c_c]}>
                                <Text style={[styles.text, styles.buttonText]}>Save</Text>
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
                                <TouchableOpacity onPress={() => { setModal(true) }}>
                                    <Icon name="sticky-note-o" size={21} color="#ABB4BD" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon style={styles.closeButton} name="cancel-circled2" size={21} color="#ABB4BD" />
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
        elevation: 2,
    },
    closeButton: {
        marginLeft: 5
    },
    submitContainer: {
        backgroundColor: colors.secondary,
        fontSize: 16,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal:15,
        marginHorizontal:10,
        marginTop: 32,
        color: "white",
    },
    f_c_c_c: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    footer:{
        width:'100%',
        backgroundColor:'yellow',
        flexDirection:'row',
        justifyContent:'flex-end'
    }
})