import { StatusBar } from 'expo-status-bar';
import SearchSvg from '../resources/svg-s/SearchSvg';
import * as React from "react";
import { useState } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from "react-native";
import BigButton from '../components/BigButton';
import {LinearGradient} from 'expo-linear-gradient'
import FakeMenuSvg from '../resources/svg-s/FakeMenuSvg';
import VeryBigButton from '../components/VeryBigButton';
import PlaySvg from '../resources/svg-s/PlaySvg';


export default function ChooseScreen({ navigation }) {
  const [rectangleTextInput, setRectangleTextInput] = useState();

  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 2, backgroundColor: 'white'}} >
          <View style={{ flex: 3}}>
            <View style={[styles.circle, {bottom: "5%", left: "55%" , opacity: 0.2}]}/>
            <PlaySvg color= '#9C53D4' style={{left: '72%', top: '18%'}}/>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>  
            <Text style={styles.title}>Izaberi vježbu</Text>
          </View>

      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:4}]}>
        <View style={{flexDirection: "column",flex: 6}}>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <VeryBigButton name="Klasicno diferenciranje" num="1" screenName = "Param" style={{ flex: 1}}></VeryBigButton>
          </View>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <VeryBigButton name="Kviz" num="4" screenName = "Param" style={{ flex: 1}}></VeryBigButton>
          </View>
        </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: '10%',
  },
  searchBar: {
    backgroundColor: '#EBDDF6',
    borderRadius: 60,
    height: "70%",
    flexDirection: "row"
  },
  inputText: {
    color: '#9c53d4',
    fontWeight: "bold",
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#9C53D4',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * 0.5,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
  }
});