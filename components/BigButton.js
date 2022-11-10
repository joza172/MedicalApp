import { StyleSheet, Pressable, View, Text } from "react-native";
import PlaySvg from "../resources/svg-s/PlaySvg";
import MicroscopeSvg from "../resources/svg-s/MicroscopeSvg"
import GallerySvg from "../resources/svg-s/GallerySvg";
import DiseaseSvg from "../resources/svg-s/DiseaseSvg";

function renderSwitch(param) {
    switch(param) {
        case "0":
            return (<PlaySvg style={[styles.svg]}/>);
        case "1":
            return (<MicroscopeSvg style={[styles.svg]}/>);
        case "2":
            return (<GallerySvg style={[styles.svg]}/>);
        case "3":
            return (<DiseaseSvg style={[styles.svg]}/>);
    }
  }

const BigButton = (props) => {
    
    return (
        <Pressable style={styles.rectanglePressable}>
            <View style={styles.container}>
                {renderSwitch(props.num)}
                <Text style={[styles.text]}>{props.name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    rectanglePressable: {
        borderRadius: 60,
        padding: 10,
        backgroundColor: "#9c53d4",
        width: "45%",
        height: "95%",
        shadowColor: '#000000',
        elevation: 10,
    },
    text: {
        marginTop: "5%",
        flex: 1,
        fontWeight: "bold",
        color: '#FFFFFF'
    },
    svg: {
        marginTop: "20%",
        flex: 3,
    },
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        height: '100%',
    }
})

export default BigButton;