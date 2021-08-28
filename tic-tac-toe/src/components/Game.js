import React from 'react';
import Board from './Board';
import Moves from './Moves';
import calculateWinner from '../redux/calculateWinner';
import { connect } from 'react-redux';
import { getHistory, getStepNumber } from '../redux/selectors';

const Game = ({ history, stepNumber }) => {

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move) => {
        return (
            <Moves key={move} move={move}/>
        );
    });

    let status;
    let nextPlayer = (stepNumber%2) ? "O" : "X";
    if(winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + nextPlayer;
    }

    return (
    <div className="game">
        <div className="game-board">
        <div>{status}</div>
            <Board 
                squares={current.squares}
            />
        </div>
        <div className="game-info">
            <ol>
                {moves}
            </ol>
        </div>
    </div>
    );
}

const mapStateToProps = (state) => ({
    history: getHistory(state),
    stepNumber: getStepNumber(state),
});

export default connect(mapStateToProps)(Game);