import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const AutoSuggestInput = ({onPress}) => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const wordList = ['Akutna mijeloična leukemija', 'Anemije', 'Mijelodisplazije', 'Mijeloproliferativne neoplazme','Mononukleoza','Lipemija','MDS','Hladni aglutinini','EDTA-pseudotrombocitopenija','KML', 'AML','Kronična mijeloična lekuemija','Mijelodisplastični sindrom'];

  const updateSuggestions = (input) => {
    const filteredSuggestions = wordList.filter((word) =>
      word.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(input) => {
          setText(input);
          updateSuggestions(input);
          onPress(input)
        }}
        value={text}
      />
      {text.length > 0 && suggestions.length > 0 && (
        <ScrollView style={styles.suggestionList}>
          {suggestions.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setText(item);
                setSuggestions([]);
                onPress(item)
              }}
            >
              <View style={styles.suggestionItem}>
                <Text style={styles.suggestionText}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: 0.8 * width,
    height: height / 15,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 51,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  suggestionList: {
    width: 0.7 * width,
    backgroundColor: 'transparent',
  },
  suggestionItem: {
    backgroundColor: 'white',
    padding: '5%',
    margin: '2%',
    borderRadius: 51,
    borderWidth: 1,
  },
  suggestionText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default AutoSuggestInput;
