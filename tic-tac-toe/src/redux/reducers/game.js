import { MARK, JUMPTO } from "../actionTypes";
import calculateWinner from "../calculateWinner";

const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber:0,
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case MARK: {
            const pos = action.payload;
            const history = state.history.slice(0, state.stepNumber + 1);
            const currentSquares = history[history.length - 1];
            const squares = currentSquares.squares.slice();
            if(calculateWinner(squares)) {
                return state;
            }
            if(squares[pos] !== null) {
                return state;
            }
            squares[pos] = (state.stepNumber%2) ? "O" : "X"
            return {
                ...state,
                history: history.concat([{
                    squares:squares,
                }]),
                stepNumber: history.length, 
            };
        }

        case JUMPTO: {
            return {
                ...state,
                history: state.history,
                stepNumber: action.payload,
            };
        }

        default:
            return state;
    }
}