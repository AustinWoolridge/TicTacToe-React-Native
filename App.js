import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';
import { Component } from 'react';

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Board></Board>
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