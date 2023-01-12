import * as React from 'react';
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, ScrollView } from 'react-native'
import { useState, useEffect} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import GalleryButton from '../components/GalleryButton';
import QuestionSvg from '../resources/svg-s/QuestionSvg'
import ResultButton from '../components/ResultButton'
import galerija from '../resources/data/galerija'
import data from '../resources/data/svaPitanja'


const height = Dimensions.get('window').height
export default function ResultInfoScreen({ navigation , route }) {
  const [object, setObject] = useState(findObject(route.params.name))
  const [kratice,setKratice] = useState([])

  useEffect(() => {

    
    if(object !== undefined && object.linkovi !== undefined ) {
    var temp=[]
    
    for(var i = 1; i < object.linkovi.length;i++) {
    
      var ind = data.realValues.indexOf(object.linkovi[i])
      
      temp.push(data.options[ind])
      
    }
    setKratice(temp)
  }
  }, []);


  const onPress = () => {
    navigation.goBack()
  }

  const handleClick = value => {
    var index = data.realValues.indexOf(value.class) 
    if(index != -1){
      navigation.navigate('Description',{
        data:value,
        uris:data.questions[index].uris
      })
    } else {
      navigation.navigate('InProgress')
    }
  }

  function findObject(name){
    var rotimPeder
    Object.keys(galerija).forEach(function(key) {
      for(var i = 0; i < galerija[key].length; i++){
        if(galerija[key][i].class == name){
          rotimPeder = galerija[key][i]
        }
      }
    });
    return rotimPeder
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <View style={{ height: 0.35 * height}} >
          <View style={styles.circle}/>
          <BackButton  size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          <QuestionSvg size={height * 108 / 844} style={styles.svg}/>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={{minHeight: 0.65 * height}}>
          <View style={[styles.container, {height: 0.1 * height}]}>  
            <Text style={styles.title}>Gdje sam pogriješio?</Text>
            <Text style={styles.subTitle}>{route.params.name.replace('_', ' ')}</Text>
          </View>

          <View style={{height: 0.3 * height}}>  
            <LinearGradient start={{ x: 1, y: 0 }} and end={{ x: 0, y: 0 }} colors={['white', '#EBDDF6' ]} style={[styles.background]}>
                <View style={styles.box}>
                    <Text style={styles.text}>Prikazani</Text>
                    <View style={styles.smallCircle}>
                        <Text style={styles.text}>{route.params.num}</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Točni</Text>
                    <View style={styles.smallRedCircle}>
                        <Text style={styles.text}>{route.params.correct}</Text>
                    </View>
                </View>
            </LinearGradient>
          </View>
          {
            object != null && object.linkovi != null?
          <View style={styles.container}>  
            <Text style={styles.title}>Uoči razlike!</Text>
            <Text style={[styles.subTitle, {color: 'black', fontWeight: '400'}]}>
              Često dolazi do zamjene {data.options[data.realValues.indexOf(route.params.name)]} i
               {kratice.map(function(object,i) {
                
                if(i==kratice.length - 1) {
                  return(
                  <Text style={[styles.subTitle, {color: 'black', fontWeight: '400'}]}> {kratice[i]}. </Text>
                )
                }
                else {
                return(
                  <Text style={[styles.subTitle, {color: 'black', fontWeight: '400'}]}> {kratice[i]}, </Text>
                )
                }
               })}

              Kako bi lakše uočio razlike u sitnim detaljima izdvojili smo slike koje preporučamo da pogledaš.
            </Text>
          </View>
          :
          <Text style={styles.titleLinks}>
                    Pusite mi kurac
          </Text>
          }
          
            {
              object != null && object.linkovi != null?
                <View style={styles.linksContainer}>
                  <Text style={styles.titleLinks}>
                    Pogledaj slike
                  </Text>

                  {object.linkovi.map(function (object, i) {
                    return (
                      <GalleryButton key={i} handleClick={handleClick} value={findObject(object)}/>
                    )
                })}
                </View>  
                :
                  <Text style={styles.titleLinks}>
                    Pusite mi kurac
                  </Text>
            }
      </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  linksContainer: {
    marginVertical: '5%'
  },
  titleLinks: {
    fontSize: 25 / 844 * height,
    fontWeight: '600',
    marginLeft: '10%',
  },
  text: {
    padding: '5%',
    fontSize: 20 / 844 * height,
    fontWeight: '400'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
  container: {
    height: 0.15 * height,
    marginHorizontal: '10%',
  },
  background: {
    flexDirection: 'row',
    borderRadius: 25,
    height: '90%',
    marginHorizontal: '10%',
    elevation: 5,              // Android
    shadowColor: '#030002',    // Android, iOS & Web
    shadowOpacity: 0.25,       // iOS & Web
    shadowRadius: 5
  },
  title: {
    fontSize: 25 / 844 * height,
    fontWeight: '600',
  },
  subTitle: {
    color: '#7F40B0',
    fontSize: 20 / 844 * height,
    fontWeight: '600'
  },
  svg: {
    position: 'absolute',
    left: '65%',
    top: '18%'
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#EBDDF6',
    borderRadius: Dimensions.get('window').width * 1.5,
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.75,
    left: '40%',
    bottom: '14%'
  },
  smallCircle: {
    backgroundColor: 'white',
    borderRadius: Dimensions.get('window').width * 52.5/390,
    width: Dimensions.get('window').width * 105/390,
    height: Dimensions.get('window').width * 105/390,
    borderWidth: 8,
    borderColor: '#7F40B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallRedCircle: {
    backgroundColor: 'white',
    borderRadius: Dimensions.get('window').width * 52.5/390,
    width: Dimensions.get('window').width * 105/390,
    height: Dimensions.get('window').width * 105/390,
    borderWidth: 8,
    borderColor: '#7F40B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
