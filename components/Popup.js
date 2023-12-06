import React from 'react';
import { View, Text,StyleSheet,Dimensions,ScrollView,Image } from 'react-native';
import BigButton from './BigButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import DynamicTable from './DynamicTable';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const Popup = ({ onCancel,type,tableHead,tableData,tableTitle,uris }) => {

    const renderPretrage = () => {
        return (
            <SafeAreaView style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.textStylex}>TODO</Text>
              </View>
              <View style={styles.buttonContainer}>
              <BigButton value="Zatvori" handleClick={onCancel} style={styles.BigButtonStyle} ></BigButton>
              </View>
            </SafeAreaView>
          );
      };

      const renderStanica = () => {
        return (
            <SafeAreaView style={[styles.container,{backgroundColor:'rgba(142, 91, 181, 0.95)'}]}>
            

              <View style={{flex:2,justifyContent:'center'}}>
                <Text style={[styles.textStylex,{color:'white',fontSize:height*0.04}]}>Prisutne stanice u razmazu</Text>
              </View>

              <View style={{ height: height * 0.5 }}> 
                <ScrollView
                  contentContainerStyle={styles.imageTable}
                  horizontal={false}
                >
                  {uris.map((object, i) => (
                    <Image key={i} style={styles.image} source={object} />
                  ))}
                </ScrollView>
              </View>


              <View style={[styles.buttonContainer,{alignItems:'center'}]}>
              <BigButton value="Zatvori" handleClick={onCancel} style={styles.BigButtonStyle} color='#ffff'></BigButton>
              </View>

              </SafeAreaView>
            
          );
      };

      const renderNalaz = () => {
       
           
            return (
                
            <View style={styles.container}>

                <SafeAreaView style={{flex:7,justifyContent:'center',flexDirection:'column',width:'90%',margin:'5%'}}>
                    <ScrollView style={{flex:1}} horizontal={false}>
                    <DynamicTable
                        tableHead={tableHead}
                        tableTitle={tableTitle}
                        tableData={tableData}
                      />
                    </ScrollView>
                    
                </SafeAreaView>



                <View style={styles.buttonContainer}>
                <BigButton value="Zatvori" handleClick={onCancel} style={styles.BigButtonStyle} ></BigButton>
                </View>
            </View>
              );
      };




    return type === 'Pogledaj nalaze' ? renderNalaz() : type === 'Pogledaj stanice' ? renderStanica() : renderPretrage();
};

const styles = StyleSheet.create({
  container: {
    position:'absolute',// Adjust this value to cover the entire screen including margins
    height:'100%',
    width:'100%',
    zIndex: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex:5,
    justifyContent:'center'
  },
  textStylex:{
    fontWeight:'bold',
    textAlign:'center'
  },
  buttonContainer:{
    flex:2,
    flexDirection:'row',
  },
  BigButtonStyle:{
    width:width*0.3,
    height:height*0.07,
    borderRadius: 25,
    marginVertical: '2%',
    marginHorizontal:'2%'
  },
  head:{
    height: height*0.1,
  },
  title:{
    flex: 1
  },
  
  row:{
    height: height * 0.1,
    textAlign: 'center',
  },
  wrapper:{
    flexDirection: 'row'    
  },
  imageTable: {
    margin: '5%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexGrow: 1,
  },
  image: {
    resizeMode: 'contain',
    width: width / 4,
    height: width / 4,
    marginTop: '5%'
  },
});

export default Popup;
