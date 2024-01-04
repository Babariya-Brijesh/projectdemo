import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const WatchList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>WatchList</Text>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WatchList;
