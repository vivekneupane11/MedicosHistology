import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { colors } from '../constants/theme';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {
    widthPercentageToDP,
    heightPercentageToDP,
  } from '../src/utils/responsive';
import InputTextField from "../components/InputTextField";
const SearchScreen = ({navigation}) => {

    return (
        <ScrollView style={styles.wrapper} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.header}>
                <View style={styles.search}>
                    {/* <Icon style={{padding:4}} name="search" size={24} color={colors.gray} /> */}
                    <InputTextField iconname="search" style={[styles.inputTitle,{height:40}]} placeholderText="Search Histology" />
                </View>
                {/* Search bar end */}
                <View style={[styles.searchContentBox, styles.shadow, styles.f_r_sa_c]}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
                {/* Searched box end */}
            </View>
            {/* Header end  */}
            <Text style={styles.similar}>Similar Topics</Text>
            <View style={styles.container}>
                <View style={[styles.similarContentBox, styles.shadow, styles.f_r_sa_c]}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
                {/* Card */}


                <View style={[styles.similarContentBox, styles.shadow, styles.f_r_sa_c]}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
                {/* Card */}

                <View style={[styles.similarContentBox, styles.shadow, styles.f_r_sa_c]}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
                {/* Card */}

                <View style={[styles.similarContentBox, styles.shadow, styles.f_r_sa_c]}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
                {/* Card */}

                <View style={[styles.similarContentBox, styles.shadow, styles.f_r_sa_c]}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
                {/* Card */}

                <View style={[styles.similarContentBox, styles.shadow, styles.f_r_sa_c]}>
                    <Image
                        source={require('../assets/images/heart.png')}
                        style={styles.imageStyle}
                        resizeMode='contain'
                    />
                    <View style={styles.similarContent}>
                        <Text style={styles.similarContentTitle}>Epiglottis</Text>
                        <Text style={styles.similarContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the </Text>
                    </View>
                </View>
                {/* Card */}
               

            </View>
            {/* List Container */}
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        wrapper: {
            backgroundColor: colors.lightWhite,
            flex: 1,
            height: "auto",
        },
        header: {
            // height: (width) / 3,
            backgroundColor: colors.primary,
            borderBottomLeftRadius: 30.5,
            borderBottomRightRadius: 30.5,
            // paddingTop: 20,
            alignItems: 'center',
            // marginBottom: 90,
            height:heightPercentageToDP(16.5),
            paddingTop:heightPercentageToDP(2.4),
            marginBottom:heightPercentageToDP(10.9)
        },
        search: {
            alignItems: 'center',
            // paddingVertical: 4,
            // paddingHorizontal: 10,
            flexDirection: 'row',
            backgroundColor: colors.lightGray,
            // width: '90%',
            borderRadius: 25,
            // marginHorizontal: 20,
            paddingVertical:heightPercentageToDP(0.6),
            paddingHorizontal:widthPercentageToDP(3.5),
            // marginHorizontal:widthPercentageToDP(2.4),
            width:widthPercentageToDP(90)

        },
        searchContentBox: {
            // paddingHorizontal: 7,
            // paddingVertical:7,
            // marginTop: 25,
            backgroundColor: colors.lightWhite,
            borderRadius: 11,
            paddingVertical:heightPercentageToDP(0.8),
            paddingHorizontal:widthPercentageToDP(1.6),
            marginTop:heightPercentageToDP(3)
        },
        imageStyle: {
            // height: 85,
            // width: 82,
            borderRadius: 5,
            height:heightPercentageToDP(10.2),
            width:widthPercentageToDP(20)
        },
        searchContent: {
            // width: "65%",
            // paddingHorizontal: 10,
            width:widthPercentageToDP(63),
            paddingHorizontal:widthPercentageToDP(2.5)

        },
        searchContentTitle: {
            flex: 0.6,
            color: 'black',
            // fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Roboto-Bold',
            fontSize: widthPercentageToDP(3.9),
        },
        searchContentText: {
            flex: 1,
            color: 'gray',
            // lineHeight: 14,
            textAlign: 'justify',
            // fontSize: 14,
            fontFamily: 'LiberationSerif-Regular',
            fontSize: widthPercentageToDP(3.4),
            lineHeight: heightPercentageToDP(1.65),
        },
        container: {
            alignItems: 'center',
            paddingBottom:heightPercentageToDP(2)
        },
        similar: {
            // marginHorizontal: 15,
            color: 'gray',
            // fontSize: 16,
            // fontFamily: 'Roboto-Bold',
            fontSize: widthPercentageToDP(3.9),
            marginHorizontal:widthPercentageToDP(3.5)
        },
        similarContentBox: {
            // paddingHorizontal: 7,
            // paddingVertical: 7,
            backgroundColor: colors.lightWhite,
            borderRadius: 11,
            paddingVertical:heightPercentageToDP(0.8),
            paddingHorizontal:widthPercentageToDP(1.6),
            marginTop:heightPercentageToDP(3)
        },
        similarContent: {
            width: "65%",
            paddingHorizontal: 10,
            width:widthPercentageToDP(63),
            paddingHorizontal:widthPercentageToDP(2.5)
        },
        similarContentTitle: {
            flex: 1,
            color: 'black',
            // fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Roboto-Bold',
            fontSize: widthPercentageToDP(3.9),

        },
        similarContentText: {
            flex: 1,
            color: 'gray',
            // lineHeight: 14,
            textAlign: 'justify',
            // fontSize: 14,
            fontFamily: 'LiberationSerif-Regular',
            fontSize: widthPercentageToDP(3.4),
            lineHeight: heightPercentageToDP(1.65),
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: heightPercentageToDP(0.5),
        },
        f_r_sa_c: {
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: 'center'
        }
    }
)

export default SearchScreen;