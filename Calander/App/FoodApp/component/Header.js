import React, {useRef, useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}) => {
  const [open, setOpen] = useState(false);

  const showFilter = Data => {
    navigation.navigate('Filter');
  };

  const showMap = Data => {
    navigation.navigate('Map');
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.mainHeaderView}>
          <View style={styles.appLogo}>
            <View>
              <TouchableOpacity onPress={openModal}>
                <Image
                  source={require('../assets/deliveryLogo.png')}
                  style={styles.logo}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={openModal}>
                <View style={styles.DeliveryTextView}>
                  <Text style={styles.DeliveryText}>Delivery . Now</Text>
                  <View style={styles.cityView}>
                    <Text style={styles.cityText}>Landon</Text>
                    <AntDesign
                      name="down"
                      color="#32cd32"
                      size={18}
                      style={styles.down}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userLogoView}>
            <TouchableOpacity style={styles.userLogoTouch}>
              <Ionicons
                name="person-outline"
                size={24}
                color="#32cd32"
                style={styles.user}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchView}>
          <View style={styles.searchinput}>
            <AntDesign
              name="search1"
              color="#808080"
              size={18}
              style={styles.down}
            />

            <TextInput
              style={styles.input}
              placeholder="Restaurants grocerics dishes"
              keyboardType="string"
            />
          </View>
          <TouchableOpacity onPress={showFilter}>
            <Ionicons
              name="options-outline"
              size={24}
              color="#32cd32"
              style={styles.outline}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <ButtomSheet/> */}
      <View style={styles.modalMainView}>
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.modalSubMainView}>
            <View style={styles.modalTouchView}>
              <TouchableOpacity style={styles.modalTouch} onPress={closeModal}>
                <Text />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContainView}>
              <View style={styles.modalHeader}>
                <TouchableOpacity style={styles.modalHeaderTouch}>
                  <Text style={styles.modalHeaderText}>Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalHeaderTouch}>
                  <Text style={styles.modalHeaderText}>Pickup</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalSecondView}>
                <Text style={styles.modalSecondText}>Your Location</Text>
                <TouchableOpacity
                  style={styles.iconMainTouch}
                  onPress={showMap}>
                  <View style={styles.iconMain}>
                    <EvilIcons
                      name="location"
                      color="#808080"
                      size={30}
                      style={styles.back}
                    />
                    <Text style={styles.iconText}>Current location</Text>
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
                <Text style={styles.modalSecondText}>Arrival Time</Text>
                <TouchableOpacity style={styles.iconMainTouch}>
                  <View style={styles.iconMain}>
                    <MaterialCommunityIcons
                      name="clock-time-eleven-outline"
                      color="#808080"
                      size={24}
                      style={styles.back}
                    />
                    <Text style={styles.iconText}>Now</Text>
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

              <View style={styles.ModaConfirmView}>
                <TouchableOpacity style={styles.ModaConfirmTouch}>
                  <Text style={styles.ModaConfirmText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    paddingHorizontal: 14,
    gap: 10,
    backgroundColor: '#ffff',
    paddingVertical: 19,
  },
  mainHeaderView: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appLogo: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 60,
  },
  cityView: {
    flexDirection: 'row',
    gap: 3,
  },
  DeliveryTextView: {
    gap: 2,
  },
  DeliveryText: {
    color: '#808080',
    fontSize: 16,
    fontWeight: '400',
  },
  cityText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '800',
  },
  down: {
    marginTop: 3,
  },
  userLogoView: {},
  userLogoTouch: {
    backgroundColor: '#f8f8ff',
    borderRadius: 20,
  },
  user: {
    padding: 9,
  },
  input: {
    padding: 10,
  },
  searchView: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    marginTop: 13,
  },
  searchinput: {
    backgroundColor: '#f8f8ff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingRight: 70,
    paddingVertical: 3,
    alignItems: 'center',
    borderRadius: 6,
  },
  outline: {
    // padding: 9,
  },
  modalMainView: {},
  modalSubMainView: {
    height: '100%',
    flexDirection: 'column',
  },
  modalTouchView: {
    height: '50%',

    // flex:1
  },
  modalContainView: {
    height: '50%',

    backgroundColor: '#fffafa',
    paddingBottom: 150,
  },
  modalTouch: {
    height: '100%',

    // paddingVertical: 205,
  },
  iconMain: {
    flexDirection: 'row',

    alignItems: 'center',
    gap: 9,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '600',
  },
  modalHeader: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 25,
  },
  modalHeaderText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  modalHeaderTouch: {
    borderRadius: 10,
    backgroundColor: '#32cd32',
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  iconMainTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderBlockColor: '#d3d3d3',
  },
  modalSecondText: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  modalSecondView: {
    marginTop: 25,
  },
  ModaConfirmView: {
    marginTop: 18,
    alignItems: 'center',
  },
  ModaConfirmTouch: {
    backgroundColor: '#32cd32',
    paddingHorizontal: 150,
    paddingVertical: 15,
    borderRadius: 5,
  },
  ModaConfirmText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default Header;
