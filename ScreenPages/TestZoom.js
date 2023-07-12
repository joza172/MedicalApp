import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import ZoomableImage from '../components/ZoomableImage';
import * as ScreenOrientation from 'expo-screen-orientation';
import fizio from '../resources/data/fizio';
import velikeSlike from '../resources/data/velikeSlike';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function TestZoom({ navigation, route}) {

  

  const className = route.params.name.replaceAll(' ','_');

  const opt = className == 'Multiplu_mijelom' ? 'options2' : 'options1'
  const rv = className == 'Multiplu_mijelom' ? 'realValues2' : 'realValues1'

  const classData = velikeSlike[className][0];
 

  const [slika, setSlika] = useState(classData.uri);
  const [omjer, setOmjer] = useState(0)
  const [points, setPoints] = useState([])
  const[options,setOptions] = useState(velikeSlike[opt])
  const[counter,setCounter] = useState(0)
  const [realValues, setRealValues] = useState(velikeSlike[rv])
  const [scaleFactor, setScaleFactor] = useState(1)
  const [answers,setAnswers] = useState(classData.answers)
  const [endSum,SetEndSum] = (100)

  const handleClickOver = value => {

    let results = []
      let sum = 0
      for(let i = 0; i < options.length; i++){

        let st = options[i]
        if (answers[st]!=0) {
          if (points[st] >= answers[st]) {
            results.push(answers[st] + '/' + answers[st])
            sum+=answers[st]
          }else {
            results.push(points[st] + '/' + answers[st])
            sum += points[st] 
          }
      }

      }

    navigation.navigate('Result', {
      options:options,
      result:Math.round(sum),
      results:results,
      realValues: realValues
    })

  }

  const handleClickCounter = value => {

    console.log(endSum)

    setCounter(counter+1)
    points[value] = points[value] + 1
  }

  const onPress = () => {
    navigation.goBack()
  }

  useEffect(() => {

      var sum = 0

      var createPoints = {}

      for (var j = 0; j < options.length;j++) {
          createPoints[options[j]] = 0
          sum += answers[options[j]] 

      }
      SetEndSum(sum)
      setPoints(createPoints)

    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    };

    lockOrientation();

    return () => {
      ScreenOrientation.unlockAsync();
    };

  }, []);
  

  useEffect(() => {

    //edit function so it calculates ImageWidth and ImageHeight


    const imageUri = slika;
    const w = Image.resolveAssetSource(imageUri).width
    const h = Image.resolveAssetSource(imageUri).height

    const hScale = h / height
    const wScale = w / width

    let scFactor = wScale / hScale
    setScaleFactor(scFactor)
    let v = h / w
    setOmjer(v)
    
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex :2}}>
        <BackButton size={height * 0.055} onPress={onPress} style={{ left: '3%', top: '15%' }} />
        <Text style={{alignSelf:'center'}} >{counter} / 100 </Text>
        <BigButton style={styles.bigButtonDone} value='Zavrsi Vjezbu' handleClick={handleClickOver}/>
      </View>
      <View style={styles.container}>
        <View style={{ borderWidth: 0, flexShrink: 1, height: '80%', width: '80%'}}>
          <ZoomableImage
            imageWidth={width}
            imageHeight={width * omjer}
            source={slika}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
      </View>

      <ScrollView style={{position:'absolute',right:0 , top:0 , width:'30%',height:'60%'}}>
          <View style={styles.table}>
              {options.map(function (object, i) {
                return (
                <BigButton key={i} value={object} handleClick={handleClickCounter} style={styles.bigButton }/>  
                )
              })}
          </View>
      </ScrollView>

    </View>


);
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioButton: {
    height: 0.05 * height,
    marginHorizontal: '10%'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  bigButton: {
    width: width * 0.13,
    height: 0.12 * height,
    borderRadius: 25,
    marginVertical: '2%',
  },
  bigButtonDone: {
    width: width * 0.2,
    height: 0.1 * height,
    borderRadius: 25,
    alignSelf:'center',
  },
  table: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around',
    borderRadius: 25,
    padding:'5%'
  }
});