import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import QuestionSvg from '../resources/svg-s/QuestionSvg'
import ResultButton from '../components/ResultButton'

export default function ResultInfoScreen({ navigation , route }) {
  const onPress = () => {
    navigation.navigate('Result', {
      options: route.params.options,
      result: route.params.result,
      results: route.params.results,
      realValues: route.params.realValues
    })
  }


  return (
    <View style={{flex: 2, backgroundColor: 'white'}}>
      <View style={{ flex: 7}} >
          <View style={styles.circle}/>
          <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <QuestionSvg style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={{flex:13}}>
          <View style={[styles.container, {flex: 1}]}>  
            <Text style={styles.title}>Gdje sam pogriješio?</Text>
            <Text style={styles.subTitle}>{route.params.name.replace('_', ' ')}</Text>
          </View>

          <View style={{flex: 3,}}>  
            <LinearGradient start={{ x: 1, y: 0 }} and end={{ x: 0, y: 0 }} colors={['white', '#EBDDF6' ]} style={[styles.background]}>
                <View style={styles.box}>
                    <Text style={styles.text}>Prikazani</Text>
                    <View style={styles.smallCircle}>
                        <Text style={styles.text}>{route.params.num}</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Točno odgovoreni</Text>
                    <View style={styles.smallRedCircle}>
                        <Text style={styles.text}>{route.params.correct}</Text>
                    </View>
                </View>
            </LinearGradient>
          </View>
          
          <View style={styles.container}>  
            <Text style={styles.title}>Uoči razlike!</Text>
            <Text style={[styles.subTitle, {color: 'black'}]}>
              Često dolazi do zamjene neseg i meta ili neutrofila. 
              Ono na što treba pripaziti je:........
            </Text>
          </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: '5%',
    fontSize: 20
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
  container: {
    flex: 2,
    paddingHorizontal: '10%'
  },
  background: {
    flexDirection: 'row',
    borderRadius: 25,
    height: '90%',
    marginHorizontal: '10%',
    elevation: 5,              // Android
    shadowColor: '#030002',    // Android, iOS & Web
    shadowOpacity: 0.25,       // iOS & Web
    shadowRadius: 5
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#7F40B0',
    fontSize: 20,
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
  smallCircle: {
    backgroundColor: 'white',
    borderRadius: Dimensions.get('window').width * 52.5/390,
    width: Dimensions.get('window').width * 105/390,
    height: Dimensions.get('window').width * 105/390,
    borderWidth: 8,
    borderColor: '#36D69C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallRedCircle: {
    backgroundColor: 'white',
    borderRadius: Dimensions.get('window').width * 52.5/390,
    width: Dimensions.get('window').width * 105/390,
    height: Dimensions.get('window').width * 105/390,
    borderWidth: 8,
    borderColor: '#FF6C6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
