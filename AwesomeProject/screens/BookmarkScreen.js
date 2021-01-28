import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
const { width } = Dimensions.get("window");
const BookmarkScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <BackgroundHeader navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.searchContentBox}>
                   <View style={styles.image}>
                   <Image
                        source={require('../assets/images/cuboidal.png')}
                        style={
                            {
                                alignItems:'center',
                                justifyContent:'center',
                                height: 45,
                                width: 45,
                                borderRadius: 5
                            }
                        }
                    />
                   </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <Icon style={{marginLeft:4}} name="bookmark-empty" size={24} color="#ABB4BD" />
                </View>

                <View style={styles.searchContentBox}>
                   <View style={styles.image}>
                   <Image
                        source={require('../assets/images/cuboidal.png')}
                        style={
                            {
                                alignItems:'center',
                                justifyContent:'center',
                                height: 45,
                                width: 45,
                                borderRadius: 5
                            }
                        }
                    />
                   </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <Icon style={{marginLeft:4}} name="bookmark-empty" size={24} color="#ABB4BD" />
                </View>

                <View style={styles.searchContentBox}>
                   <View style={styles.image}>
                   <Image
                        source={require('../assets/images/cuboidal.png')}
                        style={
                            {
                                alignItems:'center',
                                justifyContent:'center',
                                height: 45,
                                width: 45,
                                borderRadius: 5
                            }
                        }
                    />
                   </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <Icon style={{marginLeft:4}} name="bookmark-empty" size={24} color="#ABB4BD" />
                </View>

                <View style={styles.searchContentBox}>
                   <View style={styles.image}>
                   <Image
                        source={require('../assets/images/cuboidal.png')}
                        style={
                            {
                                alignItems:'center',
                                justifyContent:'center',
                                height: 45,
                                width: 45,
                                borderRadius: 5
                            }
                        }
                    />
                   </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <Icon style={{marginLeft:4}} name="bookmark-empty" size={24} color="#ABB4BD" />
                </View>

                <View style={styles.searchContentBox}>
                   <View style={styles.image}>
                   <Image
                        source={require('../assets/images/cuboidal.png')}
                        style={
                            {
                                alignItems:'center',
                                justifyContent:'center',
                                height: 45,
                                width: 45,
                                borderRadius: 5
                            }
                        }
                    />
                   </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <Icon style={{marginLeft:4}} name="bookmark-empty" size={24} color="#ABB4BD" />
                </View>

                <View style={styles.searchContentBox}>
                   <View style={styles.image}>
                   <Image
                        source={require('../assets/images/cuboidal.png')}
                        style={
                            {
                                alignItems:'center',
                                justifyContent:'center',
                                height: 45,
                                width: 45,
                                borderRadius: 5
                            }
                        }
                    />
                   </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <Icon style={{marginLeft:4}} name="bookmark-empty" size={24} color="#ABB4BD" />
                </View>

                <View style={styles.searchContentBox}>
                   <View style={styles.image}>
                   <Image
                        source={require('../assets/images/cuboidal.png')}
                        style={
                            {
                                alignItems:'center',
                                justifyContent:'center',
                                height: 45,
                                width: 45,
                                borderRadius: 5
                            }
                        }
                    />
                   </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <Icon style={{marginLeft:4}} name="bookmark-empty" size={24} color="#ABB4BD" />
                </View>
            </View>
        </ScrollView>
    );
}

export default BookmarkScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal:15
    },
    image:{
        alignItems:'center',
        justifyContent:'center'
    },
    searchContentBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27, elevation: 10,
        paddingHorizontal: 15,
        paddingVertical: 19,
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 11,
    },
    searchContent: {
        flex:1,
        // backgroundColor:'yellow',
        marginLeft: 15,
    },
    searchContentTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
    },
    searchContentText: {
        flex: 1,
        color: 'gray',
        lineHeight: 17,
        textAlign: 'justify',
        fontSize: 15,
        fontFamily: 'LiberationSerif-Regular',
    },
});