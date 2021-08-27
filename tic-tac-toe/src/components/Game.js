import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            nextPlayer: "X",
            stepNumber:0,
        }
    }

    handleClick(number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        console.log(history);
        const currentSquares = history[history.length - 1];
        const squares = currentSquares.squares.slice();
        if(calculateWinner(squares)) {
            return;
        }
        if(squares[number] !== null) {
            return;
        }
        squares[number] = this.state.nextPlayer;
        this.setState({
            history: history.concat([{
                squares:squares,
            }]),
            stepNumber: history.length,
            nextPlayer: (this.state.nextPlayer === "X") ? "O" : "X",
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            nextPlayer: (step % 2 === 0) ? "X" : "O",
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + this.state.nextPlayer;
        }

        return (
        <div className="game">
            <div className="game-board">
            <div>{status}</div>
                <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
            <ol>{moves}</ol>
            </div>
        </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;