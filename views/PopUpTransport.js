import * as React from 'react';
import {Image, StyleSheet, Text, View , ScrollView, TouchableHighlight} from 'react-native';
import { List } from 'react-native-paper';
import busLogo from "../assets/AboutUs/Transporte/bus.png"
import bicycleLogo from "../assets/AboutUs/Transporte/bicycle.png"
import trainLogo from "../assets/AboutUs/Transporte/train.png"
import appstore from "../assets/AboutUs/Logos/appstore.png"
import googleplay from "../assets/AboutUs/Logos/googleplay.png"
import { Linking } from 'react-native';

export default function PopUpComponent({route, navigation}) {

    //TUSSAM PARADAS
    const paradas3 = [
        "Ctra. Isla Menor (Inst. La Grasa)",
        "Avda. Bellavista (Hospital de Valme)",
        "Avda. Bellavista (Asencio y Toledo)",
        "Avda. Jerez (Italica Isabelina)",
        "Avda. Jerez (Uralita)",
        "Glta. Letonia (C.Salud Bermejales)",
        "Paseo de Europa (Bolonia)",
        "Dr. Fleming (Est. Benito Villamarín)",
        "→ Reina Mercedes (Gta. Alc. Parias Merry)",
        "→ Reina Mercedes (Escuela de Ing. Edificación)",
        "La Palmera (Bueno Monreal)",
        "Paseo Las Delicias (Pabellón de Guatemala)",
        "Paseo Colón (Torre del Oro)",
        "Arjona(Puente de Triana)",
        "Torneo (Estacion Plaza de Armas)",
        "Torneo (San Lorenzo)",
        "Concejal Jiménez Becerril (Barqueta)",
        "Concejal Jiménez Becerril (José Díaz)",
        "Concej. Jiménez Becerril (Gta. Olímpica)",
        "Traviesa(Tren Changai)",
        "Alcalá del Rio(Marruecos)",
        "Navarra (Corvina)",
        "Medina y Galnares (Cataluña)",
        "Medina y Galnares (Ambulatorio)",
        "Biologia (El Higueron)",
        "Gta. Oceanografica (Parque Emp. Torneo)",
        "Estrella Canopus (Estrella Adara)",
        "Agricultores (Camino de Los Toros)",
        "Agricultores (Estrella Altair)",
        "Agricultores (Garrochistas)"
    ]

    const paradas6 = [
        "Glorieta San Lázaro (Romanticismo)",
        "Doctor Fedriani (Ágata)",
        "Doctor Fedriani (Diamante)",
        "Doctor Fedriani (Doctor Marañón)",
        "José Díaz (Macarena Tres Huertas)",
        "Concejal Jiménez Becerril (José Díaz)",
        "Avda. Jiménez Becerril (F. Odontología)",
        "Concejal Jiménez Becerril (Barqueta)",
        "Torneo (Puerta de San Juan)",
        "Torneo (San Lorenzo)",
        "Torneo (Baños)",
        "Torneo (San Laureano)",
        "Cristo de La Expiración (Plaza de Armas)",
        "Cristo de La Expiración (Puerta Triana)",
        "Ronda Triana (C.D. Álvarez Gordón)",
        "Ronda de Triana (Manuel Arellano)",
        "Ronda de Triana (San Vicente de Paúl)",
        "López de Gomara (San Martín de Porres)",
        "López de Gomara (Instituto Bécquer)",
        "Santa Fe (Niebla)",
        "Virgen de Luján (Virgen del Águila)",
        "Virgen de Luján (Juan Ramón Jiménez)",
        "Virgen de Luján (Sebastián Elcano)",
        "Paseo Las delicias (Pab. de Guatemala)",
        "Paseo Las delicias (Glorieta Méjico)",
        "La Palmera (Bueno Monreal)",
        "Sor Gregoria Santa Teresa",
        "→ Reina Mercedes (Escuela Ing. Edificación)",
        "→ Reina Mercedes (E.S.I. Informática)",
        "Reina Mercedes (Glta. Alc. Parias Merry)",
        "Padre G. Tejero (Est. Benito Villamarín)",
        "Manuel Siurot (Rafael Salgado)",
        "Marqués Luca de Tena (La Palmera)",
        "Padre G. Tejero (Est. Benito Villamarín)"
    ]

    const paradas2 = [
        "Resolana (Barqueta)",
        "Resolana (Feria)",
        "San Juan de Ribera (Macarena)",
        "San Juan de Ribera (Policlínico)",
        "Doctor Leal Castaños (Huerta del Carmen)",
        "Sor Francisca Dorotea (Bda. La Barzola)",
        "Ronda de Pío XII (Madreselva)",
        "Avenida Llanes (Miraflores)",
        "Avenida Llanes (Carretera Carmona)",
        "Alcalde Manuel del Valle (Ctra. Carmona)",
        "Alcalde Manuel del Valle (Hespérides)",
        "Alcalde Manuel del Valle (Kansas City)",
        "Éfeso (Avenida Soleá)",
        "Ada (Tarso)",
        "Ada (Avenida Montes Sierra)",
        "José M. Javierre (Los Arcos)",
        "Rda. Tamarguillo (Alejandro Collantes)",
        "Rda. Tamarguillo (Marqués de Pickman)",
        "Rda. Tamarguillo (Francisco Buendía)",
        "Ronda del Tamarguillo (Ramón y Cajal)",
        "Rda. Tamarguillo (Av. de La Paz)",
        "Poeta Manuel Benítez (Avda. de La Paz)",
        "Poeta Manuel Benítez (Rda. La Oliva)",
        "Poeta Manuel Benítez (P. González Abato)",
        "Marqués Luca de Tena (Virgen del Rocío)",
        "Marqués Luca de Tena (Hospital V.Rocio)",
        "Padre G. Tejero (Est. Benito Villamarín)",
        "→ Glorieta Alcalde Parias Merry"
    ]

    const paradas34 = [
        "Avenida del Cid (Facultad de derecho)",
        "Avda. María Luisa (Teatro Lope de Vega)",
        "Paseo Las delicias (Pab. de Guatemala)",
        "Paseo Las delicias (Glorieta Méjico)",
        "La Palmera (Bueno Monreal)",
        "Sor Gregoria Santa Teresa",
        "→ Reina Mercedes (Escuela Ing. Edificación)",
        "→ Reina Mercedes (E.S.I. Informática)",
        "Reina Mercedes (Glta. Alc. Parias Merry)",
        "Dr. Fleming (Est. Benito Villamarín)",
        "Avenida Holanda (Paraná)",
        "Avenida Italia (Ciudad deportiva)",
        "Bergantín (Fragata)",
        "Avda. Reino Unido (Nª Sª del Pilar)",
        "Av. Reino Unido (Glta. Av. Jerez)",
        "María Galiana (Santa María de La Cabeza)",
        "Avenida Finlandia (Polonia)",
        "Irlanda (Estonia)",
        "Estonia (Av. Irlanda)",
        "Avda. Finlandia (Hungria)",
        "Chipre (Avenida Alemania)",
        "Avenida Alemania (Suecia)",
        "Paseo de Europa (Lyon)"
    ]

    const paradas35 = [
        "El Cid Av. (Rectorado)",
        "→ Reina Mercedes (E.S.I. Informática)",
        "Paseo de Europa (Bolonia)",
        "Alemania Avda (Berlin)",
        "Palmas Altas (C.Comercial)"
    ]


    switch (route.params.transport) {
        case 'tussam':
            return (
                <ScrollView>
                    <View style={styles.containerBus}>
                        <View style={{flexDirection: "row", flexWrap: "wrap", alignItems: 'center'}}>
                            <Image style={styles.logo} source={busLogo}/>                        
                            <Text style={{fontWeight: 'bold', fontSize: 12}}>AUTOBÚS. Líneas de TUSSAM:</Text>
                        </View>

                        <View>
                            <List.Section>
                                <List.AccordionGroup>
                                    <List.Accordion titleStyle={styles.tituloAcordeon} style={styles.acordeon} id="1" title="Línea 03. Bellavista - Pino Montano">
                                        {paradas3.map((text,index) =>
                                            text.toString().includes('→') ?
                                                <List.Item key={index} titleStyle={styles.paradasClave} title={<Text>{text}</Text>}/> 
                                                :
                                                <List.Item key={index} titleStyle={styles.paradas} title={text}/> 
                                            )}       
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="2" titleStyle={styles.tituloAcordeon} title="Línea 06. Glorieta Heliópolis – San Lázaro">
                                        {paradas6.map((text,index) =>
                                            text.toString().includes('→') ?
                                            <List.Item key={index} titleStyle={styles.paradasClave} title={<Text>{text}</Text>}/> 
                                                :
                                                <List.Item key={index} titleStyle={styles.paradas} title={text}/> 
                                        )}                                           
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="3" titleStyle={styles.tituloAcordeon} title="Línea 02. Barqueta – Glorieta Heliópolis">
                                        {paradas2.map((text,index) =>
                                            text.toString().includes('→') ?
                                            <List.Item key={index} titleStyle={styles.paradasClave} title={<Text>{text}</Text>}/> 
                                                :
                                            <List.Item key={index} titleStyle={styles.paradas} title={text}/> 
                                        )}                                     
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="4" titleStyle={styles.tituloAcordeon} title="Línea 34. Los Bermejales – Prado">
                                        {paradas34.map((text,index) =>
                                            text.toString().includes('→') ?
                                            <List.Item key={index} titleStyle={styles.paradasClave} title={<Text>{text}</Text>}/> 
                                                :
                                            <List.Item key={index} titleStyle={styles.paradas} title={text}/> 
                                        )}                                           
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="5" titleStyle={styles.tituloAcordeon} title="Línea 35. Los Bermejales – Prado">
                                        {paradas35.map((text,index) =>
                                            text.toString().includes('→') ?
                                            <List.Item key={index} titleStyle={styles.paradasClave} title={<Text>{text}</Text>}/> 
                                                :
                                            <List.Item key={index} titleStyle={styles.paradas} title={text}/> 
                                        )}                                     
                                    </List.Accordion>
                                </List.AccordionGroup>
                            </List.Section>
                        </View>
                    </View>

                    <View style={styles.tussamInfoAPP}>
                        <Text style={styles.tussamText}>Descarga la APP de Tussam</Text>
                        <View style={styles.appsButton}>
                            <TouchableHighlight onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.geoactio.tussam')}>
                                <Image style={styles.playstoreImage} source={googleplay}/>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => Linking.openURL('https://apps.apple.com/es/app/apptussam/id570963740')}>
                                <Image style={styles.appStoreImage} source={appstore}/>
                            </TouchableHighlight>
                        </View>
                    </View>

                </ScrollView>               
            )        
        case 'consorcio':
            return(
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{flexDirection: "row", flexWrap: "wrap", alignItems: 'center'}}>
                            <Image style={styles.logo} source={busLogo}/>
                            <Text style={{fontWeight: 'bold', fontSize: 11}}>AUTOBÚS. Consorcio de transporte metropolitano:</Text>
                        </View>

                        <View style={{paddingLeft:20}}>
                            <Text style={{fontSize: 11}}>
                                • M-132 Sevilla-Dos Hermanas (barriada)
                            </Text>

                            <Text style={{fontSize: 11}}>
                                • M-133 Sevilla-Dos Hermanas (por Olivar de Quintos)
                            </Text>

                            <Text style={{fontSize: 11}}>
                                • M-134 Sevilla-Los Palacios
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            )

        case 'renfe':
            return(
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{flexDirection: "row", flexWrap: "wrap", alignItems: 'center'}}>
                            <Image style={styles.logo} source={trainLogo}/> 
                            <Text style={{fontWeight: 'bold', fontSize: 12}}>Tren. RENFE, cercanías sevilla:</Text>
                        </View>

                        <View>
                            <Text style={{paddingLeft:20, fontSize: 11}}>
                                • Línea C-1: Lebrija – Utrera – Santa Justa – Lora del Río
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            )

        case 'bycicle':
            return(
                <ScrollView>
                    <View style={styles.container}>
                        <View style={[styles.container,{flexDirection: "row", flexWrap: "wrap", alignItems: 'center'}]}>
                            <Image style={styles.logo} source={bicycleLogo}/> 
                            <Text style={{fontWeight: 'bold', fontSize: 12}}>BICICLETA. Estación de SEVICI a escasos metros.</Text>
                        </View>
                    </View>
                </ScrollView>
            )

        default:
            break;
    }
}

const styles = StyleSheet.create({
    logo:{
        height: 19,
        width: 19,
        marginRight: 5,
        resizeMode: 'contain'
    },
    acordeon:{
        backgroundColor: 'white',
        backgroundColor: "#E2ECFF",
    },
    tituloAcordeon:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black'
    },
    paradas:{
        fontSize: 11,
        paddingLeft: 20,
    },
    paradasClave:{
        fontSize: 11,
        paddingLeft: 20,
        fontWeight: 'bold',
    },
    containerBus:{
        backgroundColor: "#E2ECFF",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 40,
        borderBottomRightRadius:30,
        marginVertical:10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    tussamText:{
        textAlign:'center',
        fontSize:17,
        color:'#535353',
        lineHeight: 25,
        fontWeight: 'bold',
    },
    appStoreImage:{
        width: 181,
        height: 60,
    },
    playstoreImage:{
        width: 200,
        height: 80,
    },
    tussamInfoAPP:{
        marginTop: 30,
        marginBottom: 20
    },
    appsButton:{
        alignItems: 'center',
    },
    container:{
        margin: 10,
        marginTop: 20,
        alignItems: 'center',
    }
});
