import * as React from "react";
import { useState, useEffect  } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from "react-native";
import BigButton from '../components/BigButton';
import {LinearGradient} from 'expo-linear-gradient'
import questions from "../resources/data/questions";


export default function QuestionScreen({ navigation }) {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const options = ['Ap', 'Ba', 'Bl', 'Eo', 'Er', 'Lim', 'Mak', 'Meta']
  const realValues = ['Atipicni_promijelociti', 'Bazofil', 'Blast', 'Eozinofil',
  'Eritroblasti', 'Limfocit', 'Makrotrombociti', 'Metamijelocit']
  
  const ques = questions
  const data = ques

  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState({
    'Ap': 0, 'Ba': 0, 'Bl': 0, 'Eo': 0, 'Er': 0, 'Lim': 0, 'Mak': 0, 'Meta': 0
  });

  // index of the question
  const [index, setIndex] = useState(0);

  // selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (selectedAnswer !== null) {
      if (options.indexOf(selectedAnswer) == realValues.indexOf(currentQuestion?.class)) {
        points[selectedAnswer] = points[selectedAnswer] + 1
        console.log(points)
      }
    }
  }, [selectedAnswer]);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [index]);


  const handleClick = name => {
    setSelectedAnswer(name);
    setIndex(index + 1)
  };
  const currentQuestion = data[index];
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 1, backgroundColor: 'white'}} >
        <Text style={styles.title}>{index}/{totalQuestions}</Text>
      </View>

      <View style={{ flex: 4, backgroundColor: 'white', alignItems:'center'}} >
        <Image style={styles.image} source={currentQuestion.uri}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:4}]}>
        <View style={styles.table}>
          <View style={styles.column}>
            {options.map(function(object, i){
                if(i < 4){
                  return (
                    <View style={styles.cell}>
                      <BigButton type='2' key={i} name={object} small={true} handleClick={handleClick}/>
                    </View>);
                }
              })}
          </View>
          <View style={styles.column}>
            {options.map(function(object, i){
                if(i >= 4){
                  return (
                    <View style={styles.cell}>
                      <BigButton type='2' key={i} name={object} small={true} handleClick={handleClick}/>
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
    flexDirection:'row',
  },
  column: {
    flex: 1,
    flexDirection:'column', 
  },
  cell: {
    flex: 1,
    alignSelf:'stretch'
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  }
});