import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { colors } from '../constants/theme';

const SearchScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#F1F1F1' }}>
            <View style={styles.header}>
                <View style={styles.search}>
                <Icon style={{paddingVertical:2}} name="search" size={24} color={colors.gray} />
                    <Text style={styles.searchText}>Search Histology</Text>
                </View>
                {/* Search bar end */}
                <View style={styles.searchContentBox}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={
                            {
                                height: 85,
                                width: 82,
                                borderRadius: 5
                            }
                        }
                    />
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                </View>
                {/* Searched box end */}
            </View>
            {/* Header end  */}
            <Text style={styles.similar}>Similar Topics</Text>
            <View style={styles.container}>
                <View style={styles.similarContentBox}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={
                            {
                                height: 85,
                                width: 82,
                                borderRadius: 5
                            }
                        }
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                    </View>
                </View>
                {/* card container */}
                <View style={styles.similarContentBox}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={
                            {
                                height: 85,
                                width: 82,
                                borderRadius: 5
                            }
                        }
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                    </View>
                </View>
                {/* card container */}
                <View style={styles.similarContentBox}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={
                            {
                                height: 85,
                                width: 82,
                                borderRadius: 5
                            }
                        }
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                    </View>
                </View>
                {/* card container */}
            </View>
            {/* List Container */}
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        wrapper: {
            backgroundColor: 'blue',
            justifyContent: 'space-between'
        },
        header: {
            height: 205,
            backgroundColor: '#3F3D56',
            borderBottomLeftRadius: 18.5,
            borderBottomRightRadius: 18.5,
            paddingTop: 35,
            alignItems: 'center',
            marginBottom: 100
        },
        search: {
            alignItems: 'center',
            padding: 10,
            flexDirection: 'row',
            backgroundColor: '#F0F0F0',
            height: 53,
            width: 350,
            borderRadius: 25,
        },
        searchText: {
            color: '#D0A8A8',
            fontSize: 18,
   
            marginHorizontal: 10
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
            marginTop: 50,
            height: 125,
            width: 355,
            backgroundColor: '#F1F1F1',
            borderRadius: 11,
        },
        searchContent: {
            marginHorizontal: 15,
            width: 229,
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
        container: {
            alignItems: 'center',
        },
        similar: {
            marginHorizontal: 12,
            marginBottom: 16,
            color: 'black',
            fontSize: 20,
            fontFamily: 'Roboto-Bold',
        },
        similarContentBox: {
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
            marginTop: 9,
            marginBottom: 25,
            height: 125,
            width: 355,
            backgroundColor: '#F1F1F1',
            borderRadius: 11,
        },
        similarContent: {
            marginHorizontal: 15,
            width: 229,

        },
        similarContentTitle: {
            color: 'black',
            fontSize: 18,
            fontFamily: 'Roboto-Bold',
            elevation: 10
        },
        similarContentText: {
            flex: 1,
            color: 'gray',
            lineHeight: 17,
            textAlign: 'justify',
            fontSize: 15,
            fontFamily: 'LiberationSerif-Regular',
        },
    }
)

export default SearchScreen;