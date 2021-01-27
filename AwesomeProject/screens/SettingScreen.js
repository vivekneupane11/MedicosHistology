import React from 'react';
import {View , Text,ScrollView, StyleSheet} from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';

const SettingScreen = ({navigation})=>{
    return(
        <ScrollView>
            <BackgroundHeader navigation={()=>{navigation.navigate('Setting')}}/>
        <View style={styles.settingsContainer}>
            <Text>Settnf Screen</Text>

            </View>
        </ScrollView>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    settingsContainer:{
        flex:1,
        backgroundColor:'red'
    }
});