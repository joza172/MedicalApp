import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView,ActivityIndicator  } from 'react-native';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton'
import ZoomableImage from '../components/ZoomableImage';
import * as ScreenOrientation from 'expo-screen-orientation';
import velikeSlike from '../resources/data/velikeSlike';
import BackButtomZoom from '../components/BackButtomZoom';
import ExitConfirmation from '../components/ExitConformations';



//const height = Dimensions.get('window').height
//const width = Dimensions.get('window').width

export default function TestZoom({ navigation, route}) {

  const [height,setHeight] = useState(Dimensions.get('window').height)
  const [width,setWidth] = useState(Dimensions.get('window').width)
  
  const className = route.params.name.replaceAll(' ','_');
  
  const [onlyWatch,setOnlyWatch] = useState(velikeSlike.klase.indexOf(className) == -1 ? true : false)
  



  const opt = className == 'Multipli_mijelom' ? 'options2' : className == 'Infektivna_mononukleoza' ? 'options3' : 'options1'
  const rv = className == 'Multipli_mijelom' ? 'realValues2' : className == 'Infektivna_mononukleoza' ? 'realValues3' : 'realValues1'

  //dodat random index slike iz te klase
  const [randomIndex,setRandomIndex] = useState( Math.floor(Math.random() * velikeSlike[className].length));
  const classData = velikeSlike[className][randomIndex];
  const slika = classData.uri


  const [omjer, setOmjer] = useState(0)
  const [points, setPoints] = useState([])
  const[options,setOptions] = useState(velikeSlike[opt])
  
  const[counter,setCounter] = useState(0)
  
  const [realValues, setRealValues] = useState(velikeSlike[rv])
  
  const [scaleFactor, setScaleFactor] = useState(1)
  
  const [answers,setAnswers] = useState(classData.answers)
  
  const [endSum,SetEndSum] = useState(100)

  const [showOptions,setShowOptions] = useState(1)

  const [buttonHeight,setButtonHeight] = useState(height)
  const [buttonWidth,setButtonWidth] = useState(width)

  const [showExitConfirmation, setShowExitConfirmation] = useState(false);

  const handleExit = () => {
    setShowExitConfirmation(true);
  };

  const handleCancelExit = () => {
    
    setShowExitConfirmation(false);
  };


  const handleClickShowOptions = value => {
      setShowOptions(showOptions*-1)

  }
  
  const handleClickOver = value => {

    if(onlyWatch) {

      navigation.navigate('Home')

    ScreenOrientation.unlockAsync();

    }

    else {



      let results = []
        let sum = 0
        let tempOptions = []
        let tempRealValues = []
        
       
        for(let i = 0; i < options.length; i++){

          let st = options[i]

          if (answers[st]!=0) {

            tempOptions.push(st)
            const indexOption = options.indexOf(st)
            tempRealValues.push(realValues[indexOption])

            if (points[st] >= answers[st]) {
              results.push(answers[st] + '/' + answers[st])
              sum+=answers[st]
            }else {
              results.push(points[st] + '/' + answers[st])
              sum += points[st] 
            }
          } 

        }
      
        navigation.navigate('Result', {
        options:tempOptions,
        result:Math.round(sum),
        results:results,
        realValues: tempRealValues
      })

    ScreenOrientation.unlockAsync();

    }

  }

  const handleClickCounter = value => {
    const newCounter = counter + 1;
    setCounter(newCounter)
    points[value] = points[value] + 1
    if(newCounter == endSum) {
      handleClickOver()
    }


  }

  const emptyHandle = value => {

  }

  const onPress = () => {
    navigation.goBack()
  }

  useEffect(() => {

      var sum = 0

      var createPoints = {}

      for (var j = 0; j < options.length;j++) {
          createPoints[options[j]] = 0
          sum += answers[options[j]] 

      }
      SetEndSum(sum)
      setPoints(createPoints)

    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
      setHeight(Dimensions.get('window').height)
      setWidth(Dimensions.get('window').width)
    };

    lockOrientation();
    
    return () => {
      ScreenOrientation.unlockAsync();
    };

  }, []);
  

  useEffect(() => {

    //edit function so it calculates ImageWidth and ImageHeight
    if(height > width) {
      setButtonHeight(width)
      setButtonWidth(height)
    }

    const imageUri = slika;
    const w = Image.resolveAssetSource(imageUri).width
    const h = Image.resolveAssetSource(imageUri).height

    const hScale = h / height
    const wScale = w / width
    

    let scFactor = wScale / hScale
    setScaleFactor(scFactor)
    let v = h / w
    setOmjer(v)
    
  }, []);


  return (


    <View style={{flex:1}}>

      {!onlyWatch ? (
      <View style={styles.mainContainer}>
        <ZoomableImage
          imageWidth={width}
          imageHeight={width * omjer}
          source={slika}
          style={styles.zoomableImage}
        />
        <BackButtomZoom size={buttonWidth * 0.055} onPress={onPress} style={styles.backButton} />
        <BigButton value={`${counter} / 100`} handleClick={emptyHandle} fontSize={0.65} style={{ position: 'absolute', left: "10%",top: "7%",width:buttonWidth*0.13  ,height:buttonHeight*0.1}}> </BigButton>
        
        <BigButton value="" handleClick={handleClickShowOptions} style={[styles.optionsButton,{width:buttonWidth*0.09,height:buttonHeight*0.05}]} ></BigButton>
        <BigButton
        value="Završi vježbu"
        handleClick={handleExit} // Promjenit u HandleClickOver
        style={styles.newButton}
        fontSize={0.9} 
      />

        {showOptions === 1 && (
          <ScrollView style={styles.scrollView}>
            <View style={styles.table}>
              {options.map(function (object, i) {
                return (
                  <BigButton key={i} value={object} handleClick={handleClickCounter}  style={[styles.bigButton,{width: buttonWidth * 0.12,height: 0.13 * buttonHeight,}]} />
                );
              })}
            </View>
          </ScrollView>
        )}
        </View>
        ) 
        : (

        <View style={styles.mainContainer}>

          <ZoomableImage
            imageWidth={width}
            imageHeight={width * omjer}
            source={slika}
            style={styles.zoomableImage}
          />
          <BackButtomZoom size={buttonWidth * 0.055} onPress={onPress} style={styles.backButton} />
          <BigButton
          value="Završi vježbu"
          handleClick={handleExit} 
          style={styles.newButton}
          fontSize={0.9} 
          /> 

        </View>
          )}



        {showExitConfirmation && (
          <ExitConfirmation
            onConfirm={handleClickOver}
            onCancel={handleCancelExit}
          />
        )}
  
    </View>


  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical:'2%',
    paddingHorizontal:'2%',
  },
  zoomableImage: {
    flex: 1,
    width: '98%',
    height: '98%',
    resizeMode:'contain'
  },
  backButton: {
    position: 'absolute',
    left: '3%',
    top: '7%',
  },
  scrollView: {
    position: 'absolute',
    right: '10%',
    top: '10%',
    width: '30%',
    height: '67%',
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: 25,
    padding: '5%',
    backgroundColor: 'rgba(171, 126, 205, 0.7)',
  },
  bigButton: {
    
    borderRadius: 25,
    marginVertical: '2%',
  },
  optionsButton:{
    position: 'absolute',
    right: "4%",
    top: "5%",
  },
  newButton: {  
    position: 'absolute',
    right: '12.5%', // Position it in line with the ScrollView
    top: '85%',   // Position it below the ScrollView with a 10% margin
    width: '25%', // Match the width of the ScrollView
    height: '14%', // Set the desired height
    // Add other styles as needed
  },
 
});


