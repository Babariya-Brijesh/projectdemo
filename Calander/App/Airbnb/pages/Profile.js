import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Profile = ({navigation, route}) => {
  const data = route?.params;
  const [profile, setProfile] = useState(false);

  const openLogin = () => {
    navigation.navigate('Login');
  };
  console.log('data=====>', profile);
  const profileFunction = () => {
    setProfile(data?.data?.done);
  };
  const openLogout = () => {
    setProfile(false);
  };
  useEffect(() => {
    profileFunction();
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profile</Text>
          <SimpleLineIcons name="bell" size={26} color="#000000" />
        </View>
        {profile ? (
          <View style={styles.profileContainer}>
            <View style={styles.profileView}>
              <Image
                source={require('../../NavigateComponent/assets/photo2.png')}
                style={styles.logo}
              />
              <Text style={styles.userText}>Spider man</Text>
            </View>
            <View style={styles.profileTextView}>
              <Text style={styles.profileText}>spidermanxyz@gmail.com</Text>
              <Text style={styles.profileText}>Since 21/12/2023</Text>
            </View>
          </View>
        ) : (
          <></>
        )}
        <View style={styles.loginContainer}>
          {profile ? (
            <TouchableOpacity onPress={openLogout}>
              <Text style={styles.loginText}>Log out</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={openLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // mainContainer: {
  //   alignItems: 'center',
  // },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  headerText: {
    fontSize: 29,
    fontWeight: '700',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  loginText: {
    fontSize: 22,
    fontWeight: '300',
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  userText: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 25,
  },
  profileView: {
    alignItems: 'center',
  },
  profileTextView: {
    marginTop: 25,
    alignItems: 'center',
  },
  profileText: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 15,
  },
});
