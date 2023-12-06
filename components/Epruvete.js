import React from 'react';
import { View, StyleSheet } from 'react-native';
import EpruvetaSvg from '../resources/svg-s/EpruvetaSvg';

const Epruveta = ({ numberOfSVGs,svgWidth,svgHeight }) => {
  const renderSVGs = (count) => {
    const svgArray = [];
    for (let i = 0; i < count; i++) {
      svgArray.push(<EpruvetaSvg key={i} width = {svgWidth} height = {svgHeight} />);
    }
    return svgArray;
  };

  return (
    <View style={styles.container}>
      {renderSVGs(numberOfSVGs)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Epruveta;
