import NeutroPhilSvg from '../resources/svg-s/NeutroPhilSvg';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, View, Text} from 'react-native';
import BigButton from '../components/BigButton';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/BackButton'
import Epruvete from '../components/Epruvete';
import VelikaEpruveta from '../resources/svg-s/VelikaEpruveta';
import Circle from '../components/Circle';

const { width, height } = Dimensions.get('window');

export default function StudyResultScreen({ navigation,route }) {

    const tempRez = Math.round(route.params.result * 100);
    const rez = tempRez > 0 ? tempRez : 0

    const onPress = () => {
        navigation.goBack()
      }

    const onButtonPressZavrsi = () => {
        navigation.navigate("Home")
    }

    const onButtonPressIspocetka = () => {
      navigation.navigate("CaseStudy")
  }

  return (
    <>
        <SafeAreaView style={{flex:0,backgroundColor: 'white' }} edges={['top']}/>
        <SafeAreaView style={{flex:1,backgroundColor: '#EBDDF6' }} edges={['bottom']}>
        
    
            <LinearGradient colors={['white', '#EBDDF6']} style={styles.mainContainer}>

                <View style={{flex:2}}>
                    <View style={styles.table}>
                        <BackButton size={height * 0.05} onPress={onPress}/>
                        <Epruvete numberOfSVGs={3} svgWidth={width*0.05} svgHeight={height*0.055}></Epruvete>
                    </View>
                </View>

                <View style={styles.topContainer}>
                    <Text style={styles.title}> Tvoj rezultat je:</Text>
                </View>

                <View style={styles.midContainer}>
                    <Circle size={0.38} back={'rgba(166, 149, 179, 0.9)'} style={{right:'30%',bottom:'20%'}}/>
                    <Circle size={0.3} back={'rgba(166, 149, 179, 1)'} style={{left:'35%',top:'35%'}}/>
                    <Circle size={0.13} back={'rgba(166, 149, 179, 0.8)'} style={{right:'55%',top:'70%'}}/>
                    <VelikaEpruveta width={width * 0.42} height={height * 0.55}/>
                    <Text style={styles.absTextContainer}>
                        {rez}%
                    </Text>
                </View>


                <View style={styles.botContainer}>
                   <Text style={{textAlign:'center',fontSize:height*0.02,fontWeight:'bold'}}>Čestitamo, uspješno si riješio/{"\n"}riješila ovu razinu.</Text>
                <BigButton
                    style={styles.buttonStyle}
                    value="Završi"
                    handleClick={onButtonPressZavrsi} 
                    fontSize={1} 
                    />
                    <BigButton
                    style={styles.buttonStyle}
                    value="Kreni ispočetka"
                    handleClick={onButtonPressIspocetka} 
                    fontSize={1} 
                    />
                </View>
            </LinearGradient>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    
  },
  topContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  midContainer: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botContainer: {
    flex: 6,
    justifyContent: 'space-evenly',
    alignItems:'center',
    flexDirection:'column',
  },
  title: {
    fontSize: height * 30 / 844,
    textAlign: 'center',
    fontWeight:'bold'
  },
  buttonStyle:{
    width:'60%',
    height:'25%'
  },
  table: {
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:'5%',
    marginBottom:'5%',
    flexDirection: 'row',
    borderRadius: 25,
    padding: '5%',
    backgroundColor:`rgba(194, 157, 231, 0.2)`,
    alignItems:'center'
    },
    absTextContainer:{
        position: 'absolute',
        left:'43%',
        color:'white',
        fontWeight:'bold',
        fontSize:height*0.09,
    }
});
