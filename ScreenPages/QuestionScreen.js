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


export default function QuestionScreen({ navigation }) {
  const [rectangleTextInput, setRectangleTextInput] = useState();

  return (
    <View>

        <Text style={styles.title}>Pitanja</Text>

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
    marginLeft: '15%',
    marginRight:"10%"
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