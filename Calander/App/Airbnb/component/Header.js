import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const categories = [
  {
    name: 'Tiny homes',
    icon: 'home',
  },
  {
    name: 'Cabins',
    icon: 'house-siding',
  },
  {
    name: 'Trending',
    icon: 'local-fire-department',
  },
  {
    name: 'Play',
    icon: 'videogame-asset',
  },
  {
    name: 'City',
    icon: 'apartment',
  },
  {
    name: 'Beachfront',
    icon: 'beach-access',
  },
  {
    name: 'Countryside',
    icon: 'nature-people',
  },
];

const Header = ({navigation, route}) => {
  const [changeIcon, setchangeIcon] = useState(false);
  const [index, setIndex] = useState(0);
  const changeIndex = i => {
    setIndex(i);
  };
  
  const showSearch = ()=>{
    navigation.navigate('Search')
  }

  return (
    <View style={styles.Container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchDetails} onPress={showSearch}>
          <View>
            <Feather name="search" size={25} color="#000000" />
          </View>
          <View style={styles.textView}>
            <Text style={styles.searchText1}>Where to?</Text>
            <Text style={styles.searchText2}>Anywhere. Any week</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.searchFilter}>
          <Ionicons name="options-outline" size={25} color="#000000" />
        </View>
      </View>
      <View style={styles.optionContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories?.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  changeIndex(i);
                }}>
                <View
                  style={
                    index === i ? styles.optionViewActive : styles.optionView
                  }>
                  {
                    <MaterialIcons
                      name={item.icon}
                      size={30}
                      color={index === i ? '#000000' : '#808080'}
                    />
                  }

                  <Text
                    style={
                      index === i ? styles.optionNameActive : styles.optionName
                    }>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    width: '100%',
    marginTop: 10,
  },
  searchDetails: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '82%',
    paddingLeft: 15,
    paddingVertical: 15,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: '#000000',
  },
  textView: {
    marginLeft: 10,
  },
  searchText1: {
    fontSize: 18,
    fontWeight: '500',
  },
  searchText2: {
    fontSize: 17,
    fontWeight: '400',
    color: '#808080',
  },
  searchFilter: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    alignItems: 'center',
    width: '15%',
    borderRadius: 50,
    borderWidth: 0.7,
  },
  optionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
  },
  optionViewActive: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    paddingBottom: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: 2.5,
  },
  optionName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#808080',
  },
  optionNameActive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});
