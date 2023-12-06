import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const QuestionComponent = ({ question, answers, correctAnswer, onPress }) => {

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswerPress = (answer) => {
    // Update the selected answer
    setSelectedAnswer(answer);

    // Call the provided onPress function
    const isCorrect = answer === correctAnswer;
    onPress(isCorrect);

    // If the answer is incorrect, reset the selected answer after a delay
    if (!isCorrect) {
      setTimeout(() => {
        setSelectedAnswer(null);
      }, 1000); // Adjust the delay as needed
    }
  };

  return (
    <View  style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswer === answer &&
                (answer === correctAnswer
                  ? styles.correctAnswer
                  : styles.incorrectAnswer),
            ]}
            onPress={() => handleAnswerPress(answer)}
            disabled={selectedAnswer !== null} // Disable further clicks after selecting an answer
          >
            <Text style={styles.answerText} adjustsFontSizeToFit={true} numberOfLines={2}>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: '2%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    margin: '2%',
    height:'100%',
  },
  question: {
    fontSize: 18 * height/840,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  answersContainer: {
      flex:1,
      flexDirection:'column',
     justifyContent:'center',
     
  },
  answerButton: {
    backgroundColor:'rgba(255, 255, 255, 0.8)',
    padding: '2%',
    borderRadius: 15,
    marginVertical: '1%',
    width:'100%',
    height:'24%',
    justifyContent:'center'
  },
  answerText: {
    color: 'black',
    padding:'1%',
  },
  correctAnswer: {
    backgroundColor: 'green',
  },
  incorrectAnswer: {
    backgroundColor: 'red',
  },
});

export default QuestionComponent;
