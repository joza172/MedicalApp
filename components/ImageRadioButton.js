import { StyleSheet, Pressable, View, Text, Dimensions, Image} from 'react-native';
import { useState, useEffect }  from 'react';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const ImageRadioButton = (props) => {
    const handleClick = name => {
        props.handleClick(name);
        setUserOption(name)
    };

    useEffect(() => {
      setUserOption(null)
    }, [props.uris])

    const [userOption, setUserOption] = useState(null);

    return (
        <View style={styles.table}>
            {props.uris.map(function (object, i) {
                return (
                    <Pressable
                    style={styles.press}
                    key={i}
                    onPress={() => handleClick(i)}>
                        <Image style={styles.image} source={object} />
                        <View style={userOption == i ? styles.circleSelected : styles.circleUnselected}/>
                    </Pressable>
                  )
              })}
          </View>
    ); 
}
const styles = StyleSheet.create({
    table: {
        width: Math.min(width, height * 0.5) * 368 / 370,
        height: Math.min(width, height * 0.5),
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    press: {
        width: '45%',
        height: '45%'
    },
    circleUnselected: {
        position: 'absolute',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: height * 0.02,
        width: height * 0.04,
        height: height * 0.04,
        right: '5%',
        bottom: '5%'
    },
    circleSelected: {
        position: 'absolute',
        backgroundColor: '#36D69C',
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: height * 0.02,
        width: height * 0.04,
        height: height * 0.04,
        right: '5%',
        bottom: '5%'
    }
})

export default ImageRadioButton;