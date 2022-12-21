import * as React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import Circle from '../components/Circle';
import BackButton from '../components/BackButton';
import DoctorSvg from '../resources/svg-s/DoctorSvg';

const height = Dimensions.get('window').height
export default function HomeScreen({ navigation }) {
  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.mainContainer}>
          <View style={{ flex: 2}}>
            <Circle size={0.25} style={{left: '75%'}}/>
            <Circle size={0.25} style={{bottom: '50%', left: '50%'}}/>
            <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '10%'}}/>
          </View>
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center'}}>  
              <DoctorSvg/>
          </View>
          <View style={{ flex: 2, alignItems: 'center'}}>  
            <Text style={styles.title}>Stranica je u izradi</Text>
            <Text style={styles.text}>
            Ne brini, uskoro će cijela aplikacija biti  
            završena i moći ćeš na najjednostavniji 
            način upiti znanje iz hematologije.
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>  
            <Text style={styles.fusnote}>Doctor Illustration by Manypixels Gallery on IconScout</Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  title: {
    marginHorizontal: '10%',
    fontSize: height * 35 / 844,
    fontWeight: '600',
  },
  text: {
    marginHorizontal: '15%',
    fontSize: height * 15 / 844,
    fontWeight: '500',
    textAlign:'center'
  },
  fusnote: {
    marginHorizontal: '15%',
    fontSize: height * 10 / 844,
    fontWeight: '500',
    textAlign:'center',
    marginBottom: '3%'
  }
});

