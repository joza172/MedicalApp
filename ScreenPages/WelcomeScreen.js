import NeutroPhilSvg from '../resources/svg-s/NeutroPhilSvg'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import Circle from '../components/Circle';
import {LinearGradient} from 'expo-linear-gradient'


const height = Dimensions.get('window').height
export default function WelcomeScreen({ navigation }) {
  
   useEffect(() => {
       setTimeout(() => {
           navigation.replace('Home');
        }, 3000); 
    }, []);
 
    
  return (
    <View style={styles.mainContainer}>

        <View style={{ flex: 2, backgroundColor: 'white'}} >
            <Circle size={0.25} style={{left: '75%'}}/>
            <Circle size={0.25} style={{bottom: '50%',left:'40%'}}/>
        </View>

        <LinearGradient colors={['white', '#EBDDF6' ]} style={styles.background}>
            <View style={styles.centeredContainer}>
                <NeutroPhilSvg size={height*0.3}/>
                <Text style={styles.title}>NeutroPhil</Text>
            </View>
            <View style={{ flex: 2}} >
                <Circle size={0.25} style={{right: '75%',top:'35%'}}/>
                <Circle size={0.25} style={{top: '60%'}}/>
            </View>
        </LinearGradient>

        
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  background: {
    flex: 4
  },
  centeredContainer: {
    flex: 1, 
    alignItems:'center'
      
  },
  title: {
    fontSize: height * 40 / 844,
    fontWeight: 'bold',
    marginLeft: '5%',
    textAlign:'center'
  },
});