import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import Square from './Square.js'

export default function Board() {
    return (
        <>
            {/* Board row 1 */}
            <View style={styles.boardRow}>
                <Square ></Square>
                <Square ></Square>
                <Square ></Square>
            </View>
            {/* Board row 2 */}
            <View style={styles.boardRow}>
                <Square ></Square>
                <Square ></Square>
                <Square ></Square>
            </View>
            {/* Board row 3 */}
            <View style={styles.boardRow}>
                <Square ></Square>
                <Square ></Square>
                <Square ></Square>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    boardRow: {
        flexDirection: 'row',
    },
});