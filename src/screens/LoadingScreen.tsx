import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subContainer}>Loading.....</Text>
      <ActivityIndicator color={"#0000ff"} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    backgroundColor: '#fafafa'
  },
  subContainer: { 
    fontSize: 20, 
    color: '#000000' }
});

export default LoadingScreen;
