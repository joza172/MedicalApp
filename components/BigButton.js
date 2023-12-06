import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native';
import PlaySvg from '../resources/svg-s/PlaySvg';
import MicroscopeSvg from '../resources/svg-s/MicroscopeSvg'
import GallerySvg from '../resources/svg-s/GallerySvg';
import DiseaseSvg from '../resources/svg-s/DiseaseSvg';
import KvizSvg from '../resources/svg-s/KvizSvg';

const height = Dimensions.get('window').height
const BigButton = (props) => {
    const {style, ...rest} = props;

    function renderSwitch(param) {
        switch(param) {
            case '0':
                return (<PlaySvg color='#FFF' size={height * props.size}/>);
            case '1':
                return (<MicroscopeSvg color = '#FFF' size={height * props.size}/>);
            case '2':
                return (<GallerySvg size={height * props.size}/>);
            case '3':
                return (<DiseaseSvg size={height * props.size} color={'#fff'}/>);
            case '4':
                return (<KvizSvg size={height * props.size}/>);
        }
      }

    let buttonFontSize = props.fontSize * height * 19 / 844 || height * 19 / 844;  
    const backcolor = props.color == null ? '#9c53d4' : props.color;
    const textColor = props.color == null  ? '#FFFFFF' : '#9c53d4';

    return (
        <Pressable style={({pressed}) => [styles.rectanglePressable, style,{backgroundColor: pressed ? 'rgba(156, 83, 212, 0.5)' : backcolor} ]} 
            onPress={() => {
                    props.handleClick(props.value)
                }
            }>
            <View style={styles.picText}>
                {renderSwitch(props.num)}
                <Text style={[styles.text, { fontSize: buttonFontSize,color:textColor }]}>{props.value}</Text>
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
        shadowColor: '#000000',
        elevation: 10,
    },
    text: {
        fontWeight: 'bold',
        //fontSize: height * 19 / 844
        textAlign:'center'
    }
})

export default BigButton;