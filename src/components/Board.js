import React, { useState } from 'react';
import Square from './Square';
import '../index.css';

function Board() {

    const [square, setSquare] = useState(Array(10).fill(null));
    const [X, setX] = useState(true);

    const winner = calculateWinner(square) ;

    let status;

    status = 'Sıra şunda: ' + (X ? 'X' : 'O');

    const valueSquare = (i) => {
        return (
            <Square value={square[i]} onClick={() => handleClick(i)} />
        )
    }

    const handleClick =  (i) => {
        const squares = square.slice();
        if (squares[i] === null) {
            squares[i] = X ? 'X' : 'O';
            setSquare(squares);  
            setX(!X);

        } else {
            alert("Boş kutucuğu Doldurunuz.")
        }
        if (winner) {
            alert("Kazanan:" + winner)
            window.location.reload(false)    
        }

    }

    

    function calculateWinner(squares) {
        const lines = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

       


        return null;
    }


    

    
    return (
        <div className="board">
            <div className="board-row">
                {valueSquare(1)}
                {valueSquare(2)}
                {valueSquare(3)}
            </div>
            <div className="board-row">
                {valueSquare(4)}
                {valueSquare(5)}
                {valueSquare(6)}
            </div>
            <div className="board-row">
                {valueSquare(7)}
                {valueSquare(8)}
                {valueSquare(9)}
            </div>

            <h3>{status}</h3>
        </div>
    )
}

export default Board;
