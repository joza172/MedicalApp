import { TouchableOpacity, View } from "react-native";
import BackSvg from '../resources/svg-s/BackSvg'

const BigButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={props.style}>
            <View>
                <BackSvg/>
            </View>
        </TouchableOpacity>
    );
};

export default BigButton