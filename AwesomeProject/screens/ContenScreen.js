import React, { useState ,useEffect} from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
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
            let isBookmarkValue;
            AsyncStorage.getItem('BookmarkID').then(value=>{
                console.log("here"+value);
                let asyncData = (value == null) ? JSON.stringify({bookmark:[0]}) :value;
                
                 setBookmark(asyncData);
                let AsyncBookmarkData =  JSON.parse(value).bookmark;
                AsyncBookmarkData.map(item=>{
   
                        if(item == data.id){
                         isBookmarkValue = true;
                            console.log("is bookmark");
                        
                        }else{
                           isBookmarkValue = false;
                        }
                    });
             setisBookmark(isBookmarkValue);
            });
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