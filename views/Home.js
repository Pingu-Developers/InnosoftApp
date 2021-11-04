import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button, Touchable } from 'react-native';
import logo from '../assets/home/logo-innosoft.png';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home({navigation}) {
    const RenderItem = ({item}) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: item.backgroundColor,
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingBottom: 100,
            }}>
            <Text style={styles.introTitleStyle}>
              {item.title}
            </Text>
            <Image
              style={styles.introImageStyle}
              source={item.image} />
            <Text style={styles.introTextStyle}>
              {item.text}
            </Text>
            { item.button ? 
                <TouchableOpacity style={styles.buttonCircle} onPress={() => navigation.navigate(item.button.target)}> 
                    <Text style={{...styles.introTextStyle, paddingVertical: 10}}>{item.button.text}</Text>
                </TouchableOpacity> : null}
          </View>
        );
    };
    
    return (
        <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        showDoneButton={false}
        showNextButton={false}
        />
    );
}
  
const slides = [
    {
        key: 's1',
        text: 'Esta es la app de Innosoft',
        title: '¡Bienvenido!',
        image: logo,
        backgroundColor: '#2C4365',
    },
    {
        key: 's2',
        title: 'Programa',
        text: 'Visita el calendario de eventos desde la sección del Programa',
        backgroundColor: '#8AC2E3',
        button: {
            text: "Ir a programa",
            target: 'Programa'
        },
        image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Calendar_Icon_White.svg/1200px-Calendar_Icon_White.svg.png',
        },
    },
    {
        key: 's3',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: {
        uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
        },
        backgroundColor: '#F7CA60',
    }
];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
    },
    introImageStyle: {
      width: 200,
      height: 200,
    },
    introTextStyle: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
      paddingVertical: 30,
      paddingHorizontal: 30,
    },
    introTitleStyle: {
      fontSize: 45,
      color: 'white',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
    buttonCircle: {
        paddingHorizontal: 30,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});