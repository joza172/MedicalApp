import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import PlaySvg from '../resources/svg-s/PlaySvg'


export default function ChooseScreen({ navigation }) {
  const handleClick = value => {
    navigation.navigate('Param')
  }

  const onPress = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circle}/>
          <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <PlaySvg color= '#9C53D4' size={Dimensions.get('window').width * 0.25} style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:13}]}>
          <View style={{ flex: 1}}>  
            <Text style={styles.title}>Izaberi vježbu</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
            <BigButton value='Klasicno diferenciranje' num='1' small={true} handleClick={handleClick}/>
          </View>
          <View style={{flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
            <BigButton value='Kviz' num='4' small={true} handleClick={handleClick}/>
          </View>
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
    fontSize: 40,
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
    left: '65%',
    top: '18%'
  }
});