import * as React from 'react';
import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import BigButton from '../components/BigButton';
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '../components/BackButton'
import CloseButton from '../components/CloseButton'
import fizio from '../resources/data/fizio';
import patio from '../resources/data/patio';
import svaPitanja from '../resources/data/svaPitanja'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function QuestionScreen({ navigation, route }) {
  var numOfStanice = route.params.num
  var vrsta = route.params.type

  const rD = vrsta === 'Patološki' ? patio : vrsta === 'Fiziološki' ? fizio : svaPitanja

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

      for (var j = 0; j < tempOptions.length;j++) {
          createPoints[tempOptions[j]] = 0
      }

      setPoints(createPoints)

    var omjerNum = []
    for (var i = 0; i < tempOptions.length; i++) {
      if(vrsta=='Fizio') {
        omjerNum.push(Math.ceil(tempOmjer[i] * numOfStanice)) }
      else {
        omjerNum.push(numOfStanice)
      }
    }


    var numSt = new Array(tempRV.length).fill(0);
    var tempStanice = rD.questions
    var temp = []
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
    console.log(tempQuestionClass)
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
      setIndex(index+1)
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

      //add point for last question
      if (options.indexOf(value) == realValues.indexOf(currentClass)) {
        points[value] = points[value] + 1
      }
      

      let results = []
      let sum = 0
      for(let i = 0; i < options.length; i++){
        results.push(points[options[i]] + '/' + numClass[i])
        sum += points[options[i]]
      }
      
      navigation.navigate('Result', {
        options:options,
        result:Math.round(sum/totalQuestions*100),
        results:results,
        realValues: realValues
      })
    } 
  };

  const onPress = () => {
    navigation.goBack()
  }

  const currentQuestion = dataForUse.length > 0 ? dataForUse[index] : rD.questions[0].uris[0]
  const currentClass = dataForUse.length > 0 ? questionClass[index] : rD.questions[0].class

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={styles.header} >
        <BackButton size={height * 0.055} onPress={onPress} style={{left: '12%', top: '7%'}}/>
        <CloseButton size={height * 0.055} onPress={onPress} style={{right: '12%', top: '7%'}}/>
      </View>

      <View style={{ flex: 0.5, backgroundColor: 'white'}} >
        <Text style={styles.title}>{index + 1}/{totalQuestions}</Text>
      </View>

      <View style={{ flex: 4, backgroundColor: 'white', alignItems: 'center' }} >
        <Image style={styles.image} source={currentQuestion} />
      </View>

      <LinearGradient colors={['white', '#EBDDF6']} style={[styles.background, { flex: 4 }]}>
        <ScrollView style={{marginHorizontal: '10%', marginVertical: '5%'}}>
            <View style={styles.table}>
              {options.map(function (object, i) {
                return (
                <BigButton key={i} value={object} handleClick={handleClick} style={{
                  height: 4 / 9.5 * 0.2 * height,
                  width: width * 0.37,
                  marginVertical: '2%',
                  borderRadius: 20
                  } }/>  
                )
              })}
            </View>
        </ScrollView>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
  },
  title: {
    fontSize: 20 / 844 * height,
    alignSelf: 'center'
  },
  table: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around',
    borderRadius: 25,
    backgroundColor: '#eee2f8',
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
    justifyContent: 'space-between'},
});