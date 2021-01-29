import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
import { colors } from '../constants/theme';
import fontelloConfig from '../src/config.json';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const Icon = createIconSetFromFontello(fontelloConfig);

const width = Dimensions.get('screen').width;
const height = width / 1.61;
const data = require('./data.json');


const ContentScreen = ({navigation}) => {
    React.useLayoutEffect(()=>{
        navigation.setOptions(
            {
                headerTitle:(props)=>(
                    <View style={{justifyContent:"space-between",flexDirection:'row',alignItems:'center'}}>
                    <Text {...props} style={{color:'white',fontSize:18,backgroundColor:colors.primary}}>Epithelial Tissue</Text>
                    <View style={{flexDirection:'row'}}>
                    <Icon style={{marginHorizontal:0}} name="edit" size={25} color="#fff" />
                    <Icon style={{marginHorizontal:20}} name="bookmark-empty" size={24} color="#fff" />
                        </View>
                    </View>
                ),
                headerStyle:{
                    backgroundColor:colors.primary
                },
                headerTintColor:'#fff'
            }
        );
    },[navigation])
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
                                        <Text style={[styles.contentText1, styles.contentParagraphTypography]}>{introduction.content}</Text>
                                        {
                                            result.description.map((description, k) => {
                                                return <View>
                                                    <Text style={styles.contentSubTitleText}>{description.title}</Text>
                                                    {
                                                        description.content.map((content, k) => {
                                                            return <View>
                                                                <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                                                                    <Text style={styles.subTitle}>{content.subTitle}</Text>
                                                                </Unorderedlist>
                                                                <Text style={[styles.contentText2, styles.contentParagraphTypography]}>{content.content}</Text>

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
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={[styles.cardContentParagraphTypography, styles.articleContent]}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                        </View>
                    </View>
                    {/* Card of article details */}

                    <View style={styles.articleList}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={[styles.cardContentParagraphTypography, styles.articleContent]}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                        </View>
                    </View>
                    {/* Card of article details */}

                    <View style={styles.articleList}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={[styles.cardContentParagraphTypography, styles.articleContent]}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                        </View>
                    </View>
                    {/* Card of article details */}

                    <View style={styles.articleList}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={[styles.cardContentParagraphTypography, styles.articleContent]}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
                        </View>
                    </View>
                    {/* Card of article details */}

                    <View style={styles.articleList}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/1.jpeg')}
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.listTitleText}>Epiglottis</Text>
                            <Text style={[styles.cardContentParagraphTypography, styles.articleContent]}>The epiglottis is a leaf-shaped flap of cartilage located behind the tongue, at the top of the larynx, or voice box.</Text>
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
    }
})

export default ContentScreen;