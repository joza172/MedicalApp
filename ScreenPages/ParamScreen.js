import * as React from 'react';
import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import BigButton from '../components/BigButton';
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';

export default function ParamScreen({ navigation }) {
  const [num, setNum] = useState(null);
  const [type, setType] = useState(null);
  const stValues = [
    { value: '20' },
    { value: '50' },
    { value: '100' },
  ];
  
  const razValues = [
    { value: 'Fizio' },
    { value: 'Patio' },
    { value: 'Iznenadi me' },
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

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 2, backgroundColor: 'white'}} >
          <View style={{ flex: 3}}>
            <View style={[styles.circle, {bottom: '5%', left: '55%' , opacity: 0.2}]}/>
            <SettingsSvg style={{left: '68%', top: '18%'}}/>
          </View>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:6}]}>
        <View style={{flexDirection: 'column',flex: 6}}>
          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Izaberi broj stanica</Text>
          </View>
          <BigRadioButton style={{flex: 1}} data={stValues} handleClick={handleClickNum}/>

          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Izaberi vrstu razmaza</Text>
          </View>
          <BigRadioButton style={{flex: 1}} data={razValues} handleClick={handleClickType}/>
          
          <View style={{flexDirection: 'row', flex: 1}}/>
          
          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <BigButton value='Pokreni Vjezbu' style={{ flex: 1}} handleClick={handleClickStart}></BigButton>
          </View>
        </View>
       
        <View style={{ flex: 2 }} />
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
  circle: {
    position: 'absolute',
    backgroundColor: '#9C53D4',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
  }
});