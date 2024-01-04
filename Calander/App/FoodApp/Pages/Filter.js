import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {FoodCheckList} from '../data/dummay';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Filter = ({navigation}) => {
  const [showCleanBtn, setShowCleanBtn] = useState(false);

  const [indexArray, setIndexArray] = useState([...FoodCheckList()]);

  const checkLength = () => {
    const trueArray = [];
    indexArray?.forEach(ele => {
      if (ele.check) {
        trueArray.push(ele.check);
        setShowCleanBtn(true);
      }
    });
    if (trueArray.includes(true)) {
      setShowCleanBtn(true);
    } else {
      setShowCleanBtn(false);
    }
  };

  const clearAll = () => {
    setIndexArray([...FoodCheckList()]);
  };

  const flex = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      flex: flex.value,
    };
  });

  const onScroll = () => {
    flex.value = withTiming(showCleanBtn ? 1 : 0.9, {
      duration: 1000,
    });
  };

  useEffect(() => {
    checkLength();
  }, [indexArray]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.TouchableOpacityback}
          onPress={() => navigation.pop()}>
          <Entypo name="cross" color="#32cd32" size={27} style={styles.back} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listView}>
          <TouchableOpacity style={styles.iconMainTouch}>
            <View style={styles.iconMain}>
              <AntDesign
                name="arrowdown"
                color="#808080"
                size={24}
                style={styles.back}
              />
              <Text style={styles.iconText}>Sort</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward"
                color="#32cd32"
                size={24}
                style={styles.back}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconMainTouch}>
            <View style={styles.iconMain}>
              <Ionicons
                name="fast-food-outline"
                color="#808080"
                size={24}
                style={styles.back}
              />
              <Text style={styles.iconText}>Hygiene rating</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward"
                color="#32cd32"
                size={24}
                style={styles.back}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconMainTouch}>
            <View style={styles.iconMain}>
              <Ionicons
                name="pricetags-outline"
                color="#808080"
                size={24}
                style={styles.back}
              />
              <Text style={styles.iconText}>Offers</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward"
                color="#32cd32"
                size={24}
                style={styles.back}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconMainTouch}>
            <View style={styles.iconMain}>
              <Ionicons
                name="nutrition-outline"
                color="#808080"
                size={24}
                style={styles.back}
              />
              <Text style={styles.iconText}>Dietary</Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward"
                color="#32cd32"
                size={24}
                style={styles.back}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.listMainView}>
          <Text style={styles.Categories}>Categories</Text>
          <View style={styles.listViewFlat}>
            <FlatList
              data={indexArray}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View>
                  <View style={styles.listItemView}>
                    <Text style={styles.listViewText}>{item?.name}</Text>
                    <BouncyCheckbox
                      isChecked={indexArray[index]?.check}
                      disableBuiltInState
                      size={10}
                      fillColor="#32cd32"
                      unfillColor="#FFFFFF"
                      iconStyle={{borderColor: 'red', height: 25, width: 25}}
                      innerIconStyle={{borderWidth: 1, height: 25, width: 25}}
                      onPress={() => {
                        const newArray = [...indexArray];
                        newArray?.map((ele, i) => {
                          if (i === index && ele.check === true) {
                            newArray[i].check = false;
                            return;
                          }
                          if (i === index) {
                            newArray[i].check = true;
                          }
                        });

                        setIndexArray(newArray);
                        onScroll();

                        // if (selectedIndex.includes(index)) {
                        //   const filterIndexArray = selectedIndex.filter(
                        //     ele => ele?.index !== index,
                        //   );
                        //   setIndexArray(filterIndexArray);
                        // } else {
                        //   setSelectedIndex([
                        //     ...indexArray,index
                        //
                        //   ]);
                        // }
                      }}
                    />
                  </View>
                </View>
              )}
              // keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.bottomSubView}>
          {showCleanBtn && (
            <TouchableOpacity style={styles.ClearTouch} onPress={clearAll}>
              <Text style={styles.ClearText}>Clear all</Text>
            </TouchableOpacity>
          )}
          <Animated.View style={[animatedStyles, styles.bottomTouchView]}>
            <TouchableOpacity
              style={styles.bottomTouch}
              onPress={() => navigation.pop()}>
              <Text style={styles.bottomText}>Done</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  listView: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  iconMain: {
    flexDirection: 'row',

    alignItems: 'center',
    gap: 9,
  },
  iconMainTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d3d3d3',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '600',
  },
  listMainView: {
    marginTop: 25,
    paddingHorizontal: 21,
  },
  Categories: {
    fontSize: 21,
    fontWeight: '700',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
  },
  listViewFlat: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    marginBottom: 130,
  },
  listViewText: {
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 11,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 1,
    backgroundColor: '#fffafa',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  bottomTouch: {
    backgroundColor: '#32cd32',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 10,
  },
  bottomTouchView: {
    flex: 2,
  },
  bottomText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '700',
  },
  bottomSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
    padding: 16,
  },
  ClearTouch: {
    flex: 0.7,
    borderWidth: 1,
    borderColor: '#32cd32',
    paddingVertical: 19,
    borderRadius: 10,
    alignItems: 'center',
  },
});
