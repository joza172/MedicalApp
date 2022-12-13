import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { useState, useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import ResultSvg from '../resources/svg-s/ResultSvg'
import ResultButton from '../components/ResultButton';

export default function ResultScreen({ navigation , route }) {
  const rotation = (-36.6 + 163.2 * route.params.result / 100) + 'deg'

  const handleClick = name => {
    var index = route.params.options.indexOf(name)
    var list = route.params.results[index].split('/')
    navigation.navigate('ResultInfo', {
      name: route.params.realValues[index],
      num: list[1],
      correct: list[0],
      options: route.params.options,
      result: route.params.result,
      results: route.params.results,
      realValues: route.params.realValues
    })
  }

  const onPress = () => {
    navigation.navigate('Second')
  }


  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circleOut}/>
          <View style={[styles.circlePer, {transform: [
            {translateX: Dimensions.get('window').width * 0.205},
            {rotate: rotation},
            {translateX: -Dimensions.get('window').width * 0.205}],}]}/>
          <View style={styles.circle}/>
          <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <ResultSvg style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:13}]}>
          <View>  
            <Text style={styles.title}>Tvoj rezultat je: {route.params.result}%</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.column}>
                {route.params.options.map(function (object, i) {
                if (i < (Math.floor(route.params.options.length / 2))) {
                    return (
                    <View key={i} style={styles.cell}>
                        <ResultButton name={object} value={route.params.results[i]} small={true} handleClick={handleClick} />
                    </View>);
                }
                })}
            </View>
            <View style={styles.column}>
                {route.params.options.map(function (object, i) {
                if (i >= (Math.floor(route.params.options.length / 2))) {
                    return (
                    <View key={i} style={styles.cell}>
                        <ResultButton name={object} value={route.params.results[i]} small={true} handleClick={handleClick} />
                    </View>);
                }
                })}
            </View>
        </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    height: '70%',
    flexDirection: 'row'
  },
  inputText: {
    color: '#9c53d4',
    fontWeight: 'bold',
  },
  svg: {
    position: 'absolute',
    left: '65%',
    top: '18%'
  },
  table: {
    paddingBottom: '10%',
    paddingHorizontal: '10%',
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
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