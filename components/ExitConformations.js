import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions, RootTagContext } from 'react-native';
import BigButton from './BigButton';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
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
    flex:5,
    justifyContent:'center'
  },
  textStyle:{
    fontSize:height*0.1,
    fontWeight:'bold',
    textAlign:'center'
  },
  buttonContainer:{
    flex:3,
    flexDirection:'row'
  },
  BigButtonStyle:{
    width:width*0.13,
    height:height*0.13,
    borderRadius: 25,
    marginVertical: '2%',
    marginHorizontal:'2%'
  }
});

export default ExitConfirmation;
