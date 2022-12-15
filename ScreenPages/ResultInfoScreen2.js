import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Image} from 'react-native'
import { useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import QuestionSvg from '../resources/svg-s/QuestionSvg'
import ResultButton from '../components/ResultButton'

export default function ResultInfoScreen({ navigation , route }) {
  const answers = route.params.answers
  const index = route.params.index
  const onPress = () => {
    navigation.navigate("Result2", {result:10, answers:answers})
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
            <Text style={styles.title}>Limfocit je na slici broj {answers[index].correctChoice + 1}</Text>
          </View>

          <View style={styles.table}>
            <View style={styles.column}>
              {answers[index].allUris.map(function (object, i) {
                if (i < (Math.floor(answers[index].allUris.length / 2))) {
                  return (
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={object} />
                        <Text style={[styles.smallCircle, 
                          i == answers[index].correctChoice ? {backgroundColor: '#36D69C'} : 
                          i == answers[index].myChoice ? {backgroundColor: '#E24646'}: {}]}>
                          {i + 1}
                        </Text>
                    </View>
                  )
                }
              })}
            </View>
            <View style={styles.column}>
              {answers[index].allUris.map(function (object, i) {
                if (i >= (Math.floor(answers[index].allUris.length / 2))) {
                  return (
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={object} />
                        <Text style={[styles.smallCircle, 
                          i == answers[index].correctChoice ? {backgroundColor: '#36D69C'} : 
                          i == answers[index].myChoice ? {backgroundColor: '#E24646'}: {}]}>
                          {i + 1}
                        </Text>
                    </View>
                  )
                }
              })}
            </View>
          </View>
          
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  smallCircle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: Dimensions.get('window').width * 0.04,
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
    left: '80%',
    bottom: '10%'
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  text: {
    padding: '5%',
    fontSize: 20
  },
  container: {
    flex: 2,
    paddingHorizontal: '10%'
  },
  table: {
    paddingBottom: '10%',
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  image: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%'
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
  
});
