import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import ButtomSheet from '../component/ButtomSheet';

const Explore = ({navigation,route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ButtomSheet navigation={navigation} route={route}/>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
