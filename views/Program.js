import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Program() {
    return (
        <View style={styles.titulo}>
            <Text>Program</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    titulo: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})