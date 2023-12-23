import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Svg, { Path, Circle, Text,G } from 'react-native-svg';
import NeutroPhilSvg from '../resources/svg-s/NeutroPhilSvg'


const CurvedPathWithCircles = ({ width, height, startXPortion, startYPortion, pathCount , onPress  }) => {
  const relativeHeight = height / 5; // Set a constant relativeHeight
  const componentHeight = pathCount * relativeHeight; // Calculate the component height
  const startX = startXPortion * width;
  const paths = [];
  const circles = [];
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  for (let i = 0; i < pathCount; i++) {
    const randomDirection = getRandomNumber(-5,5);
    const randomValue = getRandomNumber(2, 6);
    const randomMoveCircle = startX / randomValue * (randomDirection > 0 ? 1 : -1);
    const moveX = startX + (i % 2 === 0 ? width / 1.7 : -width / 1.7);
    const startY = startYPortion * height + relativeHeight * i;
    const endY = startY + relativeHeight;
    const circleX = startX + (i!= 0 ? randomMoveCircle : 0) ;
    const circleY = startY;

    paths.push(
      <Path
        key={`path-${i}`}
        d={`M ${startX} ${startY} C ${moveX} ${startY}, ${moveX} ${endY}, ${startX} ${endY}`}
        stroke="#C599E6"
        fill="transparent"
        strokeDasharray="6,9"
        strokeWidth="7" />
      );

    // Calculate the coordinates for the circle
    
    if(i!=4) {
    circles.push(
      <Circle key={`circle-${i}`} cx={circleX} cy={circleY} r={height/20} 
          stroke='rgba(127, 64, 176, 0.8)' // Set the outline color to dark purple
          strokeWidth="5"     // Adjust the outline width as desired
          fill='#EEE3F7' 
          onPress={() => onPress(i > 4 ? i : i + 1)}
       />
       
    );
    }else {
      
      circles.push(
          
          <G key={`phill1`} x={circleX-randomMoveCircle} y={circleY-relativeHeight/2}>
            <NeutroPhilSvg size={height*0.17} /> 
          </G>
        


      );


    }
    
    if(i!=4) {
    circles.push(
      <Text
        key={`text-${i}`}
        x={circleX}
        y={circleY}
        fontSize={height/35}
        fill="black"
        textAnchor="middle"
        alignmentBaseline="middle" // Center the text horizontally
    
      >
        {i>4 ? i : i+1}
      </Text>
    );
    }
  }

  return (
    <ScrollView style={{ height: componentHeight, backgroundColor: 'rgba(185, 185, 185,0.24)',borderRadius:32 }}>
      <View style={styles.container}>
        <Svg height={componentHeight} width={width}>
          {paths}
          {circles}
        </Svg>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CurvedPathWithCircles;
