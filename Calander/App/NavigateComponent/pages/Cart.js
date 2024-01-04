import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Cart = ({navigation, route}) => {
  const [index, setIndex] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const [totalWrong, setTotalWrong] = useState(0);
  const [showAns, setShowAns] = useState(false);
  const [showQus, setShowQus] = useState(true);

  const {DataQustions} = route.params;

  const rotate = useSharedValue(0);
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, {duration: 600}),
        },
      ],
    };
  });

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, {duration: 600}),
        },
      ],
    };
  });

  const qusFunctonCorrect = () => {
    setShowQus(true);
    setShowAns(false);
    setIndex(index + 1);
    setTotalCorrect(totalCorrect + 1);
    rotate.value += 1;
  };
  const qusFunctonWrong = () => {
    setShowQus(true);
    setShowAns(false);
    setIndex(index + 1);
    setTotalWrong(totalWrong + 1);
    rotate.value += 1;
  };
  const ansFuncton = () => {
    setShowAns(true);
    setShowQus(false);
    rotate.value += 1;
  };

  const endSession = () => {
    navigation.pop();
  };

  return DataQustions.length > index ? (
    <View style={styles.mainView}>
      <View style={styles.indexView}>
        <Text style={styles.indexText}>
          {index + 1}/{DataQustions.length}
        </Text>
      </View>
      {showQus && (
        <Animated.View style={[styles.qustionsAns, frontAnimatedStyles]}>
          <Text style={styles.qustionsAnsText}>{DataQustions[index]?.qus}</Text>
        </Animated.View>
      )}
      {showAns && (
        <Animated.View style={[styles.qustionsAns, backAnimatedStyles]}>
          <Text style={styles.AnsText}>{DataQustions[index]?.ans}</Text>
        </Animated.View>
      )}
      {showAns && (
        <View style={styles.CorrectWrongView}>
          <TouchableOpacity
            style={styles.CorrectWrong}
            onPress={qusFunctonCorrect}>
            <Text style={styles.CorrectWrongText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CorrectWrong}
            onPress={qusFunctonWrong}>
            <Text style={styles.CorrectWrongText}>Wrong</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.showAnsView}>
        {showQus && (
          <TouchableOpacity style={styles.showAns} onPress={ansFuncton}>
            <Text style={styles.showAnsText}>Show Answer</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  ) : (
    <View style={styles.main}>
      <View style={styles.result}>
        <Text style={styles.resultText}>
          {totalCorrect} Correct, {totalWrong} Wrong
        </Text>
      </View>
      <TouchableOpacity style={styles.endSession} onPress={endSession}>
        <Text style={styles.endSessionText}>End Session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  indexView: {
    marginTop: 50,
  },
  indexText: {
    fontSize: 23,
    color: '#000000',
    fontWeight: '700',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    gap: 160,
  },
  qustionsAns: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  qustionsAnsText: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '500',
    paddingHorizontal: 85,
    paddingVertical: 110,
  },
  CorrectWrongView: {
    gap: 5,
    marginTop: -35,
  },
  CorrectWrong: {
    backgroundColor: '#6a5acd',
    borderRadius: 10,
  },
  CorrectWrongText: {
    paddingHorizontal: 95,
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 15,
  },
  showAnsView: {
    marginBottom: 10,
  },
  showAns: {
    backgroundColor: '#6a5acd',
    borderRadius: 10,
  },
  showAnsText: {
    paddingHorizontal: 95,
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 15,
  },
  endSession: {
    backgroundColor: '#6a5acd',
    borderRadius: 10,
    marginBottom: 30,
  },
  endSessionText: {
    paddingHorizontal: 95,
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 15,
  },
  resultText: {
    fontSize: 23,
    color: '#000000',
    fontWeight: '700',
  },
  result: {
    marginTop: 60,
  },
  AnsText: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '500',
    paddingHorizontal: 140,
    paddingVertical: 110,
  },
});
