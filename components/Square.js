import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { View } from 'react-native-web';

export default function Square({ value }) {
    return (
        <TouchableOpacity style={styles.square}>
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