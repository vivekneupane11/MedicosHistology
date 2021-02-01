import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';
const Icon = createIconSetFromFontello(fontelloConfig);
const { width } = Dimensions.get("window");
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './data';
const BookmarkScreen = ({ navigation }) => {

    const [isBookmakEmpty, setisBookmarkEmpty] = useState(false);
    const [changeBookmark, setBookmarkChange] = useState(false);
    const [BookmarkData, setBookmarkData] = useState(JSON.stringify({ bookmark: [0] }));
    const removeBookmarkData = async ({ id }) => {
        try {
            // AsyncStorage.setItem(Bookmark,);
            let newBookmarkData = BookmarkData.filter(item => item.id != id)
            let stringifieddata = JSON.stringify(newBookmarkData);
            AsyncStorage.setItem('BookmarkID', stringifieddata);
            setBookmarkData(newBookmarkData);
        } catch (err) {
            console.log('Error saving bookmark', err);
        }
    };
    const checkBookmarkStatus = async () => {
        try {
            // AsyncStorage.setItem(Bookmark,);
            let asyncData = await AsyncStorage.getItem('BookmarkID');
         if(!JSON.parse(asyncData).bookmark){
           await  AsyncStorage.setItem('BookmarkID',JSON.stringify({ bookmark: [0] })) 
           asyncData = await AsyncStorage.getItem('BookmarkID');
         }
       
            console.log("Length",typeof(JSON.parse(asyncData).bookmark.length));
            if (asyncData == null ) {
                setisBookmarkEmpty(true);
              return;
            } else {
            
                
                console.log(asyncData);
                let dataBookmark = data.filter(item => {
                    return JSON.parse(asyncData).bookmark.some(data => {
                        return item.id == data
                    });
                    setisBookmarkEmpty(false);

                });
                // console.log("****************************",dataBookmark);
                setBookmarkData(dataBookmark);
               
            }
            // await JSON.parse(asyncData).bookmark.length;

            // let newArray = await JSON.parse(asyncData).bookmark;
            // let verifiednewArray = newArray.filter((item) => {
            //   return item != id;
            // });
            // if (newArray.length == verifiednewArray.length) {
            //   let length = verifiednewArray.length;
            //   verifiednewArray[length] = id;
            // } else {
            //   setisBookmark(!isBookmark);
            // }

            // let stringifieddata = await JSON.stringify({ bookmark: verifiednewArray });
            // AsyncStorage.setItem('BookmarkID', stringifieddata);
            // console.log('STRIGIFIED', stringifieddata);
            // setBookmark(stringifieddata);
        } catch (err) {
            console.log('Error saving bookmark', err);
        }
    }

    useEffect(() => {
        checkBookmarkStatus();
console.log(BookmarkData);
    }, [isBookmakEmpty]);
    return (
        <ScrollView style={{ flexDirection: "column" }} contentContainerStyle={{ justifyContent: 'flex-start' }}>
            <BackgroundHeader navigation={navigation} />
            { isBookmakEmpty ?

                <TouchableOpacity>
                    <Text>
                        No Bookmark Set Currently
                 </Text>
                </TouchableOpacity>
                : <View
                    style={styles.container} >
                     
                    { 
                      BookmarkData.bookmark.length &&
                        BookmarkData.map(item => (
                            <View key={item.id} style={[styles.searchContentBox, styles.shadow]}>
                                <View style={styles.image}>
                                    <Image
                                        resizeMode="contain"
                                        source={require('../assets/images/cuboidal.png')}
                                        style={styles.imageStyle}
                                    />
                                </View>
                                <View style={styles.searchContent}>
                                    <Text style={styles.searchContentTitle}>{item.title}</Text>
                                    <Text style={styles.searchContentText} numberOfLines={2} >{item.introduction.content} </Text>
                                </View>
                                <TouchableOpacity onPress={() => removeBookmarkData({ id: item.id })} style={styles.bookmark}>
                                    <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                                </TouchableOpacity>
                            </View>
                        ))
                    } 

                </View>}

        </ScrollView>
    );
}

export default BookmarkScreen;

const styles = StyleSheet.create({
    container: {
        // paddingVertical: 10,
        // paddingHorizontal: 15,
        paddingVertical: heightPercentageToDP(1.23),
        paddingHorizontal: widthPercentageToDP(3.8)
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        // height: 45,
        // width: 45,
        borderRadius: 5,
        height: heightPercentageToDP(5.4),
        width: widthPercentageToDP(11)
    },
    searchContentBox: {
        // paddingHorizontal: 15,
        // paddingVertical: 19,
        flexDirection: 'row',
        // marginVertical: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 11,
        paddingHorizontal: widthPercentageToDP(3.8),
        paddingVertical: heightPercentageToDP(2.3),
        marginVertical: heightPercentageToDP(1.2)


    },
    searchContent: {
        flex: 1,
        // backgroundColor:'yellow',
        // marginLeft: 15,
        marginLeft: widthPercentageToDP(3.5)
    },
    searchContentTitle: {
        color: 'black',
        // fontSize: 18,
        fontFamily: 'Roboto-Bold',
        fontSize: widthPercentageToDP(4.3),
    },
    searchContentText: {
        // marginRight: 23,
        flex: 1,
        color: 'gray',
        // lineHeight: 17,
        textAlign: 'justify',
        // fontSize: 15,
        fontFamily: 'LiberationSerif-Regular',
        marginRight: widthPercentageToDP(6.5),
        lineHeight: heightPercentageToDP(2),
        fontSize: widthPercentageToDP(3.6),
    },
    bookmark: {
        position: 'absolute',
        top: 2,
        right: 10
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
    }
});