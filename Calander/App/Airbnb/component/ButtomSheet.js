import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {rooms} from '../data/dummy';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const limit = 10;
let load = true;

const ButtomSheet = ({navigation}) => {
  const [dataArray, setDataArray] = useState([]);
  const [showLoader, setshowLoader] = useState(false);

  const [skip, setSkip] = useState(0);
  const showRoom = data => {
    navigation.navigate('SingleRoom', {data});
  };
  const getAllData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/data?skip=${skip}&limit=${limit}`,
      );
      if (result?.data.length === 0) {
        load = false;
      }
      setDataArray([...dataArray, ...result.data]);
      setSkip(skip + 10);
      setTimeout(() => {
        setshowLoader(false);
      }, 3000);

      console.log('result======>', result.data);

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const Item = ({item}) => {
    // console.log('item====>', item);
    return (
      <TouchableOpacity
        style={styles.listMainView}
        onPress={() => showRoom(item)}>
        <View>
          <Image source={require('../assets/room3.png')} style={styles.logo} />
        </View>
        <View style={styles.middleView}>
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.rateView}>
            <Ionicons
              name="star"
              color="#000000"
              size={15}
              style={styles.star}
            />
            <Text>{item?.rate}</Text>
          </View>
        </View>
        <Text style={styles.types}>{item?.types}</Text>
        <View style={styles.textView}>
          <Text style={styles.price}>{item?.price}</Text>
          <Text style={styles.night}>night</Text>
        </View>
        <FontAwesome
          name="heart-o"
          color="#000000"
          size={22}
          style={styles.heart}
        />
      </TouchableOpacity>
    );
  };

  const onEndReached = () => {
    if (load) {
      getAllData();
      setshowLoader(true);
    }
  };
  const loader = useCallback(() => {
    return <ActivityIndicator size={'large'} style={styles.loader} />;
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.scrollView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataArray}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
          onEndReached={!showLoader && onEndReached}
          ListFooterComponent={showLoader && loader}
        />
      </View>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {dataArray?.map(item => {
          return (
            <TouchableOpacity
              style={styles.listMainView}
              onPress={() => showRoom(item)}>
              <View>
                <Image
                  source={require('../assets/room2.png')}
                  style={styles.logo}
                />
              </View>
              <View style={styles.middleView}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.rateView}>
                  <Ionicons
                    name="star"
                    color="#000000"
                    size={15}
                    style={styles.star}
                  />
                  <Text>{item.rate}</Text>
                </View>
              </View>
              <Text style={styles.types}>{item.types}</Text>
              <View style={styles.textView}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.night}>night</Text>
              </View>
              <FontAwesome
                name="heart-o"
                color="#000000"
                size={22}
                style={styles.heart}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default ButtomSheet;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
  },
  main: {
    marginTop: 20,
    marginBottom: 130,
  },
  listMainView: {
    marginBottom: 55,
  },
  logo: {
    height: 300,
    width: 350,
    borderRadius: 10,
  },
  middleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  star: {
    marginRight: 5,
  },
  types: {
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
    paddingVertical: 10,
  },
  textView: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
  },
  night: {
    fontSize: 16,
    fontWeight: '500',
    color: '#808080',
    marginLeft: 10,
  },
  heart: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  loader: {
    marginBottom: 100,
  },
});
