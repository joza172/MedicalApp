import { View } from "react-native";


const ProgressBar = (props) => {
    
    return (
        <View>
            <View style={styles.circleOut}/>
            <View style={[styles.circlePer, {transform: [
            {translateX: Dimensions.get('window').width * 0.205},
            {rotate: rotation},
            {translateX: -Dimensions.get('window').width * 0.205}],}]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    
})

export default ProgressBar;