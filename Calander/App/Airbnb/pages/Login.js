import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const categories = [
  {
    name: 'Continue with Phone',
    icon: 'call-outline',
  },
  {
    name: 'Continue with apple',
    icon: 'logo-apple',
  },
  {
    name: 'Continue with google',
    icon: 'logo-google',
  },
  {
    name: 'Continue with facebook',
    icon: 'logo-facebook',
  },
];

const Login = ({navigation}) => {
  const showLogin = () => {
    navigation.navigate('Profile', {data: {done: true}});
  };
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.TouchableOpacityback}
          onPress={() => navigation.pop()}>
          <Entypo name="cross" color="#000000" size={30} style={styles.back} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>
      <View style={styles.orView}>
        <Text style={styles.line} />
        <Text style={styles.or}>or</Text>
        <Text style={styles.line} />
      </View>
      <View>
        {categories?.map((item, i) => {
          return (
            <TouchableOpacity
              onPress={() => {
                showLogin();
              }}>
              <View style={styles.logoView}>
                <Ionicons name={item.icon} size={30} color="#000000" />

                <Text style={styles.logoName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  input: {
    marginTop: 20,

    height: 45,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#808080',
    paddingLeft: 10,
  },
  button: {
    marginTop: 25,
    width: '100%',
    backgroundColor: '#dc143c',
    alignItems: 'center',
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#ffffff',
    paddingVertical: 13,
  },
  orView: {
    marginTop: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  line: {
    width: '43%',
    height: 0.5,
    backgroundColor: '#808080',
  },
  or: {
    fontSize: 17,
    fontWeight: '500',
  },
  logoView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderRadius: 9,
    borderColor: '#808080',
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  logoName: {
    width: '75%',
    fontSize: 17,
    fontWeight: '500',
  },
});
