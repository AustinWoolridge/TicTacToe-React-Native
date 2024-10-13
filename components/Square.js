import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from 'react';

export default function Square({ value, onSquareClick }) {

    return (
        <TouchableOpacity style={styles.square} onPress={onSquareClick}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BFFF',
    },

    text: {
        fontSize: 18,
        color: '#000',
    },
});