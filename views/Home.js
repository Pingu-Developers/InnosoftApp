import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home({navigation}) {
  const _RenderItem = ({item}) => {
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
              <TouchableOpacity style={{...styles.buttonCircle, backgroundColor: item.button.backgroundColor}} onPress={() => navigation.navigate(item.button.target)}> 
                  <Text style={{...styles.introTextStyle, paddingVertical: 10, fontWeight: 'bold'}}>{item.button.text}</Text>
              </TouchableOpacity> : null
            }
        </View>
      );
  };

  return (
      <AppIntroSlider
      data={slides}
      renderItem={_RenderItem}
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
      image: require('../assets/home/logo-innosoft.png'),
      backgroundColor: '#2C4365',
  },
  {
      key: 's2',
      title: 'Programa',
      text: 'Visita el calendario de eventos desde la sección del Programa',
      backgroundColor: '#8AC2E3',
      image: require('../assets/home/calendar.png'),
      button: {
          text: "Ir a programa",
          target: 'Programa',
          backgroundColor: '#2C4365'
      }
  },
  {
      key: 's3',
      title: 'Noticias',
      text: 'La página de noticias informará sobre las novedades en Innosoft',
      image: require('../assets/home/news.png'),
      backgroundColor: '#F7CA60',
      button: {
          text: "Ir a noticias",
          target: 'Noticias',
          backgroundColor: '#8AC2E3'
      }
  },
  {
    key: 's4',
    title: 'Ponentes',
    text: 'Revisa los ponentes que impartirán talleres y conferencias durante las jornadas',
    image: require('../assets/home/speakers.png'),
    backgroundColor: '#8AC2E3',
    button: {
        text: "Ir a ponentes",
        target: 'Ponentes',
        backgroundColor: '#F7CA60'
    }
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
        backgroundColor: '#2C4365',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});