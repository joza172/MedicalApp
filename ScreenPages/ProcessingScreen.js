import NeutroPhilSvg from '../resources/svg-s/NeutroPhilSvg';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const height = Dimensions.get('window').height;

export default function ProcessingScreen({ navigation,route }) {
  const [fillAnimation] = useState(new Animated.Value(0));

  const handleFull = () => {
    // Call the function you want to execute when the bar is full
    navigation.replace('StudyResult',{result:route.params.result});
  };

  useEffect(() => {
    fillBar();
  }, []);

  const fillBar = () => {
    Animated.timing(fillAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      handleFull();
    });
  };

  const widthInterpolation = fillAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <LinearGradient colors={['white', '#EBDDF6']} style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}> NeutroPhil provjerava{'\n'} tvoje odgovore</Text>
      </View>

      <View style={styles.midContainer}>
        <NeutroPhilSvg size={height * 0.35} />
      </View>

      <View style={styles.botContainer}>
        <View style={styles.progressBarMask}>
          <View style={styles.borderContainer}>
            <Animated.View
              style={[styles.fillBar, { width: widthInterpolation }]}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  midContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: height * 30 / 844,
    textAlign: 'center',
  },
  progressBarMask: {
    width: '80%',
    height: height * 0.05,
    overflow: 'hidden',
    borderRadius: 21,
    backgroundColor:' rgba(127, 64, 176, 0.2)'
  },
  borderContainer: {
    borderWidth: 2,
    borderColor: 'rgba(127, 64, 176, 0.2)',
    borderRadius: 21,
  },
  fillBar: {
    height: '100%',
    backgroundColor: ' rgba(127, 64, 176, 1)',
    borderRadius: 19,
  },
});
