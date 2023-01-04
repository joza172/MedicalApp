import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Image} from 'react-native'
import { useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import QuestionSvg from '../resources/svg-s/QuestionSvg'
import ResultButton from '../components/ResultButton'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function ResultInfoScreen({ navigation , route }) {
  const answers = route.params.answers
  const index = route.params.index
  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={{flex: 2, backgroundColor: 'white'}}>
      <View style={{ flex: 7}} >
          <View style={styles.circle}/>
          <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <QuestionSvg size={height * 108 / 844} style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={{flex:13}}>
          <View style={[styles.container]}>  
            <Text style={styles.title}>{answers[index].realClass.replace('_', ' ')} je na slici broj {answers[index].correctChoice + 1}</Text>
          </View>

          <View style={styles.table}>
            {answers[index].allUris.map(function (object, i) {
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
              })}
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
    borderRadius: height * 0.02,
    width: height * 0.04,
    height: height * 0.04,
    bottom: '5%',
    right: '5%'
  },
  imageContainer: {
    height: '45%',
    width: '45%'
  },
  container: {
    flex: 0.5,
    paddingHorizontal: '2%'
  },
  table: {
    width: width * 368 / 370,
    height: width,
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  image: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%'
  },
  title: {
    fontSize: 25 / 844 * height,
    fontWeight: 'bold',
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
