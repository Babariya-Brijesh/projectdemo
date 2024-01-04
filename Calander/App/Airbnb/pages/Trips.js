import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Trips = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Trips</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Trips;
