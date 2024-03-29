import * as React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';

const Circle = (props) => {
    const {style, ...rest} = props;
    const bcolor = props.back == null ? '#9C53D4' : props.back;
    const styles = StyleSheet.create({
        circle: {
            position: 'absolute',
            backgroundColor: bcolor,
            opacity: 0.2,
            borderRadius: Dimensions.get('window').height * props.size / 2,
            width: Dimensions.get('window').height * props.size,
            height: Dimensions.get('window').height * props.size
          }
    })
    
    return(
        <View style={[styles.circle, style]}/>
    )
}



export default Circle