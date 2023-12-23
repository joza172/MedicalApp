import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, ScrollView } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import SearchSvg from '../resources/svg-s/SearchSvg'
import galerija from '../resources/data/galerija'
import GalleryButton from '../components/GalleryButton'
import data from '../resources/data/svaPitanja'

const height = Dimensions.get('window').height
export default function CellScreen({ navigation , route}) {

  var groups = galerija[route.params.group]
  
  const handleClick = value => {
    var blasti = ['Limfoblast','Monoblast','Mijeloblast']
    var index2 = blasti.indexOf(value.class)
    var index = galerija.realValues.indexOf(value.class) 

    if(index != -1 || index2 != -1){
      navigation.navigate('Description',{
        data:value
      })
    } else {
      navigation.navigate('InProgress')
    }
  }

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={{height: height * 0.1}} >
                <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '40%'}}/>
            </View>

            <LinearGradient colors={['white', '#EBDDF6' ]}  style={styles.mainContainer}>
                <View style={{height: height * 0.08, marginHorizontal: '5%'}}>  
                        <Text style={styles.title}>{route.params.group}</Text>
                </View>
                {groups.map(function (object, i) {
                    return (
                      <GalleryButton key={i} handleClick={handleClick} value={object}/>
                    )
                })}

            </LinearGradient>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: height * 0.9,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 40 / 844 * height,
    fontWeight: 'bold',
    textAlign:'center'
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    height: Dimensions.get('window').height * 0.05,
    flexDirection: 'row',
  },
  inputText: {
    color: '#9c53d4',
    fontWeight: 'bold',
  },
  rectanglePressable: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  text: {
      fontWeight: 'bold',
      color: '#9c53d4',
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
    right: '76%'
  },
});