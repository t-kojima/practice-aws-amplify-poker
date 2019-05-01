import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import '../css/App.scss';

export default () => (
  <div className="App">
    <div className="container">
      <Header />
      <Game />
      <Footer />
    </div>
  </div>
);
