import * as React from 'react';
import { useState,useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput, ScrollView } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';
import fizio from '../resources/data/fizio';
import patio from '../resources/data/patio';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function CellDescription({ navigation ,route }) {
  const [uris, setUris] = useState([])
  const [description, setDescription] = useState('')
  const [but, setBut] = useState("Slike");
  const stValues = [
    { value: 'Morfologija' },
    { value: 'Slike' },
  ];

  const handleClickButton = value => {
    setBut(value)
  };

 
  const onPress = () => {
    navigation.goBack()
  }

  useEffect(() => {
    var patioIndex = patio.realValues.indexOf(route.params.name)
    var fizioIndex = fizio.realValues.indexOf(route.params.name)

    if(patioIndex != -1) {
      if(patio.questions[patioIndex].description!=undefined)
        {setDescription(patio.questions[patioIndex].description)}
        setUris(patio.questions[patioIndex].uris)
    } else if(patioIndex != -1) {
      if(fizio.questions[fizioIndex].description!=undefined) 
      {setDescription(fizio.questions[fizioIndex].descritpion)}
      setUris(fizio.questions[fizioIndex].uris)
    }
  }, []);


  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.header} >
            <View style={styles.circle}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
            <SettingsSvg size={100 / 844 * height} style={styles.svg}/>
        </View>


        <LinearGradient colors={['white', '#EBDDF6' ]} style={{
          minHeight: 0.65 * height
        }}>
            <View style={{height: 0.05 * height}}>
              <Text style={styles.title}>{route.params.name}</Text>
            </View>
            
            <BigRadioButton style={styles.radioButton} data={stValues} handleClick={handleClickButton}/>

            {but=='Morfologija' ?
            <View style={styles.container}>  
              <Text style={styles.title}>Morfologija</Text>
              <Text style={[styles.subTitle, {color: 'black'}]}>
                {description}
              </Text>
            </View> :
              <View style={styles.table}>
                {uris.map(function (object, i) {
                   if(i < 15) {
                    return (
                        <Image key={i} style={styles.image} source={object} />
                      )
                   }
                  })}
              </View>}
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    margin: '5%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  header: { 
    height: 0.35 * height,
    backgroundColor: 'white'
  },
  image: {
    resizeMode: 'contain',
    width: width / 4,
    height: width / 4,
    marginTop: '5%'
  },
  container:{
    margin: '5%',
  },  
  radioButton: {
    height: 0.05 * height,
    marginHorizontal: '10%'
  },
  title: {
    textAlign:'center',
    fontSize: 25 / 844 * height,
    fontWeight: '600',
    color: '#7F40B0',
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