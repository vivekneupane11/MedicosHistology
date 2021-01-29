import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { colors } from "../constants/theme";
import { TouchableOpacity } from 'react-native-gesture-handler';
const notes = require("./notes.json");


const { width } = Dimensions.get("window");
const NoteScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <BackgroundHeader navigation={navigation} />
            <View style={styles.container}>
                {
                    notes.map((note, k) => {
                        var year = new Date().getFullYear();
                        var month = new Date().getMonth() + 1;
                        var date = new Date().getDate();
                        console.log(k);
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
                                <Icon name="sticky-note-o" size={21} color="#ABB4BD" />
                                <TouchableOpacity>
                                <View style={styles.closeButton}>
                                    <Text style={{ color: "#ABB4BD", fontSize: 19 }}>X</Text>
                                </View>
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
        flexDirection:'row',
        position: 'absolute',
        top: 5,
        right: 15,
        justifyContent:'center',
        alignItems:'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    closeButton: {
        marginLeft:5    
    }
})