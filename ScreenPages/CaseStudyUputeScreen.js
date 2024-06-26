import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Pressable , ScrollView } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import Circle from '../components/Circle';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg';
import { SafeAreaView } from 'react-native-safe-area-context';
import DiseaseSvg from '../resources/svg-s/DiseaseSvg';

const height = Dimensions.get('window').height

export default function CaseStudyUputeScreen({ navigation , route }) {
  

  const handleClickStart = value => {
    navigation.navigate('CaseStudyMain',{index: route.params.index})
  }

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <>
    <SafeAreaView style={{flex:0,backgroundColor: 'white' }} edges={['top']}/>

    <SafeAreaView style={styles.container} edges={['bottom']}>

        <View style={{ flex:5 , backgroundColor:'#FFF'}} >
            <Circle size={0.35} style={{left: '45%', top: '-15%'}}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%'  }}/>
            <DiseaseSvg color= '#9C53D4' size={height * 0.15} style={styles.svg}/> 
        </View>

        <LinearGradient colors={['white', '#EBDDF6' ]}  style={styles.mainContainer}>
            <View style={{flex:1}}>  
                <Text style={styles.title}>Case Study</Text>
            </View>

            <View style={{flex:5,marginHorizontal:'2%',justifyContent:'center'}}>
              <Text style={styles.purpleText}>
              Upute{'\n'}
              </Text>
              <Text style={styles.text}>
                Mr. Neutrophil će ti prezentirati anamnezu pacijenta.{'\n'}
                Dobit ćeš uvid s kojim je simptomima došao u{'\n'}
                bolnicu, zatim uvid u laboratorijske nalaze{'\n'}
                te ćeš imati priliku pregledati razmaz periferne krvi. Nakon{'\n'}
                pregleda razmaza Mr. Neutrophil će ti prikazati{'\n'}
                rezultate specijalističke laboratorijske obrade,{'\n'}
                ukoliko oni budu dostupni.{'\n\n'}
                Cilj vježbe je pretpostaviti najvjerojatniju dijagnozu te nju upisati u završni izbornik.
              </Text>

            </View>
            <View style={{flex:2,alignItems:'center'}}>
              <BigButton style={styles.bigButton} value='Pokreni vježbu' handleClick={handleClickStart}/>
            </View>
        </LinearGradient>
    
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bigButton: {
   width:'60%',
   height:'60%',
   marginTop:'5%'
  },
  container: {
    flex: 1,
    backgroundColor:'#EBDDF6'
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
},
  purpleText:{
    textAlign: 'center',
    color: 'purple',
    fontWeight: '800',
  },

  title: {
    flex: 1,
    fontSize: 0.055 * height,
    fontWeight: '800',
    textAlign:'center'
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
  mainContainer: {
    flex:10,
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
    top: '20%'
  },
});