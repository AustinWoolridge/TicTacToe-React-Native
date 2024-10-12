import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import Square from './Square.js'
import { useState } from 'react';

// {xIsNext, square, onPlay} is Destructuring. otherwise
/* export default function Board(props) {
    const xIsNext = props.xIsNext;
    const squares = props.squares;
    const onPlay = props.onPlay;
*/
export default function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    };

    return (
        <>
            <View>
                <Text>{status}</Text>
            </View>
            {/* Board row 1 */}
            <View style={styles.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
            </View>
            {/* Board row 2 */}
            <View style={styles.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
            </View>
            {/* Board row 3 */}
            <View style={styles.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
            </View>
        </>
    );
}

function calculateWinner(squares) {
    const winConditions = [
        [0, 1, 2], //row
        [3, 4, 5], //row
        [6, 7, 8], //row
        [0, 3, 6], //column
        [1, 4, 7], //column
        [2, 5, 8], //column
        [0, 4, 8], //cross
        [2, 4, 6] //cross
    ];

    for (let i = 0; i < winConditions.length; i++) {

        const [a, b, c] = winConditions[i];

        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            console.log("Winner is : " + squares[a]);
            return squares[a];
        }
    }
    return null;
}



const styles = StyleSheet.create({
    boardRow: {
        flexDirection: 'row',
    },
});