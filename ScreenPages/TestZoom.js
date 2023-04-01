import * as React from 'react';
import { useState ,useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, TextInput } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import {LinearGradient} from 'expo-linear-gradient'
import SettingsSvg from '../resources/svg-s/SettingsSvg';
import BigRadioButton from '../components/BigRadioButton';
import Circle from '../components/Circle';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';



const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function TestZoom({ navigation }) {
const [slika, setSlika] = useState(require('../resources/images/VelikeSlike/test2.2.jpg'));
const [omjer,setOmjer] = useState('50%')
const stValues = [
  { value: 'Smanjena kvaliteta' },
  { value: 'Orginalna slika' },
];

const handleClickButton = value => {
  if (value == "Orginalna slika") {
    setSlika(require('../resources/images/VelikeSlike/test2.2.jpg'))
  } else {
    setSlika(require('../resources/images/VelikeSlike/test2.2-min.jpeg'))
  }
 
  

};
const onPress = () => {
  navigation.goBack()
}


useEffect(() => {
  const imageUri = require('../resources/images/VelikeSlike/test2.2.jpg');
  w = Image.resolveAssetSource(imageUri).width
  h = Image.resolveAssetSource(imageUri).height
  let v = Math.floor( h / w * 100 )
  if ( v > 95) {
    v = 95
  }
  v = v + '%'
  setOmjer(v)


}, []);

  return (
    <View style={styles.mainContainer} >
      <View style={{ flex: 3}}>
        <BackButton size={height * 0.055} onPress={onPress} style={{left: '3%', top: '15%'}}/>
      </View>
      <View style={{ flex: 1}}>
        <BigRadioButton style={styles.radioButton} data={stValues} handleClick={handleClickButton}/>
      </View>

      <View style={styles.container}>
         <Text>Zoom-Test</Text>
         <View style={{ borderWidth: 5, flexShrink: 1, height: omjer, width: '95%' }}>
          <ReactNativeZoomableView
            maxZoom={40}
            // Give these to the zoomable view so it can apply the boundaries around the actual content.
            // Need to make sure the content is actually centered and the width and height are
            // dimensions when it's rendered naturally. Not the intrinsic size.
            // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
            // Therefore, we'll feed the zoomable view the 300x150 size.
          >
            <Image
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              source={slika}
            />
          </ReactNativeZoomableView>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    height: 0.05 * height,
    marginHorizontal: '10%'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
});