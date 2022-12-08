import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import ResultSvg from '../resources/svg-s/ResultSvg'
import ResultButton from '../components/ResultButton';


export default function ResultScreen({ navigation , route }) {
  const handleClick = value => {
    navigation.navigate('Param')
  }

  const onPress = () => {
    navigation.navigate('Second')
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circle}/>
          <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <ResultSvg style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:13}]}>
          <View style={{ flex: 1}}>  
            <Text style={styles.title}>Tvoj rezultat je: 88%</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.column}>
                {route.params.options.map(function (object, i) {
                if (i < (Math.floor(route.params.options.length / 2))) {
                    return (
                    <View key={i} style={styles.cell}>
                        <ResultButton value={object} small={true} handleClick={handleClick} />
                    </View>);
                }
                })}
            </View>
            <View style={styles.column}>
                {route.params.options.map(function (object, i) {
                if (i >= (Math.floor(route.params.options.length / 2))) {
                    return (
                    <View key={i} style={styles.cell}>
                        <ResultButton value={object} small={true} handleClick={handleClick} />
                    </View>);
                }
                })}
            </View>
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
    fontSize: 25,
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
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * 0.75,
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.75,
    left: '40%',
    bottom: '15%',
    opacity: 0.2
  },
  svg: {
    position: 'absolute',
    left: '65%',
    top: '18%'
  },
  table: {
    padding: '10%',
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }
});