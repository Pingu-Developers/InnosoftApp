import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import instagramlogo from "../assets/AboutUs/Logos/instagram.svg"
import facebooklogo from "../assets/AboutUs/Logos/facebook.svg"
import telegramlogo from "../assets/AboutUs/Logos/telegram.svg"
import twitterlogo from "../assets/AboutUs/Logos/twitter.svg"
import youtubelogo from "../assets/AboutUs/Logos/youtube.svg"
import twitchlogo from "../assets/AboutUs/Logos/twitch.svg"

export default function Contact() {
    return (
        <View>            
            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#833AB4'}]} onPress={()=>{Linking.openURL("https://www.instagram.com/innosoftdays/")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={instagramlogo}/>
                        <Text style={styles.texto}>Instagram</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#55ACEE'}]} onPress={()=>{Linking.openURL("https://twitter.com/innosoftdays")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={twitterlogo} />
                        <Text style={styles.texto}>Twitter</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#3B5998'}]} onPress={()=>{Linking.openURL("https://www.facebook.com/InnoSoftDays2021/")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={facebooklogo} />
                        <Text style={styles.texto}>Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#0088cc'}]} onPress={()=>{Linking.openURL("https://t.me/InnoSoftDays")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={telegramlogo} />
                        <Text style={styles.texto}>Telegram</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#6441a5'}]} onPress={()=>{Linking.openURL("https://www.twitch.tv/innosoftdays")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={twitchlogo} />
                        <Text style={styles.texto}>Twitch</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.divBoton}>
                <TouchableOpacity style={[styles.boton, {backgroundColor: '#bb0000'}]} onPress={()=>{Linking.openURL("https://www.youtube.com/channel/UCDrk0J92bLcWySdXcMu2MJQ")}}>
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
                        <Image style={styles.logo} source={youtubelogo} />
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
        textDecoration: "none",
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
        filter: "brightness(0) invert(1)"
    }
})