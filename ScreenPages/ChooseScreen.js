import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import PlaySvg from '../resources/svg-s/PlaySvg'
import Circle from '../components/Circle';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg';

const height = Dimensions.get('window').height
export default function ChooseScreen({ navigation,route }) {

  const prevScreen = route.params.prevScreen
  const kvizGumbi = ['Klasicno diferenciranje','Kviz' , '4' ]
  const razmazGumbi = ['Fiziološki razmaz' , 'Patološki razmaz' , '3']
  var gumbi = prevScreen === 'Razmazi' ? razmazGumbi : kvizGumbi
  
  

  const handleClick = value => {
    if(value === 'Kviz'){
      navigation.navigate('Param2')  
    } else if (value === 'Klasicno diferenciranje') {
      navigation.navigate('Param')
    } else {
      navigation.navigate('DiseasesGroups')
    }
  }

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <Circle size={0.35} style={{left: '43%', top: '-10%'}}/>
          <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>

          {prevScreen === 'Razmazi' ? 
          <MicroscopeSvg color= '#9C53D4' size={height * 0.1} style={styles.svg}/> 
          :
          <PlaySvg color= '#9C53D4' size={height * 0.1} style={styles.svg}/> 
          }

      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={styles.background}>
          <View style={{ flex: 1}}>  
            <Text style={styles.title}>Izaberi vježbu</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
            <BigButton value={gumbi[0]} num='1' style={styles.bigButton} handleClick={handleClick} size={0.08}/>
          </View>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
            <BigButton value={gumbi[1]} num={gumbi[2]} style={styles.bigButton} handleClick={handleClick} size={0.1}/>
          </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    width: '80%',
    height: '90%',
    borderRadius:61
  },
  container: {
    flex: 1
  },
  background: {
    flex: 13,
    paddingBottom: '7%'
  },
  title: {
    fontSize: 40 / 844 * height,
    fontWeight: 'bold',
    textAlign:'center'
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
    top: '27%'
  }
});