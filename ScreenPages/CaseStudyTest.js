import React from 'react';
import { View,StyleSheet,Text,Dimensions } from 'react-native';
import CurvedPathWithCircles from '../components/CurvedPathWithCircles' // Import the CurvedPathWithCircles component
import BackButton from '../components/BackButton'
import Epruvete from '../components/Epruvete'
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
export default function CaseStudyTest({ navigation }) {
  const circleCount = 5; // You can adjust this to change the number of circles

  const onPress = () => {
    navigation.goBack()
  }

  const handleCirclePress = (circleNumber) => {
    navigation.navigate("CaseStudyUpute")
  };


  return (
    
      <SafeAreaView style={{ flex: 1,flexDirection: 'column'}}>
        <View style={{flex:1}}>
            <View style={styles.table}>
                <BackButton size={height * 0.05} onPress={onPress}/>
                <Epruvete numberOfSVGs={3} svgWidth={width*0.05} svgHeight={height*0.055}></Epruvete>
            </View>
            

        </View>

        <View style={{flex:8,justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
            <CurvedPathWithCircles width={width*0.9} height={height} startXPortion={0.5} startYPortion={0.1} pathCount = {10} onPress={handleCirclePress} />
        </View>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

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

});

