import { combineReducers } from 'redux';
import {
  CREATE_DECK, CREATE_HANDS, DEAL, HOLD, DRAW,
} from '../actions';

function status(state = 'INIT', action) {
  const { type } = action;
  switch (type) {
    case DEAL:
      return { isDeal: true };
    case DRAW:
      return { isDraw: true };
    default:
      return state;
  }
}

function deck(state = null, action) {
  const { type, deck: _deck } = action;
  switch (type) {
    case CREATE_DECK:
      return _deck;
    default:
      return state;
  }
}

function hands(state = null, action) {
  const { type, hands: _hands } = action;
  switch (type) {
    case CREATE_HANDS:
      return _hands;
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
    case DRAW:
      return [...state.filter(({ isHold }) => isHold), ...cards];
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

export default combineReducers({
  status,
  deck,
  hand,
  message,
  hands,
});
