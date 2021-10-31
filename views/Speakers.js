import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Speakers() {
    return (
        <View style={styles.titulo}>
            <Text>Speakers</Text>
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