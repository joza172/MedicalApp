import SearchSvg from '../resources/svg-s/SearchSvg';
import * as React from 'react';
import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import BigButton from '../components/BigButton';
import Circle from '../components/Circle';
import {LinearGradient} from 'expo-linear-gradient'
import FakeMenuSvg from '../resources/svg-s/FakeMenuSvg';

const height = Dimensions.get('window').height
export default function HomeScreen({ navigation }) {
  const handleClick = value => {
    if(value === 'Galerija'){
      navigation.navigate('Gallery')
    } else if(value === 'Vježbe'){
      navigation.navigate('Second')
    } else {
      navigation.navigate('InProgress')
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 2, backgroundColor: 'white'}} >
          <View style={{ flex: 3}}>
            <Circle size={0.25} style={{right: '75%'}}/>
            <Circle size={0.25} style={{bottom: '50%'}}/>
            <FakeMenuSvg size={height * 0.055} style={{left: '85%', top: '15%'}}/>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>  
            <Text style={styles.title}>Dobrodošli</Text>
          </View>

      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={styles.background}>
        <View style={{flex: 1, alignItems: 'center', padding: '5%'}} >
            <View style={[styles.searchBar, {alignItems: 'center'}]}>
                <SearchSvg size={height * 0.025} style={{marginLeft: '3%'}}/>
                <Text style={[styles.inputText]}></Text>
            </View>
        </View>
        <View style={{flexDirection: 'column',flex: 6}}>
          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <BigButton value='Vježbe' num='0'  handleClick={handleClick} style={styles.bigButton} size={0.08}/>
            <BigButton value='Razmazi' num='1' handleClick={handleClick} style={styles.bigButton} size={0.08}/>
          </View>
          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <BigButton value='Galerija' num='2' handleClick={handleClick} style={styles.bigButton} size={0.08}/>
            <BigButton value='Bolesti' num='3' handleClick={handleClick} style={styles.bigButton} size={0.09}/>
          </View>
        </View>
        <View style={{ flex: 1 }} >

        </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  background: {
    flex: 4
  },
  title: {
    fontSize: height * 40 / 844,
    fontWeight: 'bold',
    marginLeft: '5%'
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
    flex: 9,
    marginLeft: '3%'
  },
  bigButton: {
    width: '45%',
    height: '95%',
  }
});

