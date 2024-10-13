import { Component, useState } from "react";
import Board from "./Board";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import { Button } from "react-native-paper";

export default function Game() {
    const [xIsNext, setxIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setxIsNext(!xIsNext);
    }

    function takeToStart() {
        setHistory([Array(9).fill(null)]);
        setxIsNext(true);
    }
    return (
        <>
            <View>
                <View>{/*Game Board */}
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>

                </View>
                <View>{/*Game Info */}
                    <Button mode="contained" icon="refresh" rippleColor="black" onPress={takeToStart}>
                        Restart Game
                    </Button>

                </View>
            </View>
        </>
    );
}

