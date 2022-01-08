import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Modal} from 'react-native';

export default function InnosoftDays({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textoIntroduccion}>
                    Desde la Escuela Técnica Superior de Ingeniería Informática de la Universidad de Sevilla, los alumnos de cuarto de Ingeniería Informática - Ingeniería del Software organizan unas jornadas sobre innovación tecnológica y emprendimiento.
                </Text>

                <Text style={styles.textoIntroduccion}>
                    Talleres, debates, conferencias, concursos de programación, sorteos y mucho más durante las jornadas Innosoft celebradas todos los años en Noviembre.
                </Text>

                <TouchableOpacity onPress={()=>{navigation.navigate('Contactanos')}}>
                    <Text style={styles.textoIntroduccion}>
                        Pulsa aquí para consultar todas nuestras redes sociales y no perderte ninguna novedad de las jornadas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Organización')}}>
                    <Text style={styles.textoIntroduccion}>
                        ¿Quieres conocer la organización llevada a cabo para realizar las jornadas Innosoft? Pincha aquí para verla
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    textoIntroduccion:{
        textAlign:'center',
        fontSize:15,
        color:'#535353',
        lineHeight: 25,
        fontWeight: 'bold',
        borderColor: '#6099c4', 
        borderWidth: 2,
        marginBottom: 30,
    },
})