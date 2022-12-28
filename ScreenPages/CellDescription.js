import * as React from 'react';
import { useState,useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput, ScrollView } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';
import data from '../resources/data/galerija';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function CellDescription({ navigation ,route }) {
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

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.header} >
            <View style={styles.circle}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
            <Image style={styles.imageCircle} source={route.params.data.naslovna}/>
        </View>

        <LinearGradient colors={['white', '#EBDDF6' ]} style={{
          minHeight: 0.65 * height
        }}>
            <View style={{height: 0.05 * height}}>
              <Text style={styles.title}>{route.params.data.class.replace('_',' ')}</Text>
            </View>
            
            <BigRadioButton style={styles.radioButton} data={stValues} handleClick={handleClickButton}/>

            {but=='Morfologija' ?
            <View style={styles.container}>  
              <Text style={styles.subTitle}>Morfologija</Text>
              <Text style={[styles.text, {color: 'black'}]}>
                {route.params.data.opcenito}
              </Text>

              <Text style={styles.subTitle}>Jezgra</Text>
              <Text style={[styles.text, {color: 'black'}]}>
                {route.params.data.jezgra}
              </Text>

              {
                route.params.data.slika1 != null ? 
                  <Image style={styles.imageBig} source={route.params.data.slika1} /> :
                  <View/>
              }

              <Text style={styles.subTitle}>Citoplazma</Text>
              <Text style={[styles.text, {color: 'black'}]}>
                {route.params.data.citoplazma}
              </Text>
              {
                route.params.data.slika2 != null ? 
                  <Image style={styles.imageBig} source={route.params.data.slika2} /> :
                  <View/>
              }

            </View> :
              <View style={styles.table}>
                {route.params.data.uris.map(function (object, i) {
                   
                    return (
                        <Image key={i} style={styles.image} source={object} />
                      )
                   
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
  imageBig : {
    resizeMode: 'contain',
    width: width / 2,
    height: width / 2,
    marginBottom: '10%',
    alignSelf: 'center'
  },
  container:{
    margin: '10%',
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
  imageCircle: {
    position: 'absolute',
    resizeMode: 'contain',
    borderRadius: Dimensions.get('window').width * 0.33,
    width: Dimensions.get('window').width * 0.66,
    height: Dimensions.get('window').width * 0.66,
    left: '44%',
    bottom: '20%',
  },
  subTitle: {
      textAlign: 'center',
      fontSize: 25 / 844 * height,
      fontWeight: '400',
      marginBottom: '10%'
  },
  text: {
      textAlign: 'justify',
      color: '#7F40B0',
      fontSize: 15 * 844 / height,
      fontWeight: '400',
      lineHeight: 18 * 844 / height,
      marginBottom: '10%'
  },
  svg: {
    position: 'absolute',
    left: '68%',
    top: '18%'
  }
});