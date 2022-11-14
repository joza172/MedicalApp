import { StyleSheet, Pressable, View, Text } from "react-native";
import { useState } from "react";
import PlaySvg from "../resources/svg-s/PlaySvg";
import MicroscopeSvg from "../resources/svg-s/MicroscopeSvg"
import GallerySvg from "../resources/svg-s/GallerySvg";
import DiseaseSvg from "../resources/svg-s/DiseaseSvg";
import { useNavigation } from '@react-navigation/native';

const BigRadioButton = (props) => {
    const [userOption, setUserOption] = useState(null);

    return (
        <View style={{flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center"}}>
            {props.data.map((item) => {     
                return (
                    <Pressable
                    style={
                        [item.value === userOption ? styles.selected : styles.unselected, styles.rectanglePressable, {flex: 1}]
                    }
                    onPress={() => setUserOption(item.value)}>
                        <Text style={item.value === userOption ? styles.optionSelected : styles.optionUnselected}> {item.value}</Text>
                    </Pressable>
                );
                })
            }
        </View>
    ); 
    
};

const styles = StyleSheet.create({
    rectanglePressable: {
        borderRadius: 50,
        padding: 10,
        width: "30%",
        height: "95%",
        shadowColor: '#000000',
        elevation: 10,
    },
    optionUnselected: {
        marginTop: '10%',
        fontWeight: "bold",
        color: 'black',
        textAlign: 'center',
    },
    optionSelected: {
        marginTop: '10%',
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
    },
    unselected: {
        backgroundColor: 'white',
    },
    selected: {
        backgroundColor: '#9C53D4',
        borderRadius: 10,
    },
})

export default BigRadioButton;