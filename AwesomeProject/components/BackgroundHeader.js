import React from 'react'
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
import {colors} from '../constants/theme';
const Icon = createIconSetFromFontello(fontelloConfig);

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default function BackgroundHeader({navigation}) {
    return (
        <ScrollView>
        <View>
          <View  style={styles.headercontainer}>
  <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
       <Icon style={{paddingHorizontal:15}}  name="menu-1" size={28} color={colors.white} />
   </TouchableOpacity>
              <Text style={styles.headerText}>
                  Medicos Histology
              </Text>
              <TouchableOpacity>
              <Icon style={{paddingHorizontal:15}} name="bookmark-empty" size={24} color={colors.white} />
              </TouchableOpacity>
              </View>
          <View style={styles.headerTabs}>
              <View style={styles.headertabiconContainer}>
               <TouchableOpacity>  
                   <View style={styles.headertabiconGroup}>
                <Icon style={{paddingVertical:2}} name="home-outline" size={24} color={colors.gray} />
               <Text style={{color:colors.gray,fontSize:10}}>Home</Text>
                </View>
                </TouchableOpacity>
               <TouchableOpacity> 
                    <View style={styles.headertabiconGroup}>
                <Icon style={{paddingVertical:2}} name="bookmark-empty" size={24} color={colors.gray} />
               <Text style={{color:colors.gray,fontSize:10}}>Bookmark</Text>
                </View>
                </TouchableOpacity>
               <TouchableOpacity> 
                    <View style={styles.headertabiconGroup}>
                <Icon style={{paddingVertical:2}} name="sticky-note-o" size={24} color={colors.gray} />
               <Text style={{color:colors.gray,fontSize:10}}>Notes</Text>
                </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={()=>{navigation.navigate('Search')}}>  
                   <View style={styles.headertabiconGroup}>
                <Icon style={{paddingVertical:2}} name="search" size={24} color={colors.gray} />
               <Text style={{color:colors.gray,fontSize:10}}>Search</Text>
                </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
                     <View style={styles.headertabiconGroup}>
                <Icon style={{paddingVertical:2}} name="cog" size={24} color={colors.gray} />
               <Text style={{color:colors.gray,fontSize:10}}>Settings</Text>
                </View>
                </TouchableOpacity>

              </View>
                 </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headercontainer:{
        height:(W)/7,
        backgroundColor:colors.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        shadowColor: "rgba(255, 22, 84, 0.5)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
     
    },
    headerText:{
        fontSize:20,
        color:colors.white
    },
    headerTabs:{
        backgroundColor:colors.primary,
        height: (W)/5.5,
        borderBottomLeftRadius:(W)/10,
        borderBottomRightRadius:(W)/10
    },
    headertabiconContainer:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around',
       paddingHorizontal:(W)/18,
       paddingTop:10
    },

headertabiconGroup:{
    paddingVertical:5,
    justifyContent:'flex-end',
    alignItems:'center'
}
})
