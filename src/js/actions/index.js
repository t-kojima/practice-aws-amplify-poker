export const CREATE_DECK = 'CREATE_DECK';
export const CREATE_HANDS = 'CREATE_HANDS';
export const DEAL = 'DEAL';
export const HOLD = 'HOLD';
export const DRAW = 'DRAW';

export const createDeck = deck => ({ type: CREATE_DECK, deck });
export const createHands = hands => ({ type: CREATE_HANDS, hands });
export const deal = cards => ({ type: DEAL, cards });
export const hold = card => ({ type: HOLD, card });
export const draw = cards => ({ type: DRAW, cards });
