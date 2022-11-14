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
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import OptionButton from '../components/OptionButton';


export default function ParamScreen({ navigation }) {
  const [rectangleTextInput, setRectangleTextInput] = useState();

  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 2}} >
          <View style={{ flex: 3}}>
            <View style={[styles.circle, {bottom: "5%", left: "55%" , opacity: 0.2}]}/>
            <SettingsSvg style={{left: '68%', top: '18%'}}/>
          </View>
      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:6}]}>
        <View style={{flexDirection: "column",flex: 6}}>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.title}>Izaberi broj stanica</Text>
          </View>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <OptionButton name="stanice_0" value = "0" style={{ flex: 1}}></OptionButton>
            <OptionButton name="stanice_50" value = "50" style={{ flex: 1}}></OptionButton>
            <OptionButton name="stanice_100" value = "100" style={{ flex: 1}}></OptionButton>
          </View>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.title}>Izaberi vrstu razmaza</Text>
          </View>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <OptionButton  value = "Fizio" style={{ flex: 1}}></OptionButton>
            <OptionButton  value = "Pato" style={{ flex: 1}}></OptionButton>
            <OptionButton  value = "Iznenadi me" style={{ flex: 1}}></OptionButton>
          </View>
          <View style={{flexDirection: "row", flex: 1}}>
          
          </View>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <BigButton name="Pokreni Vjezbu" screenName = "Question" style={{ flex: 1}}></BigButton>
          </View>
        </View>
       

        <View style={{ flex: 2 }} >

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
    fontSize: 20,
    fontWeight: "bold",
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
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
  }
});