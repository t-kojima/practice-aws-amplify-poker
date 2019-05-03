import { combineReducers } from 'redux';
import { DEAL, CREATE_DECK, HOLD, DRAW } from '../actions';
import Deck from '../deck';

function deck(state = null, action) {
  const { type } = action;
  switch (type) {
    case CREATE_DECK:
      return new Deck();
    default:
      return state;
  }
}

function hand(state = null, action) {
  const { type, cards, card: { id: cardId } = {} } = action;
  switch (type) {
    case DEAL:
      return cards;
    case HOLD:
      return [
        ...state.map(_ => (_.id === cardId ? { ..._, isHold: true } : _)),
      ];
    default:
      return state;
  }
}

function credit(state = null, action) {
  return state;
}

function bet(state = null, action) {
  return state;
}

function message(state = 'PRESS DEAL', action) {
  const { type } = action;
  switch (type) {
    case DEAL:
      return 'CHOOSE HOLD CARD';
    case DRAW:
      return 'DRAW';
    default:
      return state;
  }
}

// export default (state = {}, action) => ({
//   deck: deck(state.deck, action),
//   hand: hand(state.hand, action),
// });

export default combineReducers({ deck, hand, message });
