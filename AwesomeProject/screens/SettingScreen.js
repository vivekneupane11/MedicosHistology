import React from 'react';
import {View , Text,ScrollView, StyleSheet,Dimensions} from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';


const {width} = Dimensions.get("window");
const SettingScreen = ({navigation})=>{
    return(
        <ScrollView>
            <BackgroundHeader navigation={navigation}/>
        <View style={styles.settingsContainer}>
         <View style={styles.settingsSection}>
            <View>
                <Text>Font Size</Text>
            </View>
             </View>

            </View>
        </ScrollView>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    settingsContainer:{
        flex:1,
        backgroundColor: '#f1f1f1',
    },
    settingsSection:{
        margin:(width)/18 - 5,
        backgroundColor: '#f1f1f1',
        padding:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10,
borderRadius:15

    }
});