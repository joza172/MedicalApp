import * as React from 'react';
import { useState,useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, ScrollView } from 'react-native';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import BigRadioButton from '../components/BigRadioButton';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function CellDescription({ navigation ,route }) {
  const [mainSrc, setMainSrc] = useState(null);
  const [visible, setVisible] = useState(false);
  const [but, setBut] = useState("Morfologija");
  const [hasUris,setHasUris] = useState(route.params.data.uris.length > 0 ? true : false )

  const stValues = [
    { value: 'Slike' },
    { value: 'Morfologija' },
  ];

  const handleClickButton = value => {
    setBut(value)
  };

 
  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={{flex: 1}}>
      {
        visible ? 
        <Pressable style={styles.bigImageContainer} 
            onPress={() => {
                  setVisible(false)
                  setMainSrc(null)
                }
            }>
          <Image style={styles.bigImage} source={mainSrc} />
        </Pressable>
        :
        <View/>
      }
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
              <Text style={styles.title}>{route.params.data.class_name.replace(/_/g, ' ')}</Text>
            </View>
            
            {hasUris ? (
            <BigRadioButton style={styles.radioButton} data={stValues} handleClick={handleClickButton}/>
          ) : null}

            {but=='Morfologija' ?
            <View style={styles.container}>  
              <Text style={styles.subTitle}>Morfologija</Text>
              <Text style={[styles.text, {color: 'black'}]}>
                {route.params.data.opcenito}
              </Text>
            </View> :
              <View style={styles.table}>
                {route.params.data.uris.map(function (object, i) {
                   
                    return (
                        <Pressable key={i}
                          onPress={() => {
                              setMainSrc(object)
                              setVisible(true)
                          }}>
                          <Image style={styles.image} source={object} />
                        </Pressable>
                      )
                   
                  })}
              </View>}
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bigImageContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  bigImage: {
    resizeMode: 'contain',
  },
  image: {
    resizeMode: 'contain',
    width: width / 4,
    height: width / 4,
    marginTop: '5%'
  },
  imageContainer: {

  },
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
    fontSize: 21 / 844 * height,
    fontWeight: '700',
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
      textAlign: 'left',
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