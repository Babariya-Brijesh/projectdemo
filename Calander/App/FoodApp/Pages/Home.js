import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import List from '../component/List';
import ListSection from '../component/ListSection';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <Header navigation={navigation} />
      <ScrollView>
        <List />
        <ListSection navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
