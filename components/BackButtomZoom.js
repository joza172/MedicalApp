import { TouchableOpacity, View } from "react-native";
import BackZoomSvg from "../resources/svg-s/BackZoomSvg";

const BackButtomZoom = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={props.style}>
            <View>
                <BackZoomSvg size={props.size}/>
            </View>
        </TouchableOpacity>
    );
};

export default BackButtomZoom