import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from 'react';

export default function Square() {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        setValue('X');
    };

    return (
        <TouchableOpacity style={styles.square} onPress={handleClick}>
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
    },

    text: {
        fontSize: 18,
        color: '#000',
    },
});