import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import PlaySvg from '../resources/svg-s/PlaySvg'
import SearchSvg from '../resources/svg-s/SearchSvg'
import GallerySvg from '../resources/svg-s/GallerySvg';

const height = Dimensions.get('window').height
export default function GalleryScreen({ navigation }) {
  const groups = ['Eritrocitopoeza', 'Granulocitopoeza', 'Limfocitopoeza', 'Monocitopoeza', 'Megakariocitopoeza' ]
  const handleClick = value => {
    navigation.navigate('Cell', {group:value})
  }

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circle}/>
          <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <GallerySvg size={height * 115 / 844} color= '#9C53D4' style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={{flex:14}}>
          <View style={{ flex: 2}}>  
            <Text style={styles.title}>Galerija stanica</Text>
            <View style={[styles.searchBar, {alignItems: 'center'}]}>
                <SearchSvg size={height * 0.025} style={{marginLeft: '3%'}}/>
                <Text style={[styles.inputText]}></Text>
            </View>
          </View>
          {groups.map(function (object, i) {
            return (
              <BigButton value={object} key={i} handleClick={handleClick} style={styles.bigButton}/>
            )
          })}

      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    flex: 1,
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  container: {
    flex: 1
  },
  title: {
    flex: 1,
    fontSize: 40 / 844 * height,
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