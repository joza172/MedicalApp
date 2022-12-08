import * as React from 'react';
import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';

export default function ParamScreen({ navigation }) {
  const [num, setNum] = useState(null);
  const [type, setType] = useState(null);
  const stValues = [
    { value: '1' },
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

  const onPress = value => {
    navigation.navigate('Second', {num:num, type:type})  
  }


  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circle}/>
          <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <SettingsSvg size={Dimensions.get('window').width * 0.25} style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:13}]}>
        <View style={{flexDirection: 'column',flex: 6}}>
          <View style={styles.box}>
            <Text style={styles.title}>Izaberi broj stanica</Text>
          </View>
          <BigRadioButton style={{flex: 1}} data={stValues} handleClick={handleClickNum}/>

          <View style={styles.box}>
            <Text style={styles.title}>Izaberi vrstu razmaza</Text>
          </View>
          <BigRadioButton style={{flex: 1}} data={razValues} handleClick={handleClickType}/>
          
          <View style={styles.box}/>
          
          <View style={styles.box}>
            <BigButton value='Pokreni Vjezbu' style={{ flex: 1}} handleClick={handleClickStart}></BigButton>
          </View>
        </View>
       
        <View style={{ flex: 1.5 }} />
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
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
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * 0.75,
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.75,
    left: '40%',
    bottom: '15%',
    opacity: 0.2
  },
  svg: {
    position: 'absolute',
    left: '68%',
    top: '18%'
  }
});