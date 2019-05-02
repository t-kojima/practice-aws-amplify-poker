import { CREATE_DECK } from '../actions';
import Deck from '../deck';

function deck(state, action) {
  const { type } = action;
  switch (type) {
    case CREATE_DECK:
      return new Deck();
    default:
      return state;
  }
}

function reducer(state = {}, action) {
  return {
    deck: deck(state.deck, action),
  };
}

export default reducer;
