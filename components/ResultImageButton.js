import { Dimensions, StyleSheet, Pressable, View, Text , Image} from 'react-native';
import InfoSvg from '../resources/svg-s/InfoSvg';

const height = Dimensions.get('window').height
const ResultImageButton = (props) => {
    return (
        <Pressable onPress={() => {props.handleClick(props.index)}} 
        style={[styles.rectangle, props.correct ? 
                {borderColor: '#E24646', backgroundColor: '#E24646'}:
                {borderColor: '#36D69C', backgroundColor: '#36D69C'},
                {height: props.height}]}>
            <View style={styles.imageContainer}>
                {props.uris.map(function (object, i) {
                    return (
                        <Image key = {i} style={styles.image} source={object}/>
                    );
                })}
            </View>
            <InfoSvg color='white' size={35 / 844 * height} style={styles.svg}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: '30%',
    },
    image: {
        resizeMode: 'contain',
        width: '18%',
        height: '80%'
    },
    rectangle: {
        borderRadius: 25,
        borderWidth: 2,
        elevation: 10
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    svg: {
        position: 'absolute',
        left: '87%',
        top: '25%'
    }
})

export default ResultImageButton;