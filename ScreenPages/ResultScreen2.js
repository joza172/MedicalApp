import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, ScrollView } from 'react-native'
import { useState, useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import ResultSvg from '../resources/svg-s/ResultSvg'
import ResultImageButton from '../components/ResultImageButton';

export default function ResultScreen2({ navigation , route }) {
  const rotation = (-36.6 + 163.2 * route.params.result / 100) + 'deg'

  const handleClick = name => {
    navigation.navigate('ResultInfo2', {index:name, answers:route.params.answers})
  }

  const onPress = () => {
    navigation.navigate('Second')
  }


  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <ScrollView>
        <View style={{height: Dimensions.get('window').height * 0.35}} >
            <View style={styles.circleOut}/>
            <View style={[styles.circlePer, {transform: [
              {translateX: Dimensions.get('window').width * 0.205},
              {rotate: rotation},
              {translateX: -Dimensions.get('window').width * 0.205}],}]}/>
            <View style={styles.circle}/>
            <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
            <ResultSvg style={styles.svg}/>
        </View>

        <View style={{marginHorizontal: '5%'}}>
            <View>  
              <Text style={styles.title}>Tvoj rezultat je: {route.params.result}%</Text>
            </View>
            {route.params.answers.map(function (object, i) {
                return (
                  <View key={i} style={{marginVertical: '2%'}}>
                    <ResultImageButton
                      handleClick={handleClick}
                      index={i}
                      correct={route.params.answers[i].correctChoice != route.params.answers[i].myChoice}
                      uris={route.params.answers[i].allUris}
                      height={Dimensions.get('window').height * 0.1}/>
                  </View>);
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  svg: {
    position: 'absolute',
    left: '65%',
    top: '18%'
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#EBDDF6',
    borderRadius: Dimensions.get('window').width * 1.5,
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.75,
    left: '40%',
    bottom: '14%'
  },
  circleOut: {
    position: 'absolute',
    backgroundColor: '#9C53D4',
    borderRadius: Dimensions.get('window').width * 0.4,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    left: '37.5%',
    bottom: '11%',
  },
  circlePer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: Dimensions.get('window').width * 0.41,
    width: Dimensions.get('window').width * 0.41,
    height: Dimensions.get('window').width * 0.82,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    left: '36%',
    bottom: '10%',
  },
});