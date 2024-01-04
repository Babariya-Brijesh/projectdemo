import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Data} from '../data/dummay';

const List = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.mainFlatListContainer}>
            <Image
              source={require('../assets/restrsunt.png')}
              style={styles.logo}
            />
            <View style={styles.nameView}>
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 3,
    paddingHorizontal: 20,
  },
  mainFlatListContainer: {
    marginRight: 10,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  logo: {
    height: 80,
    width: 125,
  },
  nameView: {
    backgroundColor: '#ffffff',
  },
  nameText: {
    paddingVertical: 9,
    fontSize: 17,
    marginLeft: 4,
    fontWeight: '800',
  },
});

export default List;
