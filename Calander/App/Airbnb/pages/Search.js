import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import DatePicker from 'react-native-modern-datepicker';
import {places} from '../data/dummy';

const guestsGropus = [
  {
    name: 'Adults',
    text: 'Ages 13 or above',
    count: 0,
  },
  {
    name: 'Children',
    text: 'Ages 2-12',
    count: 0,
  },
  {
    name: 'Infants',
    text: 'Under 2',
    count: 0,
  },
  {
    name: 'Pets',
    text: 'Pets allowed',
    count: 0,
  },
];

const Search = ({navigation}) => {
  const [activeHeader, setactiveHeader] = useState(0);
  const [touchIndex, setTouchIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [arrayData, setArrayData] = useState([...guestsGropus]);
  const today = new Date().toISOString().substring(0, 10);
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const showHome = () => {
    navigation.navigate('Profile');
  };

  const add = index => {
    const newdata = [...arrayData];
    arrayData?.forEach((ele, i) => {
      if (index === i) {
        newdata[index].count = ele.count + 1;
      }
    });
    setArrayData(newdata);
  };

  const remove = index => {
    const newdata = [...arrayData];
    arrayData?.forEach((ele, i) => {
      if (index === i && ele.count > 0) {
        newdata[index].count = ele.count - 1;
      }
    });
    setArrayData(newdata);
  };

  const clear = () => {
    setactiveHeader(0);
    setTouchIndex(0);
  };
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={showHome}>
            <Entypo
              name="cross"
              color="#000000"
              size={30}
              style={styles.back}
            />
          </TouchableOpacity>
          <View style={styles.headerTextView}>
            <TouchableOpacity onPress={() => setactiveHeader(0)}>
              <Text
                style={
                  activeHeader === 0
                    ? styles.headerTextActive
                    : styles.headerText
                }>
                Stays
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setactiveHeader(1)}>
              <Text
                style={
                  activeHeader === 1
                    ? styles.headerTextActive
                    : styles.headerText
                }>
                Experience
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          {touchIndex !== 1 && (
            <TouchableOpacity
              style={styles.detailsView}
              onPress={() => setTouchIndex(1)}>
              <Text style={styles.detailsText1}>Where</Text>
              <Text style={styles.detailsText2}>I'am fixable</Text>
            </TouchableOpacity>
          )}
          {touchIndex === 1 && (
            <View style={styles.detailsSecondView}>
              <Text style={styles.detailsSecondText}>Where to?</Text>
              <View>
                <View style={styles.detailsSecondInput}>
                  <Feather name="search" size={20} color="#000000" />
                  <TextInput
                    style={styles.input}
                    placeholder="Search destination"
                  />
                </View>
                <View style={styles.listmainView}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {places?.map((item, i) => {
                      return (
                        <View style={styles.listScrollView}>
                          <TouchableOpacity onPress={() => setImgIndex(i)}>
                            <Image
                              source={item.img}
                              style={
                                imgIndex === i ? styles.logo1 : styles.logo
                              }
                            />
                          </TouchableOpacity>
                          <Text style={styles.listText}>{item.title}</Text>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            </View>
          )}
          {touchIndex !== 2 && (
            <TouchableOpacity
              style={styles.detailsView}
              onPress={() => setTouchIndex(2)}>
              <Text style={styles.detailsText1}>When</Text>
              <Text style={styles.detailsText2}>Any week</Text>
            </TouchableOpacity>
          )}
          {touchIndex === 2 && (
            <View style={styles.detailsSecondView}>
              <Text style={styles.detailsSecondText}>When's your trip?</Text>
              <View style={styles.dateView}>
                <DatePicker
                  options={{
                    defaultFont: 'mon',
                    headerFont: 'mon-sb',
                    mainColor: '#dc143c',
                    borderColor: 'transparent',
                  }}
                  current={today}
                  selected={today}
                  mode={'calendar'}
                />
              </View>
            </View>
          )}
          {touchIndex !== 3 && (
            <TouchableOpacity
              style={styles.detailsView}
              onPress={() => setTouchIndex(3)}>
              <Text style={styles.detailsText1}>Who</Text>
              <Text style={styles.detailsText2}>Add guests</Text>
            </TouchableOpacity>
          )}
          {touchIndex === 3 && (
            <View style={styles.detailsSecondView}>
              <Text style={styles.detailsSecondText}>Who's coming?</Text>
              <View style={styles.countMainView}>
                {arrayData?.map((item, i) => {
                  return (
                    <View style={styles.countView}>
                      <View>
                        <Text style={styles.whoNameText}>{item?.name}</Text>
                        <Text style={styles.whoAgeText}>{item?.text}</Text>
                      </View>
                      <View style={styles.iconView}>
                        <TouchableOpacity onPress={() => remove(i)}>
                          <Ionicons
                            name="remove-circle-outline"
                            color="#d3d3d3"
                            size={26}
                            style={styles.remove}
                          />
                        </TouchableOpacity>
                        <Text style={styles.countText}>{item?.count}</Text>
                        <TouchableOpacity onPress={() => add(i)}>
                          <Ionicons
                            name="add-circle-outline"
                            color="#808080"
                            size={26}
                            style={styles.add}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={clear}>
          <Text style={styles.clearText}>Clear all</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.searchBtnView}>
            <Feather
              name="search"
              size={23}
              color="#ffffff"
              style={styles.logoSearch}
            />
            <Text style={styles.searchText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    height: '90%',
    paddingHorizontal: 15,
    // justifyContent: 'space-between',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextView: {
    width: '72%',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#808080',
    marginLeft: 10,
  },
  headerTextActive: {
    fontSize: 21,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  back: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },
  btnView: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // left: 0,
    height: '15%',
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingBottom: 30,
    // paddingVertical: 20,
  },
  searchBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dc143c',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  clearText: {
    fontSize: 21,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  logoSearch: {
    marginRight: 20,
  },
  searchText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
  detailsContainer: {
    // height: '35%',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  detailsView: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  detailsText1: {
    fontSize: 18,
    fontWeight: '600',
    color: '#808080',
  },
  detailsText2: {
    fontSize: 17,
    fontWeight: '600',
  },
  detailsSecondView: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  detailsSecondText: {
    fontSize: 25,
    fontWeight: '600',
  },
  detailsSecondInput: {
    marginTop: 35,
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0.5,
    paddingVertical: 15,
    borderRadius: 10,
    paddingLeft: 15,
  },
  input: {
    marginLeft: 30,
  },
  listmainView: {
    marginTop: 35,
  },
  logo: {
    height: 130,
    width: 130,
    borderRadius: 10,
    // borderWidth: 1,
  },
  logo1: {
    height: 130,
    width: 130,
    borderRadius: 10,
    borderWidth: 1,
  },
  listScrollView: {
    marginRight: 20,
  },
  listText: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: '300',
  },
  dateView: {
    marginTop: 20,
  },
  countMainView: {
    marginTop: 25,
  },
  countView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    paddingBottom: 15,
    marginTop: 17,
  },
  iconView: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countText: {
    fontSize: 17,
  },
  whoNameText: {
    fontSize: 17,
    fontWeight: '700',
  },
  whoAgeText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#808080',
  },
});
