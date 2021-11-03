import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import mapLogo from "../assets/AboutUs/Logos/map.png"
import contactLogo from "../assets/AboutUs/Logos/contact.png"
import organizationLogo from "../assets/AboutUs/Logos/organization.png"
import aboutUsLogo from "../assets/AboutUs/Logos/aboutUs.png"
import pinguLogo from "../assets/AboutUs/Logos/pingu.png"

export default function AboutUs({navigation}) {    
    
    return (
        <View style={{marginTop:20}}>
            <View style={styles.main}>
                <TouchableOpacity style={styles.aboutUs} onPress={()=>{navigation.navigate('Sobre nosotros')}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={styles.logo} source={aboutUsLogo}/>
                        <Text style={styles.texto}>Nosotros</Text>
                    </View>	
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <TouchableOpacity style={styles.howToGetTo} onPress={()=>{navigation.navigate('Sobre nosotros',{screen:'Como Llegar'})}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={styles.logo} source={mapLogo}/>
                        <Text style={styles.texto}>Cómo llegar</Text>
                    </View>	
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.RSS} onPress={()=>{navigation.navigate('Sobre nosotros',{screen:'Contactanos'})}}>
                        <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                            <Image tintColor='white' style={[styles.logo, {marginTop: 10}]} source={contactLogo}/>
                            <Text style={styles.texto}>Síguenos RSS</Text>
                        </View>	
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.organization} onPress={()=>{navigation.navigate('Sobre nosotros',{screen:'Organización'})}}>
                        <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                            <Image tintColor='white' style={[styles.logo, {marginTop: 17}]} source={organizationLogo}/>
                            <Text style={[styles.texto,{fontSize:14}]}>Organización</Text>
                        </View>	
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>
                <Text style={styles.textPingu}> POWERED BY </Text>
                <Image style={styles.pinguLogo} source={pinguLogo}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        margin: 10,
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',        
    },
    aboutUs:{
        padding: 16,
        width: "80%",
        backgroundColor: "#233253",
        borderRadius: 15,
        alignSelf: 'center'
    },
    howToGetTo:{
        padding: 40,
        width: "80%",
        backgroundColor: "#6099c4",
        borderRadius: 15,
        alignSelf: 'center'
    },
    RSS:{
        padding: 15,
        width: "37%",
        backgroundColor: "#6099c4",
        borderRadius: 15,
        marginRight: 19
    },
    organization:{
        padding: 15,
        width: "37%",
        backgroundColor: "#e0ad0f",
        borderRadius: 15,
        alignItems: 'center'
    },
    texto:{
        color:'white',
        margin: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    logo:{
        height: 50,
        width: 50,
    },
    pinguLogo:{
        width: 120,
        height: 90,
        resizeMode: "contain",
        alignSelf: 'center',
    },
    textPingu:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#233253',
        marginTop: 30
    }
})