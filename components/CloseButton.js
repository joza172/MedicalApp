import { TouchableOpacity, View } from "react-native";
import CloseSvg from '../resources/svg-s/CloseSvg'

const BigButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={props.style}>
            <View>
                <CloseSvg/>
            </View>
        </TouchableOpacity>
    );
};

export default BigButton