import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '../components/BackButton'
import ResultSvg from '../resources/svg-s/ResultSvg'
import ImageRadioButton from '../components/ImageRadioButton'
import BigButton from '../components/BigButton'
import fizio from '../resources/data/fizio';
import svaPitanja from '../resources/data/svaPitanja';

const height = Dimensions.get('window').height
export default function QuestionScreen2({ navigation, route }) {

  var level = route.params.type
  const vrsta = level === 'Pro' ? svaPitanja : fizio


  
  const [time, setTime] = useState(route.params.num)
  const [timeStr, setTimeStr] = useState('0' + Math.floor(time / 60) + ':' + time % 60)
  const [rotation, setRotation] = useState((-36.6 + 163.2) + 'deg')
  const [real, setReal] = useState('...')
  const [uris, setUris] = useState([])
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [questionNum, setQuestionNum] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [numOfCorrectAnswers,setNumOfCorrectAnswers] = useState(0)
  

  

  //get random pictures for quiz
  useEffect(() => {
    var rD = vrsta.questions

    var classIndex = Math.floor(Math.random() * rD.length)

    var r = rD[classIndex].class

    

    if(level==='Pro' && r === 'Stanice_Pelgera') {
      
      while(r === 'Stanice_Pelgera') {
        classIndex = Math.floor(Math.random() * rD.length)
        r = rD[classIndex].class
      }
    }

    var rUri = null
    var tempUris = []
    
    
    while (tempUris.length < 3 || rUri == null) {

      var randomClass = Math.floor(Math.random() * rD.length)

      if(level === 'Pro') {

        if(rD[classIndex].napKviz.indexOf(rD[randomClass].class)==-1 && rD[classIndex].class != rD[randomClass].class) {
          continue
        }

      }

      var randomUriNumber = Math.floor(Math.random() * rD[randomClass].uris.length)
      var rand = rD[randomClass].uris[randomUriNumber]
      
      if (rD[randomClass].class != r && tempUris.length < 3 && tempUris.indexOf(rand)==-1) {
        tempUris.push(rand)
      } else if(rUri == null && rD[randomClass].class == r) {
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
        navigation.navigate("Result2", {result:numOfCorrectAnswers / questionNum * 100, answers:answers})
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
    
    if(selected==correctAnswer) {
      setNumOfCorrectAnswers(numOfCorrectAnswers+1)
    } 

    var temp = answers
    temp[questionNum] = {
      myChoice : selected,
      correctChoice : correctAnswer,
      allUris : uris,
      realClass: real
    }
    setQuestionNum(questionNum+1)
    setAnswers(temp)
    setReal('...')
    
  };

  const onPress = () => {
    navigation.goBack()
  }

  
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circleOut}/>
          <View style={[styles.circlePer, {transform: [
            {translateX: Dimensions.get('window').width * 0.205},
            {rotate: rotation},
            {translateX: -Dimensions.get('window').width * 0.205}],}]}/>
          <View style={styles.circle}/>
          <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <Text style={styles.inputText}>
            {timeStr}
          </Text>

      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background]}>
          <View>  
            <Text style={styles.title}>Odaberi {real.replace('_', ' ')}: {route.params.result}</Text>
          </View>
          <ImageRadioButton uris={uris} handleClick={handleClick}/>
          <View style={styles.box}>
            <BigButton style={styles.bigButton} value='Potvrdi odabir' handleClick={handleClickGuess}/>
          </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    width: '54%',
    height: '80%',
    borderRadius: 15,
  },
  box: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%'
  },
  container: {
    flex: 1
  },
  background: {
    flex:13
  },
  title: {
    fontSize: 25 / 844 * height,
    fontWeight: '600',
    marginLeft: '2%',
  },
  inputText: {
    fontSize: 30 / 844 * height,
    fontWeight: '600',
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