import * as React from 'react';
import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';

const height = Dimensions.get('window').height
export default function ParamScreen2({ navigation }) {
  const [num, setNum] = useState(null);
  const stValues = [
    { value: '10' },
    { value: '90' },
    { value: '120' },
  ];

  const handleClickNum = value => {
    setNum(value)
  };

  const handleClickStart = value => {
      if(num != null){
        navigation.navigate('Question2', {num:num})
      }
  }

  const onPress = value => {
    navigation.navigate('Second')  
  }


  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circle}/>
          <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <SettingsSvg size={100 / 844 * height} style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:13}]}>
        <View style={{flexDirection: 'column',flex: 6}}>
          <View style={styles.box}>
            <Text style={styles.title}>Postavi vremenski limit</Text>
          </View>
          
          <View style={styles.box}/>
          <BigRadioButton style={{marginHorizontal: '3%'}} data={stValues} handleClick={handleClickNum}/>
          
          <View style={styles.box}/>
          <View style={styles.box}/>

          <View style={styles.box}>
            <BigButton value='Pokreni Vjezbu' style={styles.bigButton} handleClick={handleClickStart}/>
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
  },
  title: {
    fontSize: 25 / 844 * height,
    fontWeight: '600',
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    height: '70%',
    flexDirection: 'row'
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#9C53D4',
    borderRadius: Dimensions.get('window').width * 0.4,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    left: '37.5%',
    bottom: '11%',
    opacity: 0.2
  },
  svg: {
    position: 'absolute',
    left: '68%',
    top: '18%'
  }
});