import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={ style.container }>
      <Text style={ style.title }>Box Object Model</Text>
    </View>
  )
}

export default BoxObjectModelScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    paddingVertical: 50,
    paddingHorizontal: 50,
    marginHorizontal: 20,
    fontSize: 20,
    /* width: 150, */
    borderWidth: 10
  }
});


