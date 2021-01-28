import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
// import fontelloConfig from '../src/config.json';
// import {colors} from '../constants/theme';
// const Icon = createIconSetFromFontello(fontelloConfig);

const width = Dimensions.get('screen').width;
const height = width / 1.61;
const data = require('./data.json');


const ContentScreen = () => {
    return (
        <ScrollView style={{
            backgroundColor: 'lightgrey',
        }}>
            {/* <View
                style={styles.headerWave}
            >
                <View style={styles.headerIconTab}>
                    <Image
                        source={require('../assets/icons/back.png')}
                        style={{ height: 40, width: 50, marginTop: 19 }}
                    />
                    <Text style={styles.titleText}>Lorem Ipsum Lorem Ipsum</Text>
                    <View style={styles.headerIconGroup}>
                        <Image
                            source={require('../assets/icons/pen.png')}
                            style={{ height: 35, width: 35, marginTop: 5 }}
                        />
                        <Image
                            source={require('../assets/icons/bookmark.png')}
                            style={{ height: 40, width: 40 }}
                        />
                    </View>
                </View>
                {/* Header tab */}
            {/* / </View> */}
            {/* Header */}
            <View
                style={styles.container}>
                <Slider />
                {/* Slider */}
                {
                    data.map((result, k) => {
                        return (<View style={styles.contentContainer}>
                            {
                                result.introduction.map((introduction, k) => {
                                    return <View>
                                        <Text style={styles.contentTitleText}>{introduction.title}</Text>
                                        <Text style={styles.contentText1}>{introduction.content}</Text>
                                        {
                                            result.description.map((description, k) => {
                                                return <View>
                                                    <Text style={styles.contentSubTitleText}>{description.title}</Text>
                                                    {
                                                        description.content.map((content, k) => {
                                                            return <View>
                                                                <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedList}>
                                                                    <Text style={styles.listTitleText}>{content.subTitle}</Text>
                                                                </Unorderedlist>
                                                                <Text style={styles.contentText2}>{content.content}</Text>

                                                            </View>
                                                        })
                                                    }
                                                </View>
                                                // Container containing description portion
                                            })
                                        }
                                    </View>
                                    // Container for the introduction portion
                                })
                            }
                        </View>
                            // Content container
                        )
                    })
                }
                <View style={styles.suggestionBox}>
                    <Text style={styles.suggestionTitle}>Similar arctile</Text>
                    <View style={styles.articleList}>
                        <View style={styles.image}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={styles.articleContent}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                        </View>
                    </View>
                    {/* Card of article details */}
                    <View style={styles.articleList}>
                        <View style={styles.image}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={{ height: '100%', width: '100%' }}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={styles.articleContent}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                        </View>
                    </View>
                    {/* Card of article details */}

                    <View style={styles.articleList}>
                        <View style={styles.image}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={{ height: '100%', width: '100%', borderRadius: 5 }}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={styles.articleContent}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                        </View>
                    </View>
                    {/* Card of article details */}


                </View>
                {/* Similar topics container */}
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
    // contentTitleText: {
    //     marginTop: 25,
    //     marginBottom: 10,
    //     textAlign: 'center',
    //     marginHorizontal: 8,
    //     fontFamily: 'PTSerif-Bold',
    //     fontSize: 35,
    //     color: '#156B9A'
    // },
    contentSubTitleText: {
        paddingBottom: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        marginHorizontal: 12,
        fontFamily: 'Roboto-Bold',
        fontWeight: 'normal',
        fontSize: 25,
        color: 'black'
    },
    listTitleText: {
        color: 'black',
        fontFamily: 'Roboto-Bold',
        fontSize: 21,
    },
    unorderedList: {
        fontSize: 18,
        marginLeft: 21
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

    pagingText: {
        color: 'grey',
        margin: 3
    },
    pagingActiveText: {
        color: 'blue',
        fontSize: 19
    },
    container: {
        width: '100%'
    },
    contentContainer: {
        width: '100%',
    },
    contentText1: {
        marginBottom: 19,
        marginTop: 5,
        lineHeight: 24,
        textAlign: 'justify',
        fontSize: 22,
        fontFamily: 'LiberationSerif-Regular',
        marginHorizontal: 25
    },
    contentText2: {
        marginBottom: 19,
        marginTop: 5,
        lineHeight: 24,
        textAlign: 'justify',
        fontSize: 22,
        fontFamily: 'LiberationSerif-Regular',
        marginHorizontal: 35
    },
    suggestionTitle: {
        marginBottom: 9,
        marginHorizontal: 12,
        fontFamily: 'LiberationSerif-Bold',
        fontSize: 31,
        color: '#156B9A'
    },
    articleList: {
        paddingVertical: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginVertical: 5,
        height: 90,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 3,
        marginHorizontal: 25
    },
    image: {
        borderRadius: 8,
        height: 70,
        width: 70
    },
    articleContainer: {
        width: 250
    }
    ,
    articleContent: {
        paddingRight: 19,
        paddingVertical: 5,
        color: 'gray',
        lineHeight: 17,
        textAlign: 'justify',
        fontSize: 17,
        fontFamily: 'LiberationSerif-Regular',
    },
    suggestionBox: {
        paddingVertical: 21,
        marginTop: 14
    }
})

export default ContentScreen;