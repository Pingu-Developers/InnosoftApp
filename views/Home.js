import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.titulo}>
            <Text>Innosoft Days 2021</Text>
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