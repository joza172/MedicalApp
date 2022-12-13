import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import BigButton from '../components/BigButton';
import { LinearGradient } from 'expo-linear-gradient'
import questions from '../resources/data/questions';
import BackButton from '../components/BackButton'
import CloseButton from '../components/CloseButton'
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
import fizio from '../resources/data/fizio';
import patio from '../resources/data/patio';

export default function QuestionScreen({ navigation, route }) {
  var numOfStanice = route.params.num
  var vrsta = route.params.type

  const rD = vrsta === 'Patio' ? patio : fizio

  const [options, setOptions] = useState([])
  const [realValues, setRealValues] = useState([])
  const [stanice, setStanice] = useState([])
  const [dataForUse, setDataForUse] = useState([])
  const [omjer, setOmjer] = useState([])
  const [points, setPoints] = useState([])
  const [numClass, setNumClass] = useState([])
  const[questionClass, setQuestionClass] = useState([])


  //get random pictures for quiz
  useEffect(() => {
    
    var tempOptions = []
    var tempRV = []
    var tempOmjer = []

      tempOptions = rD.options
      tempOmjer = rD.omjer
      tempRV = rD.realValues
      
      var createPoints = {}

      for (j = 0; j < tempOptions.length;j++) {
          createPoints[tempOptions[j]] = 0
      }

      setPoints(createPoints)

    var omjerNum = []
    for (i = 0; i < tempOptions.length; i++) {
      omjerNum.push(Math.ceil(tempOmjer[i] * numOfStanice))
    }


    var numSt = new Array(tempRV.length).fill(0);
    var tempStanice = rD.questions
    temp = []
    var tempQuestionClass = []
    
    while (temp.length < numOfStanice) {
        
      //Random klasa stanice
      var RandomNumberClass = Math.floor(Math.random() * tempStanice.length)

      //broj slika za tu klasu
      var trenutniBrojTeStanice = omjerNum[tempRV.indexOf(tempStanice[RandomNumberClass].class)]

      //Random uri za tu klasu stanice
      var RandomNumberUri = Math.floor(Math.random() * tempStanice[RandomNumberClass].uris.length)

      if (temp.indexOf(tempStanice[RandomNumberClass].uris[RandomNumberUri]) == -1 && trenutniBrojTeStanice > 0) {
        let index = tempRV.indexOf(tempStanice[RandomNumberClass].class) 
        numSt[index] = numSt[index] + 1
        temp.push(tempStanice[RandomNumberClass].uris[RandomNumberUri])
        tempQuestionClass.push(tempStanice[RandomNumberClass].class)
        omjerNum[index] = trenutniBrojTeStanice - 1
      }
    } 

    setDataForUse(temp)
    setOptions(tempOptions)
    setRealValues(tempRV)
    setOmjer(tempOmjer)
    setNumClass(numSt)
    setQuestionClass(tempQuestionClass)

  }, [])

  const totalQuestions = dataForUse.length;

  // index of the question
  const [index, setIndex] = useState(0);

  // selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  //check if answer is correct
  useEffect(() => {
    if (selectedAnswer !== null) {
      if (options.indexOf(selectedAnswer) == realValues.indexOf(currentClass)) {
        points[selectedAnswer] = points[selectedAnswer] + 1
      }
    }
  }, [selectedAnswer]);

  //reset selected value
  useEffect(() => {
    setSelectedAnswer(null);
  }, [index]);

  //handle click on option
  const handleClick = value => {
    setSelectedAnswer(value);

    if(index == dataForUse.length - 1){
      let results = []
      let sum = 0
      for(let i = 0; i < options.length; i++){
        results.push(points[options[i]] + '/' + numClass[i])
        sum += points[options[i]]
      }
      
      navigation.navigate('Result', {
        options:options,
        result:Math.floor(sum/totalQuestions*100),
        results:results,
        realValues: realValues
      })
    } else {
      setIndex(index + 1)
    }
  };

  //handle click on back button
  const onPress = value => {
    navigation.navigate("Param")
  }

  const currentQuestion = dataForUse.length > 0 ? dataForUse[index] : rD.questions[0].uris[0]
  const currentClass = dataForUse.length > 0 ? questionClass[index] : rD.questions[0].class

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={styles.header} >
        <BackButton onPress={onPress} style={{left: '12%', top: '7%'}}/>
        <CloseButton onPress={onPress} style={{right: '12%', top: '7%'}}/>
      </View>

      <View style={{ flex: 0.5, backgroundColor: 'white'}} >
        <Text style={styles.title}>{index + 1}/{totalQuestions}</Text>
      </View>

      <View style={{ flex: 4, backgroundColor: 'white', alignItems: 'center' }} >
        <Image style={styles.image} source={currentQuestion} />
      </View>

      <LinearGradient colors={['white', '#EBDDF6']} style={[styles.background, { flex: 4 }]}>
        <View style={styles.table}>
          <View style={styles.column}>
            {options.map(function (object, i) {
              if (i < (Math.floor(options.length / 2))) {
                return (
                  <View key={i} style={styles.cell}>
                    <BigButton value={object} small={true} handleClick={handleClick} />
                  </View>);
              }
            })}
          </View>
          <View style={styles.column}>
            {options.map(function (object, i) {
              if (i >= (Math.floor(options.length / 2))) {
                return (
                  <View key={i} style={styles.cell}>
                    <BigButton value={object} small={true} handleClick={handleClick} />
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
    fontSize: 20,
    alignSelf: 'center'
  },
  table: {
    padding: '10%',
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  cell: {
    flex: 1,
    alignSelf: 'stretch'
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'}
});