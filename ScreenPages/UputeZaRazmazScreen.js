import * as React from 'react';
import BigButton from '../components/BigButton'
import BackButton from '../components/BackButton'
import { Dimensions, StyleSheet, View, Text, Pressable , ScrollView } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import Circle from '../components/Circle';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg';
import bolesti from '../resources/data/bolesti';

const height = Dimensions.get('window').height
export default function UputeZaRazmazScreen({ navigation , route }) {
  

  const naslov = route.params.name

  const handleClickStart = value => {
    navigation.navigate('Zoom' , {name:route.params.name})
  }

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

        <View style={{ height: height * 0.32 , backgroundColor:'#FFF'}} >
            <Circle size={0.35} style={{left: '43%', top: '-10%'}}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
            <MicroscopeSvg color= '#9C53D4' size={height * 0.15} style={styles.svg}/> 
        </View>

        <LinearGradient colors={['white', '#EBDDF6' ]}  style={styles.mainContainer}>
            <View style={{height: height * 0.1, marginHorizontal: '5%'}}>  
                    <Text style={styles.title}>{naslov}</Text>
            </View>
            <View>
            <Text style={styles.text}>
            Dobrodošao na izbornik za diferenciranje. U ovoj vježbi imaš priliku iskusiti digitalno diferenciranje razmaza.{'\n\n'}

            Upute:{'\n\n'}

            Zaslon će ti se zaokrenuti i moći ćeš pregledati razmaz i diferenciati 100 stanica*.  
            *neki razmazi nemaju 100 stanica u slici, vježba će automatski završiti kad izbrojiš sve stanice.{'\n\n'}
            Pomoću prstiju se krećeš po razmazu i jednostavnim pokretima možeš povećavati ili smanjivati sliku.{'\n\n'}
            Rezultati će biti prikazani u postotcima.
            </Text>

            </View>

            <BigButton style={styles.bigButton} value='Pokreni Vjezbu' handleClick={handleClickStart}/>

        </LinearGradient>
    
    </View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    marginVertical: height * 0.1,
    height : height * 0.1
  },
  container: {
    flex: 1
  },
  title: {
    flex: 1,
    fontSize: 30 / 844 * height,
    fontWeight: '600',
    marginHorizontal: '5%',
    textAlign:'center'
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    flex: 0.8,
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '1%'
  },
  inputText: {
    color: '#9c53d4',
    fontWeight: 'bold',
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
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15 * 844 / height,
    fontWeight: '400',
    lineHeight: 18 * 844 / height,
    marginBottom: '10%'
},
  mainContainer: {
    minHeight: height * 0.9,
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