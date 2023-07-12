import * as React from 'react';
import BackButton from '../components/BackButton'
import { ScrollView, Dimensions, StyleSheet, View, Text } from 'react-native'
import { useState, useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import ResultSvg from '../resources/svg-s/ResultSvg'
import ResultButton from '../components/ResultButton';

const height = Dimensions.get('window').height
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
    navigation.navigate('Home')
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
        <ScrollView>
          <View style={{ height: 0.35 * height, backgroundColor: 'white'}} >
            <View style={styles.circleOut}/>
            <View style={[styles.circlePer, {transform: [
              {translateX: Dimensions.get('window').width * 0.205},
              {rotate: rotation},
              {translateX: -Dimensions.get('window').width * 0.205}],}]}/>
            <View style={styles.circle}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
            <ResultSvg size={height * 111 / 844} style={styles.svg}/>
        </View>

        <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background]}>
            <View>  
              <Text style={styles.title}>Tvoj rezultat je: {route.params.result}%</Text>
            </View>
            <View style={styles.table}>
                  {route.params.options.map(function (object, i) {
                    if(!isNaN(eval(route.params.results[i]))){ 
                      return (
                          <ResultButton name={object} key={i} 
                          style={styles.button}
                          value={route.params.results[i]} 
                          handleClick={handleClick} />
                      )
                    }
                  })}
            </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
      width: '45%',
      height: height * 0.1,
      marginVertical: '2%',
  },
  container: {
    flex: 1
  },
  background: {
    minHeight: 0.65 * height
  },
  title: {
    fontSize: 25 / 844 * height,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginBottom: '3%'
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'flex-start' 
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