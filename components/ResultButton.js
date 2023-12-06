import { Dimensions, StyleSheet, Pressable, View, Text } from 'react-native';
import InfoSvg from '../resources/svg-s/InfoSvg';

const height = Dimensions.get('window').height
const ResultButton = (props) => {
    const {style, ...rest} = props;
    return (
        <Pressable onPress={() => {props.handleClick(props.name)}} 
        style={[style, styles.rectangle, eval(props.value) < 0.5 ? {borderColor: '#E24646'}:{borderColor: '#36D69C'}]}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.value}</Text>
            <InfoSvg size = {24 / 844 * height} style={styles.svg}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        borderRadius: 25,
        padding: 10,
        borderWidth: 2.5,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        elevation: 5
    },
    text: {
        alignSelf: 'center',
        fontSize: 20 / 844 * height,
        fontWeight: '600',
        color: '#000000',
    },
    svg: {
        position: 'absolute',
        left: '93%',
        top: '15%'
    }
})

export default ResultButton;