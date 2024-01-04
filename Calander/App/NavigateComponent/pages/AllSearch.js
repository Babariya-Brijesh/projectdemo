import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {searchData} from '../data/dummay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AllSearch = ({navigation}) => {
  const showDetails = Data => {
    navigation.navigate('SearchDetails', {Data});
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        {searchData?.map(item => (
          <TouchableOpacity
            style={styles.mainContainer}
            onPress={() => showDetails(item)}>
            <View style={styles.Details}>
              <View style={styles.imgDiv}>
                <Image
                  source={require('../assets/photo2.png')}
                  style={styles.imag}
                />
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.cart}>10 cards</Text>
              </View>
            </View>

            <View>
              <MaterialIcons name="navigate-next" size={30} color="#a9a9a9" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default AllSearch;

const styles = StyleSheet.create({
  main: {
    flex: 1,

    gap: 3,
  },
  mainContainer: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 20,
  },
  Details: {
    flexDirection: 'row',
    gap: 10,
  },
  imgDiv: {},
  imag: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  title: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '500',
  },
  cart: {
    fontSize: 12,
    fontWeight: '300',
  },
});
