import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, WebView } from 'react-native';
import mapLogo from "../assets/AboutUs/Logos/map.png"
import contactLogo from "../assets/AboutUs/Logos/contact.png"
import organizationLogo from "../assets/AboutUs/Logos/organization.png"
import aboutUsLogo from "../assets/AboutUs/Logos/aboutUs.png"
import pinguLogo from "../assets/AboutUs/Logos/pingu.png"
import { Col, Row, Grid } from "react-native-easy-grid";


export default function AboutUs({navigation}) {
    return (
        <View style={styles.main}>
            <Grid>
                <Row size={20}>
                    <TouchableOpacity style={styles.aboutUs} onPress={()=>{navigation.navigate('InnosoftDays')}}>
                        <View style={styles.content}>
                            <Image tintColor='white' style={styles.logo} source={aboutUsLogo}/>
                            <Text style={styles.texto}>InnosoftDays</Text>
                        </View>
                    </TouchableOpacity>                    
                </Row>

                <Row size={40}>
                    <TouchableOpacity style={styles.RSS} onPress={()=>{navigation.navigate('Contactanos')}}>
                        <View style={styles.content}>
                            <Image tintColor='white' style={styles.logo} source={contactLogo}/>
                            <Text style={styles.texto}>Síguenos en RSS</Text>
                        </View>	
                    </TouchableOpacity>
                </Row>

                <Row size={20} style={styles.rowSpace}>
                    <Col>
                        <TouchableOpacity style={styles.howToGetTo} onPress={()=>{navigation.navigate('Como Llegar')}}>
                            <View style={styles.content}>
                                <Image tintColor='white' style={styles.logo} source={mapLogo}/>
                                <Text style={styles.texto}>Cómo llegar</Text>
                            </View>	
                        </TouchableOpacity>
                    </Col>

                    <Col>
                        <TouchableOpacity style={styles.organization} onPress={()=>{navigation.navigate('Organización')}}>
                            <View style={styles.content}>
                                <Image tintColor='white' style={styles.logo} source={organizationLogo}/>
                                <Text style={styles.texto}>Organización</Text>
                            </View>
                        </TouchableOpacity>
                    </Col>
                </Row>

                <Row size={15}>
                    <View style={styles.footer}>
                        <Text style={styles.textPingu}> POWERED BY </Text>
                        <Image style={styles.pinguLogo} source={pinguLogo}/>
                    </View>
                </Row>
            </Grid>
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        height:'100%',
        margin: 15,
    },
    content:{
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    aboutUs:{
        padding: 20,
        width: "100%",
        backgroundColor: "#2C4365",
        justifyContent: 'center',
    },
    howToGetTo:{
        padding: 20,
        width: "100%",
        backgroundColor: "#6099c4",
        justifyContent: 'center',
    },
    RSS:{
        marginTop: 35,
        padding: 20,
        width: "100%",
        backgroundColor: "#6099c4",
        justifyContent: 'center',
    },
    organization:{
        padding: 20,
        width: "100%",
        backgroundColor: "#e0ad0f",
        justifyContent: 'center',
    },
    texto:{
        color:'white',
        paddingLeft: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    logo:{
        height: 50,
        width: 50,
    },
    pinguLogo:{
        width: 120,
        height: 90,
        resizeMode: "contain",
    },
    textPingu:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#233253',
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    rowSpace:{
        marginTop: 35,
    },
})