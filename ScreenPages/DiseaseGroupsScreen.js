import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import PlaySvg from '../resources/svg-s/PlaySvg'
import Circle from '../components/Circle';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg';

const height = Dimensions.get('window').height
export default function DiseaseGroupsScreen({ navigation,route }) {
  const onPress = () => {
    navigation.goBack()
  }

  const handleClick = value => {
    navigation.navigate('Bolesti' , {name:value})
  }


  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <Circle size={0.35} style={{left: '43%', top: '-10%'}}/>
          <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <MicroscopeSvg color= '#9C53D4' size={height * 0.1} style={styles.svg}/> 
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={styles.background}>
          <View style={{ flex: 1}}>  
            <Text style={styles.title}>Izaberi skupinu bolesti</Text>
          </View>
          <View style={{flex: 10}}>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <BigButton value="Mijeloproliferativne neoplazme"  style={{height: '75%', width: '30%'}} handleClick={handleClick} size={0.1}/>
          </View>
          <View style={{flexDirection: 'row', flex: 3 , justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <BigButton value="Akutne leukemije"  style={{height: '75%', width: '30%', left : '10%'}} handleClick={handleClick} size={0.1}/>
            <BigButton value="Mijelodisplazije"  style={{height: '75%', width: '30%',right:'10%'}} handleClick={handleClick} size={0.1}/>
          </View>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <BigButton value="Iznenadi me"  style={{height: '75%', width: '30%'}} handleClick={handleClick} size={0.1}/>
          </View>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <BigButton value="Anemije"  style={{height: '75%', width: '30%', left:'10%'}} handleClick={handleClick} size={0.1}/>
            <BigButton value="Benigne bolesti leukocita"  style={{height: '75%', width: '30%',right:'10%'}} handleClick={handleClick} size={0.1}/>
          </View>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <BigButton value="Zloćudne bolesti limfocita"  style={{height: '75%', width: '30%'}} handleClick={handleClick} size={0.1}/>
          </View>
          </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    width: '95%',
    height: '95%',
  },
  container: {
    flex: 1
  },
  background: {
    flex: 13,
    paddingBottom: '7%'
  },
  title: {
    fontSize: 30 / 844 * height,
    fontWeight: 'bold',
    marginLeft: '10%',
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