import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Alert } from "react-native";
import {Ionicons} from '@expo/vector-icons';

const LobbyScreen = (props) => {
    const [pin, setPin] = React.useState('');
    let name = props.route.params.name;

    return (
        <View style={styles.container}>
            <View style={styles.circle} />

            <View style={{marginHorizontal: 32}}>
                <Text testID='lobbyHeader' style={styles.header}>¡Hola {name}!</Text>
                <Text style={styles.body}>Inserta el PIN de la sala</Text>
                <TextInput
                style={styles.input}
                placeholder="PIN"
                onChangeText={(pin) => setPin(pin)} value={pin} />

                <View style={{alignItems: "flex-end", matginTop: 64}}>

                    <TouchableOpacity testID='continuePin' style={styles.continue} onPress={() => props.navigation.navigate('Sala', {name: name, room: pin || "general"})}>
                        <Ionicons name="ios-arrow-forward" size={32} color="white" />
                    </TouchableOpacity>                    
                </View>
                
                <View>
                <Text style={styles.body}>o también puedes acceder a la sala general:</Text>
                    <TouchableOpacity style={styles.salaGeneral} onPress={() => props.navigation.navigate('Sala', {name: name, room: "general"})}>
                        <Text style={styles.button}>Acceder</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

export default LobbyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32,
    },
    body: {
        fontSize: 18,
        color: "#514E5A",
        marginTop: 32,
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600",
    },
    icon: {
        width: 100,
        height: 100,
        alignSelf: "center"
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#2C4365",
        alignItems: "center",
        justifyContent: "center",
    },
    salaGeneral: {
        width: '100%',
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#2C4365',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        marginBottom: 32,

    },
    button: {
        fontSize: 16,
        color: 'white'
    }

});