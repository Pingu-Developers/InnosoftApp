import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.titulo}>
            <Text>Home</Text>
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