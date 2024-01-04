import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchDetails = ({navigation, route}) => {
  const {Data} = route.params;
  return (
    <>
      <View style={styles.backBtn}>
        <TouchableOpacity
          style={styles.TouchableOpacitybackBtn}
          onPress={() => navigation.pop()}>
          <Ionicons name="close-outline" size={24} color="#ffff" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.details}>
          <Text style={styles.title}>{Data?.title}</Text>
          <Text>10 cards</Text>
          <View style={styles.imgDiv}>
            <Image
              source={require('../assets/photo2.png')}
              style={styles.imag}
            />
          </View>
          <Text style={styles.des}>{Data?.des}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.FavoritesBtn}>
            <Text style={styles.Btn}>Add to Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SearchDetails;

const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: '#6a5acd',
    height: 50,
  },
  TouchableOpacitybackBtn: {
    marginLeft: 10,
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  details: {
    padding: 10,
    gap: 6,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
  },
  imag: {
    height: 400,
    width: 370,
  },
  des: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '300',
  },
  FavoritesBtn: {
    marginTop: 80,
    backgroundColor: '#6a5acd',
    paddingHorizontal: 90,
    paddingVertical: 13,
    borderRadius: 5,
  },
  Btn: {
    color: '#ffff',
    fontSize: 17,
    fontWeight: '500',
  },
});
