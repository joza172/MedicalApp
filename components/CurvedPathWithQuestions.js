// CurvedPathWithQuestions.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView,Dimensions,KeyboardAvoidingView} from 'react-native';
import { Text as RNText } from 'react-native';
import Svg, { Path,Circle,Text } from 'react-native-svg';
import QuestionComponent from './QuestionComponent';
import NeutroPhilSvg from '../resources/svg-s/NeutroPhilSvg'
import BigButton from './BigButton';
import AutoSuggestInput from './AutoSuggestInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const { width, height } = Dimensions.get('window');
const CurvedPathWithQuestions = ({
  width,
  height,
  startXPortion,
  startYPortion,
  pathCount,
  firstQuestionDataArray,
  secondQuestionDataArray,
  thirdQuestionDataArray,
  onPressQuestion,
  onCirclePress,
  onEnd,
  cases,
  inputFunction
}) => {
  const circleText = ["Pogledaj nalaze", "Pogledaj stanice", "Potvrdne pretrage"]

  const questionHeight = firstQuestionDataArray.length *(height/3)
  const secondQHeight = secondQuestionDataArray.length *(height/3)
  

  const relativeHeight = height / 3;
  const componentHeight = pathCount * relativeHeight;
  const startX = startXPortion * width;
  const paths = [];
  const circles = [];
  const lastCircle=[];
  const texts = [];

 
  for (let i = 0; i < pathCount; i++) {
   
   
    const moveX = startX + (i % 2 === 0 ? width / 1.7 : -width / 1.7);
    const startY = startYPortion * height + relativeHeight * i;
    const circleX = startX 
    const circleY = startY;
    const circleIndex = circles.length + lastCircle.length
    
    paths.push(
      <Path
        key={`path-${i}`}
        d={`M ${startX} ${startY} C ${moveX} ${startY}, ${moveX} ${startY + relativeHeight}, ${startX} ${startY + relativeHeight}`}
        stroke="#C599E6"
        fill="transparent"
        strokeDasharray="6,9"
        strokeWidth="7"
      />
    );
    
    if(circleY > (questionHeight+relativeHeight) && circles.length < 2) {
      circles.push(
          <Circle key={`circle-${circleIndex}`} cx={circleX} cy={circleY} r={height/35} 
              stroke='#C599E6' // Set the outline color to dark purple
              strokeWidth="5"     // Adjust the outline width as desired
              fill='rgba(194, 157, 231, 0.6)' 
              onPress={() => onCirclePress(circleText[circleIndex])}
          />
        );
        texts.push(
          <Text
            key={`text-${circleIndex}`}
            x={circleX}
            y={circleY+height/13}
            fontSize={height/35}
            textAnchor="middle"
            alignmentBaseline="middle" // Center the text horizontally
          >
            {circleText[circleIndex]}
          </Text>
        );

    }

    if(circleY > (questionHeight+secondQHeight+(relativeHeight*3)) && lastCircle.length < 1) {
      lastCircle.push(
        <Circle key={`circle-${circleIndex}`} cx={circleX} cy={circleY} r={height/35} 
            stroke='#C599E6' // Set the outline color to dark purple
            strokeWidth="5"     // Adjust the outline width as desired
            fill='rgba(194, 157, 231, 0.6)' 
            onPress={() => onCirclePress(circleText[circleIndex])}
         />
         
      );

      texts.push(
        <Text
          key={`text-${circleIndex}`}
          x={circleX}
          y={circleY+height/13}
          fontSize={height/35}
          textAnchor="middle"
          alignmentBaseline="middle" // Center the text horizontally
        >
          {circleText[circleIndex]}
        </Text>
      );
    }
    

  }

  const renderQuestionComponents = (questionDataArray,startPosition) => {
    let hh = startPosition
    return questionDataArray.map((questionData, index) => {
        hh+=height/3
      return (
        <View key={`question-${index}` } style={[styles.questionContainer,{top:hh}]} >
          <QuestionComponent {...questionData} onPress={onPressQuestion} />
        </View>
      );
    });
  };
  


 

  return (
    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
>
    <KeyboardAwareScrollView>

   

    <View style = {{flex:6,flexDirection:'row',height:height/3}}>
          
          <View style={{flex:2,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-end'}}>
            <NeutroPhilSvg size={height*0.17} circles={true}/>
          </View>
          <View style={{flex:3,flexDirection:'column',justifyContent:'center',alignItems:'center',height:'60%',marginTop:'5%'}}>
            <ScrollView style={styles.bubbleContainer}>
              <RNText style={{textAlign:'center',padding:'1%'}}>
                  {cases.uvodni_text}
              </RNText>
            </ScrollView>
          </View>

        </View>
        <View style={{flex:2,alignItems:'center'}}>
        <RNText style={{fontSize:height/25,fontWeight:'bold'}}>Započnimo</RNText>
        </View>
      <View style={styles.container}>
        <Svg height={componentHeight} width={width}>
          {paths}
          {circles}
          {lastCircle}
          {texts}
        </Svg>
        {renderQuestionComponents(firstQuestionDataArray, -height / 3 + height / 9)}
        {renderQuestionComponents(secondQuestionDataArray, questionHeight + 2.5 * relativeHeight)}
        {renderQuestionComponents(thirdQuestionDataArray, questionHeight + secondQHeight + (relativeHeight * 4))}

      </View>

      <View style = {{flex:1,flexDirection:'row',height:height/4}}>

          <View style={{flex:3,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-end'}}>
            <NeutroPhilSvg size={height*0.13} circles={true}/>
          </View>

          <View style={{flex:7,flexDirection:'column',justifyContent:'center',alignItems:'center',height:'50%',marginTop:'5%'}}>
            <ScrollView style={styles.bubbleContainer}>
              <RNText style={{textAlign:'center',padding:'1%'}}>
              Kada si pregledao/la sve nalaze i razmaz periferne krvi, možeš li sada pretpostaviti o kojoj se dijagnozi radi?
              </RNText>
            </ScrollView>
          </View>
        
      </View>

      <View style = {{flex:1,flexDirection:'column',height:height/2}}>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
          <RNText style={{fontSize: ((height/3)/2)/5  }}>Unesi svoj odgovor:</RNText>
        </View>

        <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            <AutoSuggestInput onPress={inputFunction}/>
        </View>

        <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            <BigButton
          value="Završi test"
          handleClick={onEnd} 
          style={styles.newButton}
          fontSize={1} 
        />
        </View>



      </View>


    </KeyboardAwareScrollView>
    </KeyboardAvoidingView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionContainer:{
    position:'absolute',
   alignItems:'center',
   height:height*0.3,
   width:'100%',
  },
  bubbleContainer:{
    borderWidth:3,
    borderRadius:20,
     width:'90%',
     borderColor:'rgba(194, 157, 231, 1)',
     
    
  },
  newButton: {
    width: '80%', // Match the width of the ScrollView
    height: '50%', // Set the desired height
    // Add other styles as needed
  },
});

export default CurvedPathWithQuestions;
