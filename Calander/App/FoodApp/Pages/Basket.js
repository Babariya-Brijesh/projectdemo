import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../redux/action/cartAction';

const Basket = ({navigation, route}) => {
  const [fixArray, setfixArray] = useState([]);
  const [secondDiv, setSecondDiv] = useState(false);
  const {total, Data} = route.params;
  const cartArray = useSelector(state => state?.places?.cartArray);
  const dispatch = useDispatch();

  const fixArrayFun = () => {
    var count = {};
    cartArray?.forEach(function (i) {
      // console.log('item======>', i);
      count[i?.name] = (count[i?.name] || 0) + 1;
    });

    var result = Object.keys(count).map(key => [
      {name: key, total: count[key]},
    ]);

    setfixArray([...result]);
  };

  const changeDiv = () => {
    setSecondDiv(true);
  };
  const backFoodDetails = () => {
    navigation.navigate('Home');
    dispatch(clearCart());
  };

  console.log('count=====>', fixArray);

  useEffect(() => {
    fixArrayFun();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.TouchableOpacityback}
          onPress={() => {
            navigation.pop();
          }}>
          <Ionicons
            name="arrow-back"
            color="#32cd32"
            size={27}
            style={styles.back}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <>
      {secondDiv ? (
        <View style={styles.firstView}>
          <Text style={styles.firstHeaderText}>Thank you For your order</Text>
          <View>
            <TouchableOpacity
              style={styles.firstBottomTouch}
              onPress={()=>backFoodDetails()}>
              <Text style={styles.bottomText}>New Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <View>
            <Text style={styles.headerText}>Items</Text>
          </View>
          <View>
            <View style={styles.secondMainView}>
              <View style={styles.mapMainView}>
                {fixArray?.map((item, i) => {
                  return (
                    <View style={styles.mapView}>
                      <Text style={styles.mapX}>{item[0]?.total}x</Text>
                      <Text style={styles.mapName}>{item[0]?.name}</Text>
                      <Text style={styles.total}>${total}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={styles.textView}>
                <View style={styles.TextView}>
                  <Text style={styles.tital}>Subtotal</Text>

                  <Text style={styles.total}>${total}</Text>
                </View>
                <View style={styles.TextView}>
                  <Text style={styles.tital}>Service fee</Text>

                  <Text style={styles.total}>$2.99</Text>
                </View>
                <View style={styles.TextView}>
                  <Text style={styles.tital}>Delivery fee</Text>

                  <Text style={styles.total}>$5.99</Text>
                </View>
                <View style={styles.TextView}>
                  <Text style={styles.tital}>Order total</Text>

                  <Text style={styles.total2}>${total + 9}.88</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={styles.bottomTouch}
              onPress={() => {
                changeDiv();
              }}>
              <Text style={styles.bottomText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default Basket;

const styles = StyleSheet.create({
  firstView: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstHeaderText: {
    fontSize: 25,
    fontWeight: '700',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '700',
    paddingVertical: 20,
    paddingLeft: 20,
  },
  secondMainView: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  mapMainView: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#d3d3d3',
  },
  mapView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    alignItems: 'center',
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  mapX: {
    fontSize: 20,
    fontWeight: '500',
    color: '#32cd32',
  },
  mapName: {
    fontSize: 18,
    fontWeight: '500',
  },
  total: {
    fontSize: 18,
    fontWeight: '400',
  },
  total2: {
    fontSize: 20,
    fontWeight: '800',
  },
  tital: {
    fontSize: 20,
    fontWeight: '400',
    color: '#808080',
  },
  textView: {
    paddingVertical: 10,
  },
  bottomText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '700',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fffafa',
    height: 120,
  },
  bottomTouch: {
    backgroundColor: '#32cd32',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  firstBottomTouch: {
    width: '100%',
    backgroundColor: '#32cd32',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 80,
    marginTop: 20,
    borderRadius: 10,
  },
});
