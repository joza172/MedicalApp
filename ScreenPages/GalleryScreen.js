import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import PlaySvg from '../resources/svg-s/PlaySvg'
import SearchSvg from '../resources/svg-s/SearchSvg'
import GallerySvg from '../resources/svg-s/GallerySvg';


export default function GalleryScreen({ navigation }) {
  const groups = ['Eritrocitopoeza', 'Granulocitopoeza', 'Limfocitopoeza', 'Monocitopoeza', 'Megakariocitopoeza' ]
  const handleClick = value => {
    navigation.navigate('Cell', {group:value})
  }

  const onPress = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circle}/>
          <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <GallerySvg color= '#9C53D4' size={Dimensions.get('window').width * 0.25} style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={{flex:13}}>
          <View style={{ flex: 1.5}}>  
            <Text style={styles.title}>Galerija stanica</Text>
            <View style={[styles.searchBar, {alignItems: 'center'}]}>
                <SearchSvg style={{ flex: 1, marginLeft: '3%'}}/>
                <Text style={[styles.inputText ,{ flex: 9, marginLeft: '3%'}]}>josip</Text>
            </View>
          </View>
          {groups.map(function (object, i) {
            return (
              <Pressable key={i} style={styles.rectanglePressable} onPress={() => {
                    handleClick(object)
                }
              }>
                <Text style={[styles.text]}>{object}</Text>
              </Pressable>
            )
          })}

      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    height: '40%',
    flexDirection: 'row',
    marginHorizontal: '5%'
  },
  inputText: {
    color: '#9c53d4',
    fontWeight: 'bold',
  },
  rectanglePressable: {
    justifyContent: 'center',
    height: 200,
    flex: 1,
    borderRadius: 60,
    backgroundColor: '#9c53d4',
    elevation: 10,
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  text: {
      fontWeight: 'bold',
      color: '#FFFFFF',
      fontSize: 20,
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
    left: '65%',
    top: '18%'
  },
});