import { JUMPTO, MARK } from "./actionTypes";

export const mark = pos => ({
    type: MARK,
    payload: pos,
});

export const jumpTo = step => ({
    type: JUMPTO,
    payload: step,
});