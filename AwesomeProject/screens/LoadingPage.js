import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
export default class LoadingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue', fontSize: 40}}>Learn Firebase</Text>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});