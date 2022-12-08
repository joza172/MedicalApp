import { StyleSheet, Pressable, View, Text } from 'react-native';
import InfoSvg from '../resources/svg-s/InfoSvg';

const ResultButton = (props) => {
    return (
        <View style={[styles.rectangle]}>
            <Text style={styles.text}>Nseg</Text>
            <Text style={styles.text}>2/50</Text>
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
        borderColor: '#E24646',
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