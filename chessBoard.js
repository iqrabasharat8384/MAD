import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  const renderBoard = () => {
    const squares = [];
    const boardSize = 8; // 8x8 chess board
    const squareSize = 40; // Size of each square in pixels

    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;
        const backgroundColor = (isEvenRow && !isEvenCol) || (!isEvenRow && isEvenCol) ? 'white' : 'black';

        squares.push(
          <View
            key={`${row}${col}`}
            style={[
              styles.square,
              { backgroundColor },
              {
                top: row * squareSize,
                left: col * squareSize,
              },
            ]}
          />
        );
      }
    }

    return squares;
  };

  return <View style={styles.boardContainer}>{renderBoard()}</View>;
};

const styles = StyleSheet.create({
  boardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  square: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
});

export default ChessBoard;
