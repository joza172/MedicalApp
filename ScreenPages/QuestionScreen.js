import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import BigButton from '../components/BigButton';
import { LinearGradient } from 'expo-linear-gradient'
import questions from '../resources/data/questions';
import BackButton from '../components/BackButton'
import CloseButton from '../components/CloseButton'
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';


export default function QuestionScreen({ navigation, route }) {
  var numOfStanice = route.params.num
  var vrsta = route.params.type

  const optionsPato = ['Pr', 'Bl', 'Meta', 'Mi', 'N.seg', 'Ps', 'R.ly', 'Sp']
  const realValuespPato = ['Promijelocit', 'Blast', 'Metamijelocit',
    'Mijelocit', 'Nesegmentirani_granulocit', 'Plazma_stanice', 'Reaktivni_limfocit', 'Stanice_Pelgera']
  const omjerPato = [0.3, 0.25, 0.25, 0.1, 0.1, 0.1, 0.1, 0.1]
  const pointsPato = { 'Pr': 0, 'Bl': 0, 'Meta': 0, 'Mi': 0, 'N.seg': 0, 'Ps': 0, 'R.ly': 0, 'Sp': 0 }


  const optionsFizio = ['Seg', 'Ly', 'Mono', 'Eo', 'Ba']
  const realValuesFizio = ['Segmentirani_granulocit', 'Limfocit', 'Monocit', 'Eozinofil', 'Bazofil']
  const omjerFizio = [0.3, 0.25, 0.25, 0.1, 0.1]
  const pointsFzio = { 'Seg': 0, 'Ly': 0, 'Mono': 0, 'Eo': 0, 'Ba': 0 }

  const data = questions


  const [options, setOptions] = useState([])
  const [realValues, setRealValues] = useState([])
  const [stanice, setStanice] = useState([])
  const [dataForUse, setDataForUse] = useState([])
  const [omjer, setOmjer] = useState([])
  const [points, setPoints] = useState([])
  const [numClass, setNumClass] = useState([])


  //get random pictures for quiz
  useEffect(() => {

    var tempOptions = []
    var tempRV = []
    var tempOmjer = []

    if (vrsta === 'Patio') {
      tempOptions = optionsPato
      tempOmjer = omjerPato
      tempRV = realValuespPato
      setPoints(pointsPato)
    } else {
      tempOptions = optionsFizio
      tempOmjer = omjerFizio
      tempRV = realValuesFizio
      setPoints(pointsFzio)
    }


    var omjerNum = []
    for (i = 0; i < tempOptions.length; i++) {
      omjerNum.push(Math.ceil(tempOmjer[i] * numOfStanice))
    }


    var temp = []
    for (i = 0; i < data.length; i++) {
      if (tempRV.indexOf(data[i].class) > -1) {
        temp.push(data[i])
      }

    }
    setStanice(temp)

    var numSt = new Array(tempRV.length).fill(0);
    var tempStanice = temp
    temp = []


    while (temp.length < numOfStanice) {

      var RandomNumber = Math.floor(Math.random() * tempStanice.length)
      var trenutniBrojTeStanice = omjerNum[tempRV.indexOf(tempStanice[RandomNumber].class)]

      if (temp.indexOf(tempStanice[RandomNumber]) == -1 && trenutniBrojTeStanice > 0) {
        let index = tempRV.indexOf(tempStanice[RandomNumber].class) 
        numSt[index] = numSt[index] + 1
        temp.push(tempStanice[RandomNumber])
        omjerNum[index] = trenutniBrojTeStanice - 1
      }
    }

    setDataForUse(temp)
    setOptions(tempOptions)
    setRealValues(tempRV)
    setOmjer(tempOmjer)
    setNumClass(numSt)

  }, [])

  const totalQuestions = dataForUse.length;

  // index of the question
  const [index, setIndex] = useState(0);

  // selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  //check if answer is correct
  useEffect(() => {
    if (selectedAnswer !== null) {
      if (options.indexOf(selectedAnswer) == realValues.indexOf(currentQuestion?.class)) {
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
      
      navigation.navigate('Result', {options:options, result:Math.floor(sum/totalQuestions*100), results:results})
    } else {
      setIndex(index + 1)
    }
  };

  //handle click on back button
  const onPress = value => {
    navigation.navigate("Param")
  }

  const currentQuestion = dataForUse.length > 0 ? dataForUse[index] : data[0]
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
        <Image style={styles.image} source={currentQuestion.uri} />
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