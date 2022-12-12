import { StyleSheet, Pressable, View, Text } from 'react-native';
import InfoSvg from '../resources/svg-s/InfoSvg';

const ResultButton = (props) => {
    return (
        <View style={[styles.rectangle, eval(props.value) < 0.5 ? {borderColor: '#E24646'}:{borderColor: '#36D69C'}]}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.value}</Text>
            <InfoSvg style={styles.svg}/>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        borderRadius: 25,
        padding: 10,
        borderWidth: 2,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    svg: {
        position: 'absolute',
        left: '90%',
        top: '20%'
    }
})

export default ResultButton;