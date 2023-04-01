import * as React from 'react';
import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';
import Circle from '../components/Circle';

const height = Dimensions.get('window').height
export default function ParamScreen({ navigation }) {
  const [num, setNum] = useState('50');
  const [type, setType] = useState('Patio');
  const stValues = [
    { value: '10' },
    { value: '50' },
    { value: '100' },
  ];
  
  const razValues = [
    { value: 'Fiziološki' },
    { value: 'Patološki' },
    { value: 'Razno' },
  ];

  const handleClickNum = value => {
    setNum(value)
  };

  const handleClickType = value => {
    setType(value)
  };

  const handleClickStart = value => {
      if(num != null && type != null){
        navigation.navigate('Question', {num:num, type:type})
      }
  }

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <Circle size={0.35} style={{left: '43%', top: '-10%'}}/>
          <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <SettingsSvg size={height * 0.12} style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={styles.background}>
        <View style={{flexDirection: 'column',flex: 6}}>
          <View style={styles.box}>
            <Text style={styles.title}>Izaberi broj stanica</Text>
          </View>
          <BigRadioButton style={{marginHorizontal: '3%', flex: 1}} data={stValues} handleClick={handleClickNum}/>

          <View style={styles.box}>
            <Text style={styles.title}>Izaberi vrstu razmaza</Text>
          </View>
          <BigRadioButton style={{marginHorizontal: '3%', flex: 1}} data={razValues} handleClick={handleClickType}/>
          
          <View style={styles.box}/>
          
          <View style={styles.box}>
            <BigButton value='Pokreni Vjezbu' style={styles.bigButton} handleClick={handleClickStart} size={0.08}></BigButton>
          </View>
        </View>
       
        <View style={{ flex: 1.5 }} />
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    width: '54%',
    height: '90%',
    borderRadius: 25,
  },
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
    flex:13
  },
  title: {
    fontSize: height * 25 / 844,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    height: '70%',
    flexDirection: 'row'
  },
  inputText: {
    color: '#9c53d4',
    fontWeight: 'bold',
  },
  svg: {
    position: 'absolute',
    left: '68%',
    top: '25%'
  }
});