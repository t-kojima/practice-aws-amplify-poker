import { combineReducers } from 'redux';
import { DEAL, CREATE_DECK } from '../actions';
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
  const { type } = action;
  switch (type) {
    case DEAL:
      return action.cards;
    default:
      return state;
  }
}

export default combineReducers({ deck, hand });
