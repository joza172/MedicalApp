import { Dimensions, StyleSheet, Pressable, View, Text } from 'react-native';
import { useState } from 'react';


const height = Dimensions.get('window').height
const BigRadioButton = (props) => {
    const {style, ...rest} = props;
    const handleClick = name => {
        props.handleClick(name);
        setUserOption(name)
    };

    const [userOption, setUserOption] = useState(props.data[1].value);

    return (
        <View style={[styles.container, style]}>
            {props.data.map((item, i) => {     
                return (
                    <Pressable
                    key={item.value}
                    style={
                        [item.value === userOption ? styles.selected : styles.unselected, styles.rectanglePressable]
                    }
                    onPress={() => handleClick(item.value)}>
                        <Text style={[styles.text, item.value === userOption ? styles.optionSelected : styles.optionUnselected]}> {item.value}</Text>
                    </Pressable>
                );
                })
            }
        </View>
    ); 
    
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 30,
        flexDirection: 'row',
        shadowColor: '#000000',
        elevation: 30,
    },
    rectanglePressable: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '100%',
        flex: 1
    },
    text: {
        fontSize: height * 19 / 844,
        fontWeight: '700',
    },
    optionUnselected: {
        color: 'black',
    },
    optionSelected: {
        color: 'white',
    },
    unselected: {
        backgroundColor: 'white',
    },
    selected: {
        backgroundColor: '#9C53D4',
        shadowColor: '#000000',
        elevation: 10,
    },
})

export default BigRadioButton;