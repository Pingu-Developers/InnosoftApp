import React from 'react';
import { Image, Linking, StyleSheet, Text , TouchableOpacity, View } from 'react-native';
import instagramlogo from "../assets/AboutUs/Logos/instagram.png"
import facebooklogo from "../assets/AboutUs/Logos/facebook.png"
import telegramlogo from "../assets/AboutUs/Logos/telegram.png"
import twitterlogo from "../assets/AboutUs/Logos/twitter.png"
import youtubelogo from "../assets/AboutUs/Logos/youtube.png"
import twitchlogo from "../assets/AboutUs/Logos/twitch.png"

export default function Contact() {
    return (
        <View style={{marginTop:20}}>            
            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#833AB4'}]} onPress={()=>{Linking.openURL("https://www.instagram.com/innosoftdays/")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={styles.logo} source={instagramlogo}/>
                        <Text style={styles.texto}>Instagram</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#55ACEE'}]} onPress={()=>{Linking.openURL("https://twitter.com/innosoftdays")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={styles.logo} source={twitterlogo} />
                        <Text style={styles.texto}>Twitter</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#3B5998'}]} onPress={()=>{Linking.openURL("https://www.facebook.com/InnoSoftDays2021/")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={styles.logo} source={facebooklogo} />
                        <Text style={styles.texto}>Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#0088cc'}]} onPress={()=>{Linking.openURL("https://t.me/InnoSoftDays")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={[styles.logo,{resizeMode:'contain'}]} source={telegramlogo} />
                        <Text style={styles.texto}>Telegram</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#6441a5'}]} onPress={()=>{Linking.openURL("https://www.twitch.tv/innosoftdays")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={styles.logo} source={twitchlogo} />
                        <Text style={styles.texto}>Twitch</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#bb0000'}]} onPress={()=>{Linking.openURL("https://www.youtube.com/channel/UCDrk0J92bLcWySdXcMu2MJQ")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image tintColor='white' style={styles.logo} source={youtubelogo} />
                        <Text style={styles.texto}>Youtube</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    
    )
}

const styles = StyleSheet.create({
    divBoton:{
        margin: 10,
    },
    boton:{
        padding: 20,
        fontSize: 30,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#3B5998",
        borderRadius: 15,
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
    }
})