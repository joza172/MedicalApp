import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native';
import PlaySvg from '../resources/svg-s/PlaySvg';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg'
import GallerySvg from '../resources/svg-s/GallerySvg';
import DiseaseSvg from '../resources/svg-s/DiseaseSvg';
import KvizSvg from '../resources/svg-s/KvizSvg';

const BigButton = (props) => {
    const {style, ...rest} = props;

    function renderSwitch(param) {
        switch(param) {
            case '0':
                return (<PlaySvg color='#FFF' size={Dimensions.get('window').height * props.size}/>);
            case '1':
                return (<MicroscopeSvg size={Dimensions.get('window').height * props.size}/>);
            case '2':
                return (<GallerySvg size={Dimensions.get('window').height * props.size}/>);
            case '3':
                return (<DiseaseSvg size={Dimensions.get('window').height * props.size}/>);
            case '4':
                return (<KvizSvg size={Dimensions.get('window').height * props.size}/>);
        }
      }

    return (
        <Pressable style={[styles.rectanglePressable, style]} 
            onPress={() => {
                    props.handleClick(props.value)
                }
            }>
            <View style={styles.picText}>
                {renderSwitch(props.num)}
                <Text style={[styles.text]}>{props.value}</Text>
            </View>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    picText: {
        height: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    rectanglePressable: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 60,
        padding: 10,
        backgroundColor: '#9c53d4',
        shadowColor: '#000000',
        elevation: 10,
    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 19
    }
})

export default BigButton;