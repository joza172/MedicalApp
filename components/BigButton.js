import { StyleSheet, Pressable, View, Text } from 'react-native';
import PlaySvg from '../resources/svg-s/PlaySvg';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg'
import GallerySvg from '../resources/svg-s/GallerySvg';
import DiseaseSvg from '../resources/svg-s/DiseaseSvg';
import KvizSvg from '../resources/svg-s/KvizSvg';

function renderSwitch(param) {
    switch(param) {
        case '0':
            return (<PlaySvg color='#FFF'/>);
        case '1':
            return (<MicroscopeSvg />);
        case '2':
            return (<GallerySvg />);
        case '3':
            return (<DiseaseSvg />);
        case '4':
            return (<KvizSvg />);
    }
  }

const BigButton = (props) => {
    
    return (
        <Pressable style={[styles.rectanglePressable, props.small ? {width: '90%'} : {}]} 
            onPress={() => {
                    props.handleClick(props.value)
                }
            }>
            {renderSwitch(props.num)}
            <Text style={[styles.text]}>{props.value}</Text>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    rectanglePressable: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 60,
        padding: 10,
        backgroundColor: '#9c53d4',
        width: '45%',
        height: '95%',
        shadowColor: '#000000',
        elevation: 10,
    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
})

export default BigButton;