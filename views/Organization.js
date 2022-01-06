import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import fotoOrganizacionJornadas from '../assets/AboutUs/Organizacion/organizacionJornadas.png';
import logoInnosoft from '../assets/home/logo-innosoft.png';
import { Linking } from 'react-native';

export default function Organization() {

    const organizacionJornadas = [ {
        props: {
            source: require('../assets/AboutUs/Organizacion/organizacionJornadas.png'),
        }
    }]

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <ScrollView>
            <View>
                <Text style={styles.textoOrganizacion}>
                    Organización de las jornadas
                </Text>

                <View>
                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                        <Image style={styles.fotoOrganizacion} source={fotoOrganizacionJornadas}/> 
                    </TouchableOpacity>

                    {modalVisible==true?
                        <Modal animationType="fade" transparent={true} visible={modalVisible}>
                            <ImageViewer backgroundColor='#eee' imageUrls={organizacionJornadas} index={0} enableSwipeDown onSwipeDown= {()=> setModalVisible(false)} />
                        </Modal>:<></>
                    }
                </View>
                
                <View>
                    <Text style={styles.textoLogoInnosoft}>
                        Más información en la web
                    </Text>

                    <TouchableOpacity onPress={()=> Linking.openURL('https://institucional.us.es/innosoft/')}>
                        <Image style={styles.fotoLogoInnosoft} source={logoInnosoft}/>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    fotoOrganizacion:{
        width: 300,
        height: 400,
        alignSelf: 'center',
    },
    textoOrganizacion:{
        marginTop: 15,
        marginBottom: 15,
        textAlign:'center',
        fontSize:17,
        color:'#535353',
        lineHeight: 25,
        fontWeight: 'bold',
    },
    textoLogoInnosoft:{
        marginTop: 15,
        marginBottom: 8,
        textAlign:'center',
        fontSize:17,
        color:'#535353',
        lineHeight: 25,
        fontWeight: 'bold',
    },
    fotoLogoInnosoft:{
        width: 90,
        height: 90,
        alignSelf: 'center',
        marginBottom: 15
    }
})