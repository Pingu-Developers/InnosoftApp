import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Image,TouchableOpacity } from 'react-native';
import logo from '../assets/home/logo-innosoft.png';
import fondo from '../assets/home/bg.png';
import logoEtsiiUS from '../assets/home/logoEtsiiUS.png';

export default function Home() {


    return (
        <View style={styles.contenedor}>
            <ImageBackground
                    source={fondo}
                    style={styles.background}
                    resizeMode="cover"
            >   
                <View style={styles.row}>
                    <View>
                        <Text  style={styles.text}>#Inno</Text>
                        <Text  style={styles.textOrange}>{'   '}Soft</Text>
                    </View>
                    <View>
                        <Text  style={styles.textDays}>Days</Text>
                        <Image
                            source={logo}
                            style={styles.logo}
                        >
                        </Image>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style= {styles.titulo}>¿Qué es?</Text>
                    <View style={styles.top}>
                        <Text style={styles.boxes}>Las jornadas InnoSoft Days son organizadas por los alumnos de cuarto de Ingeniería Informática - Ingeniería del Software en las cuales se tratan temas de innovación tecnológica y emprendimiento.</Text>
                    </View>    
                    <Text style={styles.titulo}>¿Qué se realiza?</Text>
                    <View style={styles.middle}>
                        <Text style={styles.boxes}>Durante el transcurso de las jornadas tienen lugar una serie de activades como talleres, debates, conferencias, concursos de programación y sorteos.</Text>
                    </View>
                    <Text style={styles.titulo}>Anímate</Text>
                    <View style={styles.bottom}>
                        <Text style={styles.boxes}>Si estas interesado en asistir a las jornadas puedes acceder al{' '} 
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Programa')}
                            >
                                <Text style={styles.links}>Programa</Text>
                            </TouchableOpacity>
                        
                          {' '}y ver con detalle las actividades que se realizan cada día. Innosoft Days es una gran oportunidad para acercar la tecnología y sus retos actuales a todos.</Text>
                    </View>
                    <View style={styles.centrado}>
                    <Image
                        source={logoEtsiiUS}
                        style={styles.footerLogo}
                        resizeMode="contain"
                    >
                    </Image>    
                </View> 
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
    },
    boxes:{
        textAlign:'center',
        flexWrap: 'wrap',
        margin:10,
        fontSize:14,
        fontFamily: 'sans-serif',
        fontWeight:'bold',

    }
    ,titulo:{
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontSize:18,
        margin:6,  
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        marginBottom:-15
    },
    textOrange: {
        color: "#FFAA28",
        fontSize: 42,
        fontWeight: "bold",
    },
    textDays: {
        color: "black",
        fontSize: 82,
        fontWeight: "bold",
        marginLeft:10
    },
    links:{
        color:'#4279FF',
        textDecorationLine: 'underline'
    },
    row: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
    },
    background: {
        flex:1,
        justifyContent: "center"
      },
    logo:{
        width:80,
        height:80,
      },
    container: {
        padding: 20,
        margin: 10,
        flex:3 ,
    },
    top: {
        backgroundColor: "#FFC76B",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius:10,
    },
    middle: {
        backgroundColor: "#E3EBFF",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius:40,
    },
    bottom: {
        backgroundColor: "#B8CAFF",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 10,
    },
    footerLogo:{
        width:'90%', 
        height:140
    },
    centrado:{
        alignItems:'center'
    }
})