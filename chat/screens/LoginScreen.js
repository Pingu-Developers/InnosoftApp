import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Alert } from "react-native";
import icon from "../images/icon.png";
import {Ionicons} from '@expo/vector-icons';

const LoginScreen = (props) => {
    const [name, setName] = React.useState("");

    const continueToChat = () => {
        props.navigation.navigate("Lobby", {name: name});
        
    };

    const validateName = () => {
        if(name.length > 0 && name.length < 100){
            let regex = /^[a-zA-Z0-9]*$/;
            if(regex.test(name)){
                continueToChat();
            }else{
                Alert.alert("Error", "El nombre no puede contener caracteres especiales");
            }
        }else if(name.length > 100){
            Alert.alert("Nombre demasiado largo");
        } else {
            Alert.alert("Error", "Por favor ingrese un nombre de usuario");
        }
    };



    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{marginTop: 64}}>
                <Image source={icon} style={styles.icon}/>
            </View>

            <View style={{marginHorizontal: 32}}>
                <Text style={styles.header}>Usuario</Text>

                <TextInput
                style={styles.input}
                placeholder="Inserta un nombre de usuario"
                onChangeText={(name) => setName(name)} value={name} />

                <View style={{alignItems: "flex-end", matginTop: 64}}>

                    <TouchableOpacity style={styles.continue} onPress={() => validateName()}>
                        <Ionicons name="ios-arrow-forward" size={32} color="white" />
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    );
}

export default LoginScreen;

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
    }
});