export const CREATE_DECK = 'CREATE_DECK';
export const DEAL = 'DEAL';
export const HOLD = 'HOLD';
export const DRAW = 'DRAW';

export const createDeck = () => ({ type: CREATE_DECK });
export const deal = cards => ({ type: DEAL, cards });
export const hold = card => ({ type: HOLD, card });
export const draw = () => ({ type: DRAW });
