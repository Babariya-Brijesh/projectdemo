import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {searchData} from '../data/dummay';

const Profile = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.heading}>{searchData.length} Sessions</Text>
      </View>
      <View style={styles.titleDate}>
        {searchData?.map(item => (
          <TouchableOpacity style={styles.mainContainer}>
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <View>
                <Text style={styles.Score}> Score: 66.67, 2023-12-11</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
    color: '#000000',
    paddingVertical: 45,
    paddingLeft: 115,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingRight: 220,
  },
  Score: {
    fontSize: 13,
    fontWeight: '300',
  },
  titleDate: {
    gap: 4,
    justifyContent: 'flex-start',
  },
});
