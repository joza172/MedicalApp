import * as React from 'react';
import { useState,useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';
import fizio from '../resources/data/fizio';
import patio from '../resources/data/patio';


export default function CellDescription({ navigation ,route }) {
  const [uris, setUris] = useState([])
  const [description, setDescription] = useState('')
  const [but, setBut] = useState("Morfologija");
  const stValues = [
    { value: 'Morfologija' },
    { value: 'Slike' },
  ];

  const handleClickButton = value => {
    setBut(value)
  };

 
  const onPress = value => {
    navigation.navigate('Cell',{group:route.params.group})  
  }

  useEffect(() => {
    var patioIndex = patio.realValues.indexOf(route.params.name)
    var fizioIndex = fizio.realValues.indexOf(route.params.name)

    if(patioIndex != -1) {
      if(patio.questions[patioIndex].description!=undefined)
        {setDescription(patio.questions[patioIndex].description)}
        setUris(patio.questions[patioIndex].uris)
    } else {
      if(fizio.questions[fizioIndex].description!=undefined) 
      {setDescription(fizio.questions[fizioIndex].descritpion)}
      setUris(fizio.questions[fizioIndex].uris)
    }


  }, []);


  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <View style={{ flex: 7, backgroundColor: 'white'}} >
          <View style={styles.circle}/>
          <BackButton onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <SettingsSvg size={Dimensions.get('window').width * 0.25} style={styles.svg}/>
      </View>


      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:13}]}>
        <View style={{flexDirection: 'column',flex: 2}}>
          <View style={styles.box}>
            <Text style={styles.title}>{route.params.name}</Text>
          </View>
          
          <BigRadioButton style={{flex: 1}} data={stValues} handleClick={handleClickButton}/>

           {but=='Morfologija' ?
          <View style={styles.container}>  
            <Text style={styles.title}>Morfologija</Text>
            <Text style={[styles.subTitle, {color: 'black'}]}>
               {description}
            </Text>
          </View> : <View style={styles.container}>  
            <Text style={styles.title}>Slike</Text>
            <Text style={[styles.subTitle, {color: 'black'}]}>
              {uris}
            </Text>
          </View> }
          
        </View>
       
        <View style={{ flex: 1.5 }} />
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  subTitle: {
    textAlign:'center',
    color: '#7F40B0',
    fontSize: 20,
  },
  svg: {
    position: 'absolute',
    left: '68%',
    top: '18%'
  }
});