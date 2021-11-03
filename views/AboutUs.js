import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import mapLogo from "../assets/AboutUs/Logos/map.svg"
import contactLogo from "../assets/AboutUs/Logos/contact.svg"
import organizationLogo from "../assets/AboutUs/Logos/organization.svg"
import aboutUsLogo from "../assets/AboutUs/Logos/aboutUs.svg"
import pinguLogo from "../assets/AboutUs/Logos/pingu.png"


export default function AboutUs() {    
    return (
        <View>
            <View style={styles.main}>
                <TouchableOpacity style={styles.aboutUs} onPress={()=>{}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={aboutUsLogo}/>
                        <Text style={styles.texto}>Nosotros</Text>
                    </View>	
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <TouchableOpacity style={styles.howToGetTo} onPress={()=>{}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={mapLogo}/>
                        <Text style={styles.texto}>Cómo llegar</Text>
                    </View>	
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.RSS} onPress={()=>{}}>
                        <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                            <Image style={[styles.logo, {marginTop: 10}]} source={contactLogo}/>
                            <Text style={styles.texto}>Síguenos RSS</Text>
                        </View>	
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.organization} onPress={()=>{}}>
                        <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                            <Image style={[styles.logo, {marginTop: 17}]} source={organizationLogo}/>
                            <Text style={styles.texto}>Organización</Text>
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
        filter: "brightness(0) invert(1)",
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
        marginTop: 30,
        fontFamily: '"Coolvetica Rg", "Helvetica Neue", Helvetica, Arial, sans-serif'
    }
})