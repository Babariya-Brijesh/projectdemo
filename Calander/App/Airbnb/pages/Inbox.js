import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Inbox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Inbox</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Inbox;
