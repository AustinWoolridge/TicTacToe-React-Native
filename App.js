import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';
import { Component } from 'react';

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Game></Game>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    text: {
        fontSize: 18,
        color: '#000',
    },

});