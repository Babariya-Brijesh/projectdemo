import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DataSection} from '../data/dummay';

const ListSection = ({navigation}) => {
  console.log('navigation===>', navigation);
  const showDetails = Data => {
    navigation.navigate('FoodDetails', {Data});
  };
  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.FlatListmian}
        onPress={() => showDetails(item)}>
        <View>
          <Image source={require('../assets/dishes.png')} style={styles.logo} />
        </View>

        <View style={styles.detailsMainView}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.sellDestance}>
            <Text style={styles.sell}>{item.sell}</Text>
            <Text style={styles.destance}>{item.destance}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mian}>
      <SectionList
        contentContainerStyle={styles.list}
        sections={DataSection}
        renderSectionHeader={({section}) => {
          return (
            <View style={styles.ViewDiv}>
              <Text style={styles.header}>{section.title}</Text>
              <FlatList
                data={section.data}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item}) => <RenderItem item={item} />}
              />
            </View>
          );
        }}
        renderItem={({item, section}) => {
          return null;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mian: {
    paddingHorizontal: 20,
  },
  FlatListmian: {
    marginTop: 20,
    marginRight: 10,
    backgroundColor: '#ffffff',
  },
  ViewDiv: {
    marginTop: 25,
  },
  logo: {
    height: 165,
    width: 290,
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
  },
  detailsMainView: {
    paddingVertical: 17,
    paddingLeft: 10,
  },
  name: {
    fontSize: 19,
    fontWeight: '800',
  },
  sellDestance: {
    marginTop: 6,
  },
  sell: {
    fontSize: 15,
    fontWeight: '400',
    color: '#008000',
  },
  destance: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
  },
});

export default ListSection;
