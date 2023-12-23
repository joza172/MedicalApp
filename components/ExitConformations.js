import React, { useEffect } from 'react';
import { View, Text , StyleSheet,Dimensions } from 'react-native';
import BigButton from './BigButton';

const hh = Dimensions.get('window').height
const ww = Dimensions.get('window').width
const height = hh > ww ? ww : hh
const width = hh > ww ? hh : ww

const ExitConfirmation = ({ onConfirm, onCancel }) => {


  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Jesi li siguran da želiš{'\n'} završiti vježbu?</Text>
      </View>
      <View style={styles.buttonContainer}>
      <BigButton value="Da" handleClick={onConfirm} style={styles.BigButtonStyle} ></BigButton>
      <BigButton value="Ne" handleClick={onCancel} style={styles.BigButtonStyle} ></BigButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Adjust this value to cover the entire screen including margins
    height:'100%',
    width:'100%',
    zIndex: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: height / 2,
    justifyContent:'center',
  },
  textStyle:{
    fontSize:height*0.1,
    fontWeight:'bold',
    textAlign:'center'
  },
  buttonContainer:{
    height:height/2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  BigButtonStyle:{
    width:width*0.13,
    height:height*0.12,
    borderRadius: 25,
    marginVertical: '2%',
    marginHorizontal:'2%'
  }
});

export default ExitConfirmation;
