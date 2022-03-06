import React from 'react';
import './Gameboard.css';
import Square from './Square';
import {useState} from 'react';

function Gameboard(props) {

    function renderSquare(row, col) {
        return (
            <Square 
                value={props.letters[row][col]}
            />
        )
    }

    return (
        <div id = "gameboard">
            <span id="block_display">
                {renderSquare(0, 0)}
                {renderSquare(0, 1)}
                {renderSquare(0, 2)}
                {renderSquare(0, 3)}
                {renderSquare(0, 4)}
            </span>
            <span id="block_display">
                {renderSquare(1, 0)}
                {renderSquare(1, 1)}
                {renderSquare(1, 2)}
                {renderSquare(1, 3)}
                {renderSquare(1, 4)}
            </span>
            <span id="block_display">
                {renderSquare(2, 0)}
                {renderSquare(2, 1)}
                {renderSquare(2, 2)}
                {renderSquare(2, 3)}
                {renderSquare(2, 4)}
            </span>
            <span id="block_display">
                {renderSquare(3, 0)}
                {renderSquare(3, 1)}
                {renderSquare(3, 2)}
                {renderSquare(3, 3)}
                {renderSquare(3, 4)}
            </span>
            <span id="block_display">
                {renderSquare(4, 0)}
                {renderSquare(4, 1)}
                {renderSquare(4, 2)}
                {renderSquare(4, 3)}
                {renderSquare(4, 4)}
            </span>
            <span id="block_display">
                {renderSquare(5, 0)}
                {renderSquare(5, 1)}
                {renderSquare(5, 2)}
                {renderSquare(5, 3)}
                {renderSquare(5, 4)}
            </span>
        </div>
    );
}

export default Gameboard;