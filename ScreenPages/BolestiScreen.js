import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Pressable , ScrollView } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import Circle from '../components/Circle';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg';

const height = Dimensions.get('window').height
export default function BolestiScreen({ navigation , route }) {
  const groups = ['Bolest 1' , 'Bolest 2' , 'Bolest 1' , 'Bolest 2' ] 


  const naslov = route.params.name

  const handleClick = value => {
    navigation.navigate('InProgress')
  }

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={{ height: height * 0.32 , backgroundColor:'#FFF'}} >
            <Circle size={0.35} style={{left: '43%', top: '-10%'}}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
            <MicroscopeSvg color= '#9C53D4' size={height * 0.1} style={styles.svg}/> 
        </View>

        <LinearGradient colors={['white', '#EBDDF6' ]}  style={styles.mainContainer}>
            <View style={{height: height * 0.1, marginHorizontal: '5%'}}>  
                    <Text style={styles.title}>{naslov}</Text>
            </View>
            {groups.map(function (object, i) {
                return (
                    <BigButton value={object} key={i} handleClick={handleClick} style={{height: height * 0.1 , marginVertical : '5%'}}/>
                )
            })}

        </LinearGradient>
    </ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    marginVertical: height * 0.1,
    height : height * 0.5
  },
  container: {
    flex: 1
  },
  title: {
    flex: 1,
    fontSize: 30 / 844 * height,
    fontWeight: '600',
    marginHorizontal: '5%',
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    flex: 0.8,
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '1%'
  },
  inputText: {
    color: '#9c53d4',
    fontWeight: 'bold',
  },
  rectanglePressable: {
    justifyContent: 'center',
    flex: 1,
    borderRadius: 60,
    backgroundColor: '#9c53d4',
    elevation: 10,
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  text: {
      fontWeight: '600',
      color: '#FFFFFF',
      fontSize: 20 /  844 * height,
      marginHorizontal: '10%',
  },
  mainContainer: {
    minHeight: height * 0.9,
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
    left: '62%',
    top: '18%'
  },
});