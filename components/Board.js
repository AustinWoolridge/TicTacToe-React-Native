import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import Square from './Square.js'

export default function Board() {
    return (
        <>
            {/* Board row 1 */}
            <View style={styles.boardRow}>
                <Square value={1}></Square>
                <Square value={2}></Square>
                <Square value={3}></Square>
            </View>
            {/* Board row 2 */}
            <View style={styles.boardRow}>
                <Square value={4}></Square>
                <Square value={5}></Square>
                <Square value={6}></Square>
            </View>
            {/* Board row 3 */}
            <View style={styles.boardRow}>
                <Square value={7}></Square>
                <Square value={8}></Square>
                <Square value={9}></Square>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    boardRow: {
        flexDirection: 'row',
    },
});