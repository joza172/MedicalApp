import * as React from 'react';
import { useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Image, ScrollView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import QuestionSvg from '../resources/svg-s/QuestionSvg'
import GalleryButton from '../components/GalleryButton';
import galerija from '../resources/data/galerija'
import data from '../resources/data/svaPitanja'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function ResultInfoScreen2({ navigation , route }) {
  const answers = route.params.answers
  const index = route.params.index
  const [object, setObject] = useState(findObject(route.params.answers[index].realClass))
  const onPress = () => {
    navigation.goBack()
  }

  const handleClick = value => {
    var index = data.realValues.indexOf(value.class) 
    if(index != -1){
      navigation.navigate('Description',{
        data:value,
        uris:data.questions[index].uris
      })
    } else {
      navigation.navigate('InProgress')
    }
  }

  function findObject(name){
    var rotimPeder
    Object.keys(galerija).forEach(function(key) {
      for(var i = 0; i < galerija[key].length; i++){
        if(galerija[key][i].class == name){
          rotimPeder = galerija[key][i]
        }
      }
    });
    return rotimPeder
  }
  return (
    <View style={{flex: 2, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{height: 0.35 * height}} >
            <View style={styles.circle}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
            <QuestionSvg size={height * 108 / 844} style={styles.svg}/>
        </View>

        <LinearGradient colors={['white', '#EBDDF6' ]} style={{minHeight: 0.65 * height}}>
            <View style={[styles.container]}>  
              <Text style={styles.title}>{answers[index].realClass.replace('_', ' ')} je na slici broj {answers[index].correctChoice + 1}</Text>
            </View>

            <View style={styles.table}>
              {answers[index].allUris.map(function (object, i) {
                  return (
                      <View key={i} style={styles.imageContainer}>
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
            
            {
                object != null && object.linkovi != null?
                  <View style={styles.linksContainer}>
                    <Text style={styles.titleLinks}>
                      Pogledaj slike
                    </Text>

                    {object.linkovi.map(function (object, i) {
                      return (
                        <GalleryButton key={i} handleClick={handleClick} value={findObject(object)}/>
                      )
                  })}
                  </View>  
                  :
                  <View/>
              }
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  linksContainer: {
    marginVertical: '5%'
  },
  titleLinks: {
    fontSize: 25 / 844 * height,
    fontWeight: '600',
    marginLeft: '10%',
  },
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
