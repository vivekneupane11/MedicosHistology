import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
const InputTextField = (props)=>  {

        return (
            <View style={props.style}>
                {/* <Text style={styles.inputTitle}>{props.title}</Text> */}
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon style={{paddingHorizontal:7}} name="user" size={18} color="#ABB4BD" />
                <TextInput 
                placeholderTextColor={'#ABB4BD'}
                    placeholder={props.placeholderText}
                    secureTextEntry={props.isSecure}
                    style={styles.input}
                />
                </View>
                <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 1 }} />
            </View>
        );
    
}

const styles = StyleSheet.create({
    inputTitle: {
        color: "#ABB4BD",
        fontSize: 15
    },
    input: {
        paddingVertical: 10,
        color: "#fff",
        fontSize: 14,
        fontWeight:'bold',
        fontFamily: "Avenir Next",
   
    }
});


export default InputTextField;