import { StatusBar } from 'expo-status-bar';
import SearchSvg from '../resources/svg-s/SearchSvg';
import * as React from "react";
import { useState } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from "react-native";
import BigButton from '../components/BigButton';
import {LinearGradient} from 'expo-linear-gradient'
import FakeMenuSvg from '../resources/svg-s/FakeMenuSvg';



export default function HomeScreen({ navigation }) {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 2, backgroundColor: 'white'}} >
          <View style={{ flex: 3}}>
            <View style={[styles.circle, {right: '75%', opacity: 0.2}]}/>
            <View style={[styles.circle, {bottom: '50%', opacity: 0.2}]}/>
            <FakeMenuSvg style={{left: '85%', top: '20%'}}/>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>  
            <Text style={styles.title}>Dobrodošli</Text>
          </View>

      </View>

      <LinearGradient colors={['white', '#EBDDF6' ]} style={[styles.background, {flex:4}]}>
        <View style={{flex: 1, alignItems: 'center', padding: '5%'}} >
            <View style={[styles.searchBar, {alignItems: 'center'}]}>
                <SearchSvg style={{ flex: 1, marginLeft: '3%'}}/>
                <Text style={[styles.inputText ,{ flex: 9, marginLeft: '3%'}]}>josip</Text>
            </View>
        </View>
        <View style={{flexDirection: "column",flex: 6}}>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "space-around", alignItems: "center"}}>
            <BigButton name="Vježbe" num="0" screenName = "Second" style={{ flex: 1}}></BigButton>
            <BigButton name="Razmazi" num="1" screenName = "Second" style={{ flex: 1}}></BigButton>
          </View>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "space-around", alignItems: "center"}}>
            <BigButton name="Galerija" num="2" screenName = "Second" style={{ flex: 1}}></BigButton>
            <BigButton name="Bolesti" num="3" screenName = "Second" style={{ flex: 1}}></BigButton>
          </View>
        </View>
        <View style={{ flex: 1 }} >

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
    marginLeft: '5%'
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