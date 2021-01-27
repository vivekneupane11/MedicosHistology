import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView,Dimensions } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { colors } from '../constants/theme';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SearchScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#F1F1F1',flex:1 ,height:"auto"}} contentContainerStyle={{flexGrow:1}}>
            <View style={styles.header}>
                <View style={styles.search}>
                <Icon style={{padding:4}} name="search" size={24} color={colors.gray} />
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
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
               
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
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
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
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
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
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
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
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
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
            // backgroundColor: 'blue',
            justifyContent: 'space-between'
        },
        header: {
            height: (width)/3,
            backgroundColor: '#3F3D56',
            borderBottomLeftRadius: 30.5,
            borderBottomRightRadius: 30.5,
            paddingTop: 20,
            alignItems: 'center',
            marginBottom: 90
        },
        search: {
            alignItems: 'center',
            paddingVertical: 4,
            paddingHorizontal: 10,
            flexDirection: 'row',
            backgroundColor: '#F0F0F0',
            width:'90%',
            borderRadius: 25,
           marginHorizontal:20
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
            shadowRadius: 6.27,
             elevation: 10,
            // paddingHorizontal: 15,
            // paddingVertical: 19,
            flexDirection: 'row',
            justifyContent:"space-around",
            alignItems:'center',
            padding:7,
            marginTop: 25,
            // height: 125,
            // width: 355,
            backgroundColor: '#F1F1F1',
            borderRadius: 11,
        },
        searchContent: {
            width:"65%",
            padding:10

        },
        searchContentTitle: {
            color: 'black',
            fontSize: 16,
            paddingVertical:2,
            fontWeight:'bold',
            fontFamily: 'Roboto-Bold',
        },
        searchContentText: {
            flex: 1,
            color: 'gray',
            paddingVertical:5,
            lineHeight: 17,
            textAlign: 'justify',
            fontSize: 14,
            fontFamily: 'LiberationSerif-Regular',
        },
        container: {
            alignItems: 'center',
        },
        similar: {
            marginHorizontal: 15,
            marginBottom: 5,
            color: 'gray',
            fontSize: 16,
            // fontFamily: 'Roboto-Bold',
        },
        similarContentBox: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27, elevation: 10,
  
            flexDirection: 'row',
            justifyContent:'flex-start',
            alignItems:'center',
          
            backgroundColor: '#F1F1F1',
            borderRadius: 11,
            width:'85%',
            padding:5,
            marginVertical:7
        },
        similarContent: {
            fontSize:14,
            width:'70%',
            paddingHorizontal:9,
            paddingVertical:7,
            justifyContent:'center'
        },
        similarContentTitle: {
            color: 'black',
            fontSize: 16,
            fontWeight:'bold',
            fontFamily: 'Roboto-Bold',
            elevation: 10,
            paddingBottom:1
        },
        similarContentText: {
            flex: 1,
            color: 'gray',
            lineHeight: 15,
            textAlign: 'justify',
            fontSize: 14,
            fontFamily: 'LiberationSerif-Regular',
            padding:4
        },
    }
)

export default SearchScreen;