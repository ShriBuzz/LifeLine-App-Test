import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Map() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Map;