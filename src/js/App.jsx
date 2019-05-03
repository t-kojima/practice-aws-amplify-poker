import React from 'react';
import { connect } from 'react-redux';
import { createDeck, deal } from './actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import '../css/App.scss';

export default connect(select)((props) => {
  const { dispatch, deck, hand } = props;
  console.log(deck);
  console.log(hand);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Game
          deck={deck}
          hand={hand}
          onClick={() => {
            deck || dispatch(createDeck());
            deck && dispatch(deal(deck));
          }}
        />
        <Footer />
      </div>
    </div>
  );
});

function select(state) {
  return {
    deck: state.deck,
    hand: state.hand,
  };
}
