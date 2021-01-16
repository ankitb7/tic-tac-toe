import React, {useState} from 'react';
import Cells from './Cells';
import './GameBoard.css';
import {endConditions} from './constants';

const GameBoard = () => {
    const [cells, setCells] = useState(new Array(9).fill(null));
    const [firstPlayer, togglePlayer] = useState(true);
    const [winner, setWinner] = useState(null);

    const getCurrentPlayer = () => firstPlayer ? 'X' : 'O';

    const onCellClick = (id) => {
        const newCells = [...cells];
        if(!newCells[id]) {
            const currentPlayer = getCurrentPlayer();
            newCells[id] = currentPlayer;
            setCells(newCells);
            if(checkIfGameCompleted(newCells)) {
                setWinner(currentPlayer);
            } else {
                togglePlayer(!firstPlayer);
            }
        }
    };

    const checkIfGameCompleted = (newCells) => {
         for(let i = 0; i < endConditions.length; i++) {
             const [x, y, z] = endConditions[i];
             if(newCells[x] && newCells[x] === newCells[y] && newCells[y] === newCells[z])
                 return true;
         }
         return false;
    };

    const clearGrid = () => {
        const newCells = new Array(9).fill(null);
        setCells(newCells);
        togglePlayer(true);
        setWinner(null);
    };

    const getGameStatus = () => {
        if(winner)
            return winner + ' has won the game!!!';
        if(cells.every(cell => cell !== null))
            return 'Its a draw!';
        return getCurrentPlayer() + ' plays next';
    };

    return (<>
        <div className='game-title'>
            Tic Tac Toe
        </div>
        <div className='game-board'>
            <Cells cells={cells} onCellClick={winner ? () => {} : onCellClick}/>
        </div>
        <div className='game-panel'>
            <button id="reset-button" onClick={clearGrid}>Reset Game</button>
        </div>
        <div className='game-status'>
            {getGameStatus()}
        </div>
    </>)
};

export default GameBoard;