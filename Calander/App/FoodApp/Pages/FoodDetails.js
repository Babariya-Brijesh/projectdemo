import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DataFood, DataMealList} from '../data/dummay';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

const FoodDetails = ({navigation, route}) => {
  const {Data} = route.params;
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const opacity = useSharedValue(0);

  const cartArray = useSelector(state => state?.places?.cartArray);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const totalCountFun = () => {
    const total = cartArray.reduce((total, num) => {
      return total + num?.price;
    }, 0);
    setTotalCount(total);
  };

  useEffect(() => {
    totalCountFun();
  }, [cartArray?.length]);

  const showSingleFood = Data => {
    navigation.navigate('SingleFoodDetails', {Data});
  };
  const showBasket = total => {
    navigation.navigate('Basket', {total, Data});
  };
  const backHome = () => {
    navigation.navigate('Home');
  };

  const activeIndexFun = index => {
    setActiveIndex(index);
  };

  const onScroll = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y > 350) {
      opacity.value = withTiming(1);
    } else {
      opacity.value = withTiming(0);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.TouchableOpacityback}
          onPress={() => navigation.pop()}>
          <Ionicons
            name="arrow-back"
            color="#32cd32"
            size={27}
            style={styles.back}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.iconView}>
          <TouchableOpacity style={styles.TouchableOpacityback}>
            <Ionicons
              name="share-outline"
              color="#32cd32"
              size={27}
              style={styles.back}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacityback}>
            <Ionicons
              name="search-outline"
              color="#32cd32"
              size={27}
              style={styles.back}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <>
      <ParallaxScrollView
        backgroundColor="#fffafa"
        parallaxHeaderHeight={250}
        stickyHeaderHeight={130}
        scrollEvent={onScroll}
        renderBackground={() => (
          <Image source={require('../assets/dishes.png')} style={styles.logo} />
        )}
        renderStickyHeader={() => (
          <View style={styles.mainIconView}>
            <View style={styles.iconView}>
              <TouchableOpacity
                style={styles.TouchableOpacityback}
                onPress={() => navigation.pop()}>
                <Ionicons
                  name="arrow-back"
                  color="#32cd32"
                  size={27}
                  style={styles.back}
                />
              </TouchableOpacity>
              <View style={styles.headerNameView}>
                <Text style={styles.headerNameText}>{Data?.name}</Text>
              </View>
            </View>
            <View style={styles.iconView}>
              <TouchableOpacity style={styles.TouchableOpacityback}>
                <Ionicons
                  name="share-outline"
                  color="#32cd32"
                  size={27}
                  style={styles.back}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableOpacityback}>
                <Ionicons
                  name="search-outline"
                  color="#32cd32"
                  size={27}
                  style={styles.back}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}>
        <View>
          <View style={styles.TextView}>
            <Text style={styles.name}>{Data?.name}</Text>
            <Text style={styles.text1}>
              10-20 min . Dal makhani . Vegetable korma . potato curry . paneer
              butter masala with butter naan.
            </Text>
            <Text style={styles.text2}>
              Wondering what to cook for lunch or dinner? This collection will
              come in handy to plan your next vegetarian meal. This post covers
              20 most popular .
            </Text>
          </View>
        </View>
        <View>
          <SectionList
            contentContainerStyle={styles.list}
            showsHorizontalScrollIndicator={false}
            sections={DataFood}
            renderSectionHeader={({section}) => {
              return (
                <View style={styles.ViewDiv}>
                  <Text style={styles.header}>{section.title}</Text>
                </View>
              );
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.mealDiv}
                  onPress={() => showSingleFood(item)}>
                  <View style={styles.mealDetails}>
                    <Text style={styles.nameMeal}>{item.name}</Text>
                    <Text style={styles.des}>{item.des}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>

                  <View style={styles.logoView}>
                    <Image
                      source={require('../assets/dishes.png')}
                      style={styles.logo2}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ParallaxScrollView>
      <Animated.View style={[styles.stikyListView, animatedStyles]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DataMealList.map((item, i) => (
            <View style={styles.stikyListSubView}>
              <TouchableOpacity
                style={
                  activeIndex === i
                    ? styles.AstikyListTouch
                    : styles.stikyListTouch
                }
                onPress={() => activeIndexFun(i)}>
                <Text
                  style={
                    activeIndex === i
                      ? styles.activeStikyListText
                      : styles.stikyListText
                  }>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
      {cartArray.length ? (
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.bottomTouch}
            onPress={() => showBasket(totalCount)}>
            <View style={styles.bottomBtnView}>
              <Text style={styles.lengthText}>{cartArray.length}</Text>
              <Text style={styles.bottomText}>View Basket</Text>
              <Text style={styles.bottomText}>${totalCount}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  logo2: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  logo: {
    height: 240,
    width: 450,
  },
  TextView: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
  },
  text1: {
    fontSize: 16,
    fontWeight: '300',
    color: '#808080',
    marginTop: 25,
  },
  text2: {
    fontSize: 16,
    fontWeight: '300',
    color: '#808080',
    marginTop: 25,
  },
  TouchableOpacityback: {
    backgroundColor: '#fffafa',
    borderRadius: 20,
  },
  back: {
    padding: 7,
  },
  iconView: {
    flexDirection: 'row',
    gap: 12,
  },
  mainIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 60,
  },
  mealDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
  },
  ViewDiv: {
    paddingHorizontal: 17,
    fontSize: 16,
    fontWeight: '300',
    marginTop: 25,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000000',
  },
  mealDetails: {
    gap: 7,
  },
  nameMeal: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  des: {
    width: 250,
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
  },
  headerNameView: {
    justifyContent: 'center',
  },
  headerNameText: {
    fontSize: 20,
    fontWeight: '600',
  },
  stikyListView: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,

    position: 'absolute',
    top: 117,
    right: 0,
    left: 0,
  },
  stikyListTouch: {
    paddingHorizontal: 10,
  },
  AstikyListTouch: {
    backgroundColor: '#32cd32',
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  stikyListSubView: {
    marginHorizontal: 10,
    borderRadius: 20,
  },
  stikyListText: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: '#32cd32',
    fontSize: 17,
    fontWeight: '300',
  },
  activeStikyListText: {
    paddingHorizontal: 3,
    paddingVertical: 5,

    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '700',
  },
  bottomView: {
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
  bottomBtnView: {
    alignItems: 'center',

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lengthText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#7fffd4',
  },
});

export default FoodDetails;
