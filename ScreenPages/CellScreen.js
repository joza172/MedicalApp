import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import PlaySvg from '../resources/svg-s/PlaySvg'
import SearchSvg from '../resources/svg-s/SearchSvg'
import GallerySvg from '../resources/svg-s/GallerySvg';
import MetaSvg from '../resources/svg-s/cells/MetaSvg';
import galerija from '../resources/data/galerija';
import { G } from 'react-native-svg';

export default function CellScreen({ navigation , route}) {

  var groups = galerija[route.params.group]

  
  const handleClick = value => {
    navigation.navigate('Description',{
      group:route.params.group,
      name:value
      })
  }

  const onPress = () => {
    navigation.navigate('Gallery')
  }

  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
        <ScrollView>
            <View style={{height: Dimensions.get('window').height * 0.1}} >
                <BackButton onPress={onPress} style={{left: '3%', top: '40%'}}/>
            </View>

            <View style={{marginHorizontal: '5%'}}>
                <View style={{height: Dimensions.get('window').height * 0.15}}>  
                    <Text style={styles.title}>{route.params.group}</Text>
                    <View style={[styles.searchBar, {alignItems: 'center'}]}>
                        <SearchSvg style={{ flex: 1, marginLeft: '3%'}}/>
                        <Text style={[styles.inputText ,{ flex: 9, marginLeft: '3%'}]}>josip</Text>
                    </View>
                </View>
                {groups.map(function (object, i) {
                    return (
                    <Pressable  onPress={() => {handleClick(object)}} key={i} style={styles.rectanglePressable}>
                        <MetaSvg size={Dimensions.get('window').height * 0.1} style={styles.svg}/>
                        <Text style={[styles.text]}>{object}</Text>
                    </Pressable>
                    )
                })}

            </View>
        </ScrollView>
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