import React from 'react';
import { connect } from 'react-redux';
import { createDeck } from './actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import '../css/App.scss';

export default connect(select)((props) => {
  const { dispatch, deck } = props;
  console.log("deck");
  console.log(deck);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Game deck={deck} onClick={() => dispatch(createDeck())} />
        <Footer />
      </div>
    </div>
  );
});

function select(state) {
  return {
    deck: state.deck,
  };
}
