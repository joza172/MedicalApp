import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import questions from '../resources/data/questions'
import BackButton from '../components/BackButton'
import ResultSvg from '../resources/svg-s/ResultSvg'
import ImageRadioButton from '../components/ImageRadioButton'
import BigButton from '../components/BigButton'
import fizio from '../resources/data/fizio';


export default function QuestionScreen2({ navigation, route }) {

  const data = questions
  const vrsta = fizio


  const realValues = fizio.realValues
  const [time, setTime] = useState(route.params.num)
  const [timeStr, setTimeStr] = useState('0' + Math.floor(time / 60) + ':' + time % 60)
  const [rotation, setRotation] = useState((-36.6 + 163.2) + 'deg')
  const [real, setReal] = useState('...')
  const [uris, setUris] = useState([])
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [questionNum, setQuestionNum] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)

  

  //get random pictures for quiz
  useEffect(() => {
    var r = realValues[Math.floor(Math.random() * realValues.length)]
    var rUri = null
    var tempUris = []
    var rD = vrsta.questions
    
    while (tempUris.length < 3 || rUri == null) {

      var randomClass = Math.floor(Math.random() * rD.length)
      var randomUriNumber = Math.floor(Math.random() * rD[randomClass].uris.length)
      var rand = rD[randomClass].uris[randomUriNumber]
      
      if (rD[randomClass].class != r && tempUris.length < 3) {
        tempUris.push(rand)
      } else if(rUri == null) {
        rUri = rand
      }
    }
    tempUris.push(rUri)

    //shuffle tempUris
    var randomIndex = Math.floor(Math.random() * 4) 
    tempUris[3] = tempUris[randomIndex]
    tempUris[randomIndex] = rUri
    setCorrectAnswer(randomIndex)

    setReal(r)
    setUris(tempUris)
  }, [questionNum])


  let interval = null;
  //timer
  useEffect(() => {
    const myInterval = () => {
      if (time >= 1) {
        setTime((state) => state - 1);
        setTimeStr('0' + Math.floor(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + time % 60)
        setRotation((-36.6 + 163.2 * time/route.params.num) + 'deg')
      }
      if (time === 0) {
        navigation.navigate("Result2", {result:10, answers:answers})
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [time]);


  //handle click on option
  const handleClick = value => {
      setSelected(value)
  };

  //handle potvrda
  const handleClickGuess = value => {
    setReal('...')
    var temp = answers
    temp[questionNum] = {
      myChoice : selected,
      correctChoice : correctAnswer,
      allUris : uris
    }
    setQuestionNum(questionNum+1)
    setAnswers(temp)
    
  };

  //handle click on back button
  const onPress = value => {
    navigation.navigate("Param2")
  }

  const currentQuestion = data[0]
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
          <Text style={styles.inputText}>
            {timeStr}
          </Text>

      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background]}>
          <View>  
            <Text style={styles.title}>Odredi {real.replace('_', ' ')}: {route.params.result}</Text>
          </View>
          <ImageRadioButton uris={uris} handleClick={handleClick}/>
          <View style={styles.box}>
            <BigButton value='Potvrdi odabir' handleClick={handleClickGuess}/>
          </View>
          <View style={styles.box}/>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  background: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex:13
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '2%',
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    height: '70%',
    flexDirection: 'row'
  },
  inputText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9c53d4',
    position: 'absolute',
    left: '70%',
    top: '30%'
  },
  table: {
    paddingBottom: '10%',
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
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '45%'
  },
});