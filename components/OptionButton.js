import React, { useState } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";



const OptionButton = (props) => {

    const [selected, setSelected] = useState(false);


    
    return (
        <Pressable 
        onPress={() => setSelected(!selected)}
        style= {[
            {
            backgroundColor: selected
            ? 'blue'
            : 'white',
            },
            styles.rectanglePressable]}>
            <View style={styles.container}>
                <Text style={[styles.text]}>{props.value}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    rectanglePressable: {
        borderRadius: 50,
        padding: 10,
        //backgroundColor: "white",
        width: "30%",
        height: "95%",
        shadowColor: '#000000',
        elevation: 10,
    },
    text: {
        marginTop: "10%",
        flex: 1,
        fontWeight: "bold",
        color: 'black'
    },
    svg: {
        marginTop: "15%",
        flex: 3,
    },
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        height: '100%',
    }
})

export default OptionButton;