import * as React from 'react';
import {Image, StyleSheet, Text, View , ScrollView, Modal, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import busLogo from "../assets/AboutUs/Transporte/bus.png"
import bicycleLogo from "../assets/AboutUs/Transporte/bicycle.png"
import trainLogo from "../assets/AboutUs/Transporte/train.png"
import { Grid, Row, Col } from 'react-native-easy-grid';

export default function HowToGetTo({navigation}) {
    return (
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.mainText}>
                        Las IX jornadas se celebrarán en la Escuela Técnica Superior de Ingeniería Informática (ETSII), que está situada en el Campus de Reina Mercedes (Av. Reina Mercedes s/n).
                    </Text>
                </View>

                <Grid>
                    <Row style={{marginTop: 15}}>
                        <Col size={50} style={{marginRight: 5}}>
                            <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('PopUpTransport',{transport: 'tussam'})} }>
                                <View style={styles.viewImageText}>
                                    <Image tintColor='white' style={styles.logo} source={busLogo}/>
                                    <Text style={styles.texto}>TUSSAM</Text>
                                </View>
                            </TouchableOpacity>
                        </Col>

                        <Col size={50} style={{marginLeft: 5}}>
                            <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('PopUpTransport', {transport: 'consorcio'})} }>
                                <View style={styles.viewImageText}>
                                    <Image tintColor='white' style={styles.logo} source={busLogo}/>
                                    <Text style={styles.texto}>CONSORCIO</Text>
                                </View>
                            </TouchableOpacity>
                        </Col>
                    </Row>

                    <Row style={{marginTop: 10}}>
                        <Col size={50} style={{marginRight: 5}}>
                            <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('PopUpTransport', {transport:'renfe'})} }>
                                <View style={styles.viewImageText}>
                                    <Image tintColor='white' style={styles.logo} source={trainLogo}/> 
                                    <Text style={styles.texto}>RENFE</Text>
                                </View>
                            </TouchableOpacity>
                        </Col>

                        <Col size={50} style={{marginLeft: 5}}>
                            <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('PopUpTransport', {transport:'bicycle'})} }>
                                <View style={styles.viewImageText}>
                                    <Image tintColor='white' style={{...styles.logo, width:29}} source={bicycleLogo}/> 
                                    <Text style={styles.texto}>BICICLETA</Text>
                                </View>
                            </TouchableOpacity>
                        </Col>
                    </Row>

                </Grid>

                {<WebView style={{height:180,width:'100%',marginTop:20, borderColor: '#6099c4', borderWidth: 2}}
                source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.3368232541447!2d-5.988529810952727!3d37.35820631589539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126dd4a3055555%3A0x29c3f634f8a021b8!2sEscuela+T%C3%A9cnica+superior+de+Ingenier%C3%ADa+Inform%C3%A1tica%2C+ETSII!5e0!3m2!1ses!2ses!4v1508418382276" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' }} />
                }

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    main:{
        margin: 15,
    },
    texto:{
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
    },  
    logo:{
        height: 19,
        width: 19,
        resizeMode: 'contain'
    },
    container:{
        marginVertical:15,
        padding: 10,
    },
    mainText:{
        textAlign:'center',
        fontSize:15,
        color:'#535353',
        lineHeight: 25,
    },
    viewImageText:{
        justifyContent: 'center', 
        alignItems: 'center'
    },
    box:{
        padding: 20,
        width: "100%",
        backgroundColor: "#6099c4",
    },
})