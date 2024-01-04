import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../redux/action/cartAction';

const SingleFoodDetails = ({navigation, route}) => {
  // const [cartData, setcartData] = useState([]);
  const {Data} = route.params;
  // const cartArray = useSelector(state => state?.places?.cartArray);


  const dispatch = useDispatch();

  const sendDataFood = () => {
    // cartArray.forEach((item,i)=>{
    //   if(item.name === Data.name){

    //   }
    // })
    dispatch(addCart({name: Data?.name, price: Number(Data?.price)}));
    navigation.navigate('FoodDetails', {Data});
  };

  return (
    <View style={styles.main}>
      <View>
        <Image style={styles.image} source={require('../assets/dishes.png')} />
        <TouchableOpacity
          style={styles.TouchableOpacityback}
          onPress={() => navigation.pop()}>
          <Entypo name="cross" color="#32cd32" size={30} style={styles.back} />
        </TouchableOpacity>
        <View style={styles.TextsView}>
          <Text style={styles.line}>{Data.name}</Text>
          <Text style={styles.des}>{Data.des}</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomTouch} onPress={sendDataFood}>
          <Text style={styles.bottomText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    height: '55%',
  },
  TouchableOpacityback: {
    position: 'absolute',
    top: 10,
    left: 20,
    backgroundColor: '#ffffff',
    width: '11.5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  back: {
    padding: 8,
  },
  TextsView: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  line: {
    fontSize: 27,
    fontWeight: '700',
  },
  des: {
    fontSize: 18,
    fontWeight: '300',
    color: '808080',
    marginTop: 10,
  },
  bottomText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '700',
  },
  bottomView: {
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: '#fffafa',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  bottomTouch: {
    backgroundColor: '#32cd32',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 150,
    marginBottom: 25,
    borderRadius: 10,
  },
});

export default SingleFoodDetails;
