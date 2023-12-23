import React, { useState } from 'react';
import { View,StyleSheet,Text,Dimensions,ScrollView } from 'react-native';
import BackButton from '../components/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import Epruvete from '../components/Epruvete';
import CurvedPathWithQuestions from '../components/CurvedPathWithQuestions';
import Popup from '../components/Popup';
import caseStudy from '../resources/data/caseStudy';

const { width, height } = Dimensions.get('window');
export default function CaseStudyScreen({ navigation,route }) {

  const [showPopup, setShowPopup] = useState(false);
  const [popupType,setPopupType] = useState("Nalaz")
  const cases = caseStudy.cases[route.params.index];
  const [result,setResult] = useState(0)
  const brojPitanja = cases.prviSetPitanja.length+cases.drugiSetPitanja.length+cases.treciSetPitanja.length;
  const pathCount = brojPitanja  + 5;
  
  const [inputText, setInputText] = useState('');


  const handleInputChange = (text) => {
    setInputText(text);
  };
  

  const handleEnterPopup = (type) => {
    setPopupType(type)
    setShowPopup(true);
  };

  const handleExitPopup = () => {
    
    setShowPopup(false);
  };

  const onEnd = () => {
    
    const tekstOdg = inputText == cases.dijagnoza ? 1 : 0;

    const konacniRezultat = (result + tekstOdg*brojPitanja) / (brojPitanja*2);

    console.log(konacniRezultat)
    navigation.navigate('Proces',{result:konacniRezultat})
  };


  const onPress = () => {
    navigation.goBack()
  }

  const handleAnswerPress = (isCorrect) => {
   
    if(isCorrect) {
      setResult(result+1)
    } else{
      setResult(result-0.25)
    }
  };




  
  

  return (
    <View style = {{flex:1}}>
    <SafeAreaView style={{ flex: 1,flexDirection: 'column',backgroundColor:`rgba(194, 157, 231, 0.2)`}}>
        <View style={{flex:3}}>
          <View style={styles.table}>
              <BackButton size={height * 0.05} onPress={onPress}/>
              <Epruvete numberOfSVGs={3} svgWidth={width*0.05} svgHeight={height*0.055}></Epruvete>
          </View>

          <View style={{flex:5}}>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize: 25 * height/800}}>
              Case Study 
            </Text>
          </View>
        

        </View>

        <View style={{ flex: 13,alignItems:'center' }}>
          
            <CurvedPathWithQuestions
            width={width*0.8}
            height={height}
            startXPortion={0.5}
            startYPortion={0}
            pathCount={pathCount}
            firstQuestionDataArray={cases.prviSetPitanja}
            secondQuestionDataArray={cases.drugiSetPitanja}
            thirdQuestionDataArray={cases.treciSetPitanja}
            onPressQuestion={handleAnswerPress}
            onCirclePress={handleEnterPopup}
            onEnd={onEnd}
            cases={cases}
            inputFunction={handleInputChange}
          />
                    
    </View>

    
            
    </SafeAreaView>
    {showPopup && (
        <Popup
          onCancel={handleExitPopup}
          type={popupType}
          tableHead={caseStudy.tableHead}
          tableData={cases.nalaz.tableData}
          tableTitle={cases.nalaz.tableTitle}
          uris={cases.uris}
          potvrdne = {cases.potvrdne_pretrage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  table: {
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:'5%',
    marginBottom:'5%',
    flexDirection: 'row',
    borderRadius: 25,
    padding: '5%',
    backgroundColor:`rgba(194, 157, 231, 0.2)`,
    alignItems:'center'
    },
    bubbleContainer:{
      borderWidth:3,
      borderRadius:20,
       width:'80%',
       borderColor:'rgba(194, 157, 231, 1)'
    }

});

