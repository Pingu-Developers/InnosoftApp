import * as React from 'react';
import {Image, StyleSheet, Text, View , ScrollView} from 'react-native';
import { WebView } from 'react-native-webview';
import busLogo from "../assets/AboutUs/Transporte/bus.png"
import bicycleLogo from "../assets/AboutUs/Transporte/bicycle.png"
import trainLogo from "../assets/AboutUs/Transporte/train.png"
import { List } from 'react-native-paper';

export default function HowToGetTo() {

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
        "→Reina Mercedes (Escuela Ing. Edificación)",
        "→Reina Mercedes (E.S.I. Informática)",
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

    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    Las IX jornadas se celebrarán en la Escuela Técnica Superior de Ingeniería Informática (ETSII), que está situada en el Campus de Reina Mercedes (Av. Reina Mercedes s/n).
                </Text>
            </View>

            <View>
                <View>
                    <View style={styles.containerBus}>
                        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                            <Image style={styles.logo} source={busLogo}/>                        
                            <Text style={{fontWeight: 'bold'}}>AUTOBÚS. Líneas de TUSSAM:</Text>
                        </View>

                        <View>
                            <List.Section>
                                <List.AccordionGroup>
                                    <List.Accordion titleStyle={styles.tituloAcordeon} style={styles.acordeon} id="1" title="Línea 03. Bellavista - Pino Montano">
                                        {paradas3.map((text,index) => <List.Item key={index} titleStyle={styles.paradas} title={text}/>)}
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="2" titleStyle={styles.tituloAcordeon} title="Línea 06. Glorieta Heliópolis – San Lázaro">
                                        {paradas6.map((text,index) => <List.Item key={index} titleStyle={styles.paradas} title={text}/>)}
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="3" titleStyle={styles.tituloAcordeon} title="Línea 02. Barqueta – Glorieta Heliópolis">
                                        {paradas2.map((text,index) => <List.Item key={index} titleStyle={styles.paradas} title={text}/>)}
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="4" titleStyle={styles.tituloAcordeon} title="Línea 34. Los Bermejales – Prado">
                                        {paradas34.map((text,index) => <List.Item key={index} titleStyle={styles.paradas} title={text}/>)}
                                    </List.Accordion>

                                    <List.Accordion style={styles.acordeon} id="5" titleStyle={styles.tituloAcordeon} title="Línea 35. Los Bermejales – Prado">
                                        {paradas35.map((text,index) => <List.Item key={index} titleStyle={styles.paradas} title={text}/>)}
                                    </List.Accordion>
                                </List.AccordionGroup>
                            </List.Section>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                            <Image style={styles.logo} source={busLogo}/>
                            <Text style={{fontWeight: 'bold'}}>AUTOBÚS. Consorcio de transporte metropolitano:</Text>
                        </View>

                        <View style={{paddingLeft:20}}>
                            <Text>
                                • M-132 Sevilla-Dos Hermanas (barriada)
                            </Text>

                            <Text>
                                • M-133 Sevilla-Dos Hermanas (por Olivar de Quintos)
                            </Text>

                            <Text>
                                • M-134 Sevilla-Los Palacios
                            </Text>
                        </View>
                    </View>


                    <View style={styles.container}>
                        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                            <Image style={styles.logo} source={trainLogo}/> 
                            <Text style={{fontWeight: 'bold'}}>Tren. RENFE, cercanías sevilla:</Text>
                        </View>

                        <View>
                            <Text style={{paddingLeft:20}}>
                                • Línea C-1: Lebrija – Utrera – Santa Justa – Lora del Río
                            </Text>
                        </View>
                    </View>

                    
                    <View style={[styles.container,{flexDirection: "row", flexWrap: "wrap"}]}>
                        <Image style={styles.logo} source={bicycleLogo}/> 
                        <Text style={{fontWeight: 'bold'}}>BICICLETA. Estación de SEVICI a escasos metros.</Text>
                    </View>
                </View>
            </View>


            {/* <WebView style={{flex:1,height:200,width:'auto',marginTop:20}} source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.337281126704!2d-5.989114684694309!3d37.35819547983738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126dd4a3055555%3A0x29c3f634f8a021b8!2sEscuela%20T%C3%A9cnica%20Superior%20de%20Ingenier%C3%ADa%20Inform%C3%A1tica!5e0!3m2!1ses!2ses!4v1635698332157!5m2!1ses!2ses" width="1000" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' }} />
             */}
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    main:{
        margin: 15,
        flex: 1,
    },
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
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    paradas:{
        fontSize: 14,
        paddingLeft: 20,
    },
    container:{
        backgroundColor: "#E2ECFF",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomRightRadius:10,
        marginVertical:15,
        padding: 10,
    },
    containerBus:{
        backgroundColor: "#E2ECFF",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        marginVertical:15,
        padding: 10
    },
    mainText:{
        textAlign:'center',
        flexWrap: 'wrap',
        margin:6,
        fontSize:16,
        fontFamily: 'sans-serif',
        color:'#535353',
        lineHeight: 25,
    }
})