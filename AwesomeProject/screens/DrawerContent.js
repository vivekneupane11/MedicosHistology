import React from 'react';
import {View , Text , StyleSheet , Dimensions} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {colors} from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';


const Icon = createIconSetFromFontello(fontelloConfig);

const DrawerContent =(props)=>{
    return(
        <View style={styles.container}>

            <View  style={styles.drawerTop}>
            
            </View>
          
            <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
            <View style={styles.drawerLinks}>
                <Icon style={{paddingVertical:2,paddingHorizontal:6 ,fontWeight:'bold'}} name="home-outline" size={18} color={colors.gray} />
                 <Text style={styles.drawerLink}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.drawerLinks}>
                <Icon style={{paddingVertical:2,paddingHorizontal:6}} name="bookmark-empty" size={18} color={colors.gray} />
                 <Text style={styles.drawerLink}>Bookmarks</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.drawerLinks}>
                <Icon style={{paddingVertical:2,paddingHorizontal:6}} name="sticky-note-o" size={18} color={colors.gray} />
                 <Text style={styles.drawerLink}>Notes</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.drawerLinks}>
                <Icon style={{paddingVertical:2,paddingHorizontal:6}} name="info-circled-alt" size={18} color={colors.gray} />
                 <Text style={styles.drawerLink}>Invite More friends</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.drawerLinks}>
                <Icon style={{paddingVertical:2,paddingHorizontal:6}} name="star-empty" size={18} color={colors.gray} />
                 <Text style={styles.drawerLink}>Rate App</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.drawerLinks}>
                <Icon style={{paddingVertical:2,paddingHorizontal:6}} name="globe" size={18} color={colors.gray} />
                 <Text style={styles.drawerLink}>Join Our Community</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.drawerLinks}>
                <Icon style={{paddingVertical:2,paddingHorizontal:6}} name="award" size={22} color={colors.gray} />
                 <Text style={styles.drawerLink}>Premium Contents</Text>
                </View>
            </TouchableOpacity>
              
        

            <TouchableOpacity style={{marginTop:5}}>
            <View style={[styles.drawerLinks,styles.drawerLinkBottom]}>
                <Icon style={{paddingVertical:1,paddingHorizontal:6}} name="logout" size={18} color={colors.gray} />
                 <Text style={styles.drawerLink}>Sign Out</Text>
                </View>
            </TouchableOpacity>
         


        </View>
    );
}


export default DrawerContent;

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'column',
    },
    drawerTop:{
        paddingVertical:10,
        height:(W)/2,
        backgroundColor:colors.primary,
        borderBottomRightRadius:(W)/7
    },
    drawerLinks:{
        paddingVertical:20,
        paddingHorizontal:15,
        flexDirection:'row',
       
        alignItems:'center',
        borderColor:'lightgray',
       borderBottomWidth:StyleSheet.hairlineWidth,
    
    },
    drawerLinkBottom:{
        borderBottomWidth:1
    },
    drawerLink:{
        fontSize:14,
        fontWeight:'600',
        color:colors.gray
    }
});