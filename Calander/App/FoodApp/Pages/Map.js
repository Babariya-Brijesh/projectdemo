import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Map = ({navigation}) => {
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
  });
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
