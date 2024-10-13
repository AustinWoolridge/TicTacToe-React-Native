import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';
import { Component } from 'react';
import { PaperProvider } from 'react-native-paper';

export default function App() {
    return (

        <PaperProvider>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Game></Game>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#4682B4',

    },



});