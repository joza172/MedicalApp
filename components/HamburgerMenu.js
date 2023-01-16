import React, { useState, useCallback} from 'react';
import { Dimensions, StyleSheet, Pressable, View, Text, Linking } from 'react-native';
import HomeSvg from '../resources/svg-s/HomeSvg'
import InfoSvg from '../resources/svg-s/InfoSvg'
import ContactSvg from '../resources/svg-s/ContactSvg'
import BugSvg from '../resources/svg-s/BugSvg'
import NeutroPhilSvg from '../resources/svg-s/NeutroPhilSvg'

const height = Dimensions.get('window').height
const HamburgerMenu = (props) => {
    function svgComponent(param){
        switch(param){
            case 0:
                return (<HomeSvg color={param == props.page ? '#fff': '#9C53D4'} size={24 * height / 844 } style={styles.svg}/>);
            case 1:
                return (<InfoSvg color={param == props.page ? '#fff': '#9C53D4'} size={24 * height / 844 } style={styles.svg}/>);
            case 2:
                return (<ContactSvg color={param == props.page ? '#fff': '#9C53D4'} size={24 * height / 844 } style={styles.svg}/>);
            case 3:
                return (<BugSvg color={param == props.page ? '#fff': '#9C53D4'} size={24 * height / 844 } style={styles.svg}/>);
        }
    }
    const handlePress = useCallback(async () => {
        const url = "https://docs.google.com/forms/d/e/1FAIpQLScXDEFMFsaJfdcplXKwY2fQ3-R6jDDAwHMpX-5bd1XNqzgJSQ/viewform?usp=sf_link"
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Unable to open bug report.`);
        }
      });

    const buttons = ['Home', 'O nama', 'Kontakt', 'Bug report']
    if (props.visible){
        return (
        <View style={styles.container}>
            <Pressable style={styles.closeButton} 
                onPress={() => {
                    props.setVisible()
                    }
                }>
            </Pressable>
            <View style={styles.hamburgerMenu}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>
                        NeutroPhil
                    </Text>
                    <NeutroPhilSvg/>
                </View>
                <View style={styles.menus}>
                    {buttons.map(function (object, i) {
                        return (
                        <Pressable key={i} style={[styles.button,
                            i == props.page ? {backgroundColor: '#9C53D4', elevation:10}:{}]}
                            onPress={() => {
                                if(i == 0){
                                    props.navigation.navigate('Home')
                                } else if(i == 3){
                                    handlePress()
                                }else {
                                    props.navigation.navigate('InProgress')
                                }
                            }}
                            >
                            {svgComponent(i)}
                            <Text style={[styles.title, i == props.page ? {color: 'white'}:{}]}>{object}</Text>
                        </Pressable>
                        )
                    })}
                </View>
            </View>
        </View>
    );
    }    
};

const styles = StyleSheet.create({
    closeButton: {
        height: '100%',
        width: '40%',
    },
    svg: {
        position: 'absolute',
        left: '5%'
    },
    button: {
        borderRadius: 61,
        height: height * 53 / 844,
        marginHorizontal: '5%',
        marginVertical: '2%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 10,
      },
    hamburgerMenu: {
        height: '100%',
        width: '60%',
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
    },
    titleBox: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 19 / 844 * height,
        fontWeight: '600',
        color: '#9C53D4'
    }
})

export default HamburgerMenu;