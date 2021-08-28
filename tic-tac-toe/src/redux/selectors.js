export const getState = store => store.game;

export const getHistory = store => getState(store).history;

export const getStepNumber = store => getState(store).stepNumber;