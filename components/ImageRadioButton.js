import { StyleSheet, Pressable, View, Text, Dimensions, Image} from 'react-native';
import { useState, useEffect }  from 'react';

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
            <View style={styles.column}>
              {props.uris.map(function (object, i) {
                if (i < (Math.floor(props.uris.length / 2))) {
                  return (
                    <Pressable
                    style={styles.press}
                    key={i}
                    onPress={() => handleClick(i)}>
                        <Image style={styles.image} source={object} />
                        <View style={userOption == i ? styles.circleSelected : styles.circleUnselected}/>
                    </Pressable>
                  )
                }
              })}
            </View>
            <View style={styles.column}>
              {props.uris.map(function (object, i) {
                if (i >= (Math.floor(props.uris.length / 2))) {
                  return (
                    <Pressable
                    style={styles.press}
                    key={i}
                    onPress={() => handleClick(i)}>
                        <Image style={styles.image} source={object} />
                        <View style={userOption == i ? styles.circleSelected : styles.circleUnselected}/>
                    </Pressable>
                  )
                }
              })}
            </View>
          </View>
    ); 
}
const styles = StyleSheet.create({
    table: {
      paddingBottom: '10%',
      flex: 8,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    column: {
      width: '45%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    press: {
        width: '100%',
        height: '45%'
    },
    circleUnselected: {
        position: 'absolute',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: Dimensions.get('window').width * 0.04,
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
        left: '75%',
        bottom: '10%'
    },
    circleSelected: {
        position: 'absolute',
        backgroundColor: '#36D69C',
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: Dimensions.get('window').width * 0.04,
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
        left: '75%',
        bottom: '10%'
    }
})

export default ImageRadioButton;