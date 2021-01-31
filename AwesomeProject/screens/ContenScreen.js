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


const ContentScreen = ({navigation,route}) => {
const [Bookmark  , setBookmark] = useState([]);
const [isBookmark,setisBookmark] = useState(false);
const {data} = route.params;


// const getBookmarkData = async ()=>{
//     try{
       
//         let  bookmarkData = await AsyncStorage.getItem('BookmarkID');
//         bookmarkData = (bookmarkData == null)?[]: await JSON.parse(bookmarkData);
//          let stringBookmarkData = JSON.stringify(bookmarkData);
//      return stringBookmarkData;
//     }
// catch(err){
//     console.log('Error getting Bookmark',err);
// }
//  }
 const saveBookmarkData = async ({id})=>{

try{
    // AsyncStorage.setItem(Bookmark,);
    let asyncData = await AsyncStorage.getItem('BookmarkID')
     asyncData = (asyncData == null) ? JSON.stringify({bookmark:[0]}) :asyncData;
await     JSON.parse(asyncData).bookmark.length

    let newArray =  await JSON.parse(asyncData).bookmark;
   let verifiednewArray = newArray.filter(item=>{
       return item != id;
    })
    if(newArray.length == verifiednewArray.length){
        let length = verifiednewArray.length ;
        verifiednewArray[length]= id;
       
    }else{
        setisBookmark(!isBookmark);
    }


    let stringifieddata = await JSON.stringify({bookmark:verifiednewArray})
 AsyncStorage.setItem('BookmarkID',stringifieddata );
 console.log("STRIGIFIED",stringifieddata);
  setBookmark(stringifieddata)

}
catch(err){
console.log("Error saving bookmark",err)
}
 }

        useEffect(()=>{
    
            AsyncStorage.getItem('BookmarkID').then(value=>{
                console.log("here"+value);
                let asyncData = (value == null) ? JSON.stringify({bookmark:[0]}) :value;
                
                 setBookmark(asyncData);
                let AsyncBookmarkData =  JSON.parse(asyncData).bookmark;
                AsyncBookmarkData.map(item=>{
   
                        if(item == data.id){
                            // console.log(item,data.id);
                            setisBookmark(true);
                            return;
               
                        
                        }
                    });
            
            });

            console.log("Is bookmark",isBookmark)
        },[Bookmark])
  

    React.useLayoutEffect(()=>{

        navigation.setOptions(
            {
                headerTitle:(props)=>(
                    <View style={{justifyContent:"space-between",flexDirection:'row',alignItems:'center'}}>
                    <Text {...props} style={{color:'white',fontSize:18,backgroundColor:colors.primary}}>Epithelial Tissue</Text>
                    <View style={{flexDirection:'row'}}>
                    <Icon style={{marginHorizontal:0}} name="edit" size={25} color="#fff" />
                  <TouchableOpacity onPress={()=>saveBookmarkData({id:data.id})}> 
                {isBookmark ?  <Icon style={{marginHorizontal:20}}  name= "bookmark-empty" size={24} color="#fff" />:  <Icon style={{marginHorizontal:20}}  name= "user" size={24} color="#fff" />}
                   </TouchableOpacity>
                        </View>
                    </View>
                ),
                headerStyle:{
                    backgroundColor:colors.primary
                },
                headerTintColor:'#fff'
            }
        );
    },[navigation,isBookmark])
    return (
        <ScrollView style={{
            backgroundColor: 'lightgrey',
        }}>
         
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
    color: '#156B9A',
  },
  contentSubTitleText: {
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    marginHorizontal: 12,
    fontFamily: 'Roboto-Bold',
    fontSize: 21,
    color: 'black',
  },
  subTitle: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    fontWeight: 'bold',
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
