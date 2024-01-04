import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SingleRoom = ({navigation, route}) => {
  const {data} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerLeft: () => (
        <View style={styles.headerMainView}>
          <TouchableOpacity
            style={styles.TouchableOpacityback}
            onPress={() => navigation.pop()}>
            <Ionicons
              name="chevron-back"
              color="#000000"
              size={27}
              style={styles.back}
            />
          </TouchableOpacity>
          <View style={styles.iconView}>
            <TouchableOpacity style={styles.TouchableOpacityShare}>
              <Ionicons
                name="share-outline"
                color="#000000"
                size={27}
                style={styles.share}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacitySearch}>
              <Ionicons
                name="heart-outline"
                color="#000000"
                size={27}
                style={styles.search}
              />
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  }, []);
  return (
    <View style={styles.main}>
      <ParallaxScrollView
        backgroundColor="#fffafa"
        parallaxHeaderHeight={300}
        stickyHeaderHeight={105}
        renderBackground={() => (
          <Image source={require('../assets/room3.png')} style={styles.logo} />
        )}
        renderStickyHeader={() => <View />}>
        <View style={styles.mainView}>
          <View style={styles.detailsTextView}>
            <Text style={styles.detailsTitle}>
              Mordern House with garden in populer East in Berlin
            </Text>
            <Text style={styles.detailsCity}>
              Private room in Berlin, Germany
            </Text>
            <Text style={styles.detailsInfo}>
              1 guests. 1 bedrooms. 1 bad. 1 bathroom
            </Text>
            <Text style={styles.detailsSatr}>
              <AntDesign
                name="star"
                color="#000000"
                size={20}
                style={styles.star}
              />
              4.9 . 10 reviews
            </Text>
          </View>
          <View style={styles.middleView}>
            <View style={styles.profile} />
            <View style={styles.hostTextView}>
              <Text style={styles.hostText}>Hosted by Matthias + Semmy</Text>
              <Text style={styles.hostDate}>Host since 2015-03-22</Text>
            </View>
          </View>
          <View style={styles.thirdView}>
            <Text style={styles.thirdText}>
              A hotel is a commercial establishment that provides lodging,
              meals, and other services to guests, travelers, and tourists.
              Hotels can range from small family-run businesses to large
              international chains. Most hotels list a variety of services, such
              as room service, laundry, and concierge.A hotel is a commercial
              establishment that provides lodging, meals, and other services to
              guests, travelers, and tourists. Hotels can range from small
              family-run businesses to large international chains. Most hotels
              list a variety of services, such as room service, laundry, and
              concierge.
            </Text>
          </View>
        </View>
      </ParallaxScrollView>
      <View style={styles.btnView}>
        <View style={styles.textView}>
          <Text style={styles.price}>{data.price}</Text>
          <Text style={styles.night}>night</Text>
        </View>
        <TouchableOpacity style={styles.searchTextView}>
          <Text style={styles.searchText}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleRoom;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f8f8ff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: '100%',
  },
  main: {
    // height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  headerMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
  },

  iconView: {
    flexDirection: 'row',
  },
  mainIconView: {
    flexDirection: 'row',
  },
  TouchableOpacityback: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#808080',
    padding: 7,
    borderRadius: 20,
  },
  TouchableOpacitySearch: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#808080',
    padding: 7,
    borderRadius: 20,
  },
  TouchableOpacityShare: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#808080',
    padding: 7,
    borderRadius: 20,
    marginRight: 20,
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
  btnView: {
    borderTopWidth: 0.2,
    borderTopColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 15,
  },
  searchTextView: {
    width: '40%',
    backgroundColor: '#dc143c',
    alignItems: 'center',
    paddingVertical: 13,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  detailsTitle: {
    fontSize: 27,
    fontWeight: '600',
    paddingRight: 15,
    letterSpacing: 0.5,
  },
  detailsCity: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
  },
  detailsInfo: {
    marginTop: 6,
    fontSize: 17,
    color: '#808080',
  },
  detailsSatr: {
    marginTop: 6,
    fontSize: 19,
    fontWeight: '500',
  },
  middleView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: '#808080',
    paddingVertical: 15,
  },
  profile: {
    backgroundColor: '#000000',
    height: 55,
    width: 55,
    borderRadius: 40,
  },
  hostTextView: {
    marginLeft: 20,
  },
  hostText: {
    fontSize: 17,
    fontWeight: '600',
  },
  hostDate: {
    fontSize: 15,
    fontWeight: '400',
    // color: '#808080',
  },
  thirdView: {
    marginTop: 20,
  },
  thirdText: {
    fontSize: 19,
    fontWeight: '300',
  },
});
