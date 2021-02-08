import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../src/utils/responsive';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
const InputTextField = (props) => {
  return (
    <View style={props.style}>
      {/* <Text style={styles.inputTitle}>{props.title}</Text> */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          style={{paddingHorizontal: 7}}
          name={props.iconname}
          size={widthPercentageToDP(4.5)}
          color="#ABB4BD"
        />
        <TextInput
          placeholderTextColor={'#ABB4BD'}
          placeholder={props.placeholderText}
          secureTextEntry={props.isSecure}
          style={styles.input}
          onChangeText={props.onChangeText}
        />
      </View>
      <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  // inputTitle: {
  //     color: "#ABB4BD",
  //     fontSize: 15
  // },
  input: {
    paddingVertical: heightPercentageToDP(1),
    color: '#fff',
    fontSize: widthPercentageToDP(3.5),
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    width: widthPercentageToDP(40),
  },
});

export default InputTextField;
