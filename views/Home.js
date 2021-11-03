import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import logo from '../assets/home/logo-innosoft.png';
import { LinearGradient } from 'expo-linear-gradient';

const gradiant = ["#FFAE3F","#FFCD88","#FFCD88","#FFAE3F"]
export default function Home({navigation}) {

    const [fadeInno, setFadeInno] = useState(new Animated.Value(0))
    const [moveInno, setMoveInno] = useState(new Animated.Value(80))
    const [bounceLogo, setBounceLogo] = useState(new Animated.Value(0))
    const [moveDay, setMoveDay] = useState(new Animated.Value(-80))
    const [fadeDay, setFadeDay] = useState(new Animated.Value(0))
    
    useEffect(()=>{
        Animated.parallel([
            Animated.timing(fadeInno, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
                }),
            Animated.timing(moveInno, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
                }),
            Animated.spring(bounceLogo, {
                toValue: 1,
                friction: 1,
                useNativeDriver: true
                }),
            Animated.timing(moveDay, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
                }),
            Animated.timing(fadeDay, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
                })
        ]).start()
    },[])

    return (
        <View style={styles.contenedor}>
            <LinearGradient
                style={styles.backgroundGradient}
                colors={["#6da8ba","#7094b6"]}
                />
            <View 
                style={styles.background}
                >      
                <View style={styles.row}>
                    <Animated.View style={{
                            opacity: fadeInno,
                            transform:[{translateX:moveInno}]
                        }}>
                        <Text  style={styles.text}>#Inno</Text>
                        <Text  style={styles.textOrange}>{'   '}Soft</Text>
                    </Animated.View>
                    <View style={{marginLeft:10,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                        <Animated.Image
                            source={logo}
                            style={[styles.logo,{transform:[{scale:bounceLogo}]}]}
                        >
                        </Animated.Image>
                        <Animated.Text  style={[styles.textDays,{opacity: fadeDay,transform:[{translateX:moveDay}]}]}>Days</Animated.Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <LinearGradient
                        style={styles.topContainer}
                        start={[0, 0]} 
                        end={[1, 1]}
                        colors={gradiant}
                        >
                        <View style={styles.top}>
                            <Text style={styles.boxes}>Las jornadas InnoSoft Days son organizadas por los alumnos de cuarto de Ingeniería Informática - Ingeniería del Software en las cuales se tratan temas de innovación tecnológica y emprendimiento.</Text>
                        </View>    
                    </LinearGradient>
                    <LinearGradient
                        style={styles.middleContainer}
                        start={[0, 0]} 
                        end={[1, 1]}
                        colors={gradiant}
                        >
                        <View style={styles.middle}>
                            <Text style={styles.boxes}>Durante el transcurso de las jornadas tienen lugar una serie de activades como talleres, debates, conferencias, concursos de programación y sorteos.</Text>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        style={styles.bottomContainer}
                        start={[0, 0]} 
                        end={[1, 1]}
                        colors={gradiant}
                        >
                        <View style={styles.bottom}>
                            <Text style={styles.boxes}>Si estas interesado en asistir a las jornadas puedes acceder al programa y ver con detalle las actividades que se realizan cada día. Innosoft Days es una gran oportunidad para acercar la tecnología y sus retos actuales a todos.</Text>
                        </View>
                        <View style={styles.bottomButton}>
                            <TouchableOpacity 
                                onPress = {()=> navigation.navigate('Programa')}
                                style={{justifyContent:'center',alignItems:'center',height:40}}
                            >
                                <Text style={{fontWeight:'bold',fontSize:18,color:'#507FD1'}}>
                                    Ir a Programa
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <View style={styles.centrado}>
                </View>
                </View>
        </View>
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
        fontSize:16,
        fontFamily: 'sans-serif',
        color:'#535353',
        lineHeight: 25,
    },
    backgroundGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
    },
    titulo:{
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
        color: "#2C4365",
        fontSize: 60,
        fontWeight: "bold",
        marginLeft:10
    },
    row: {
        marginTop:20,
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
        width:60,
        height:60,
        zIndex:200
      },
    container: {
        padding: 20,
        paddingTop:0,
        marginTop:-30,
        margin: 10,
        flex:3 ,
    },
    topContainer:{
        padding:3,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:43,
        borderTopRightRadius:43,
        borderBottomRightRadius:10,
        marginBottom:25
    },
    top: {
        backgroundColor: "#E2ECFF",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius:10,
    },
    middleContainer:{
        padding:3,
        borderTopLeftRadius:43,
        borderBottomLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:43,
        marginBottom:25
    },
    middle: {
        backgroundColor: "#E2ECFF",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius:40,
    },
    bottomContainer:{
        padding:3,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:43,
        borderTopRightRadius:43,
        borderBottomRightRadius:10,
    },
    bottom: {
        backgroundColor: "#E2ECFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    bottomButton: {
        marginTop:2,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 10,
        borderColor:'#FF980D',
        borderWidth:1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 10,
    },
    footerLogo:{
        width:'90%', 
        height:140
    },
    centrado:{
        alignItems:'center'
    },
})