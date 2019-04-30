import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../css/App.scss';
import '../css/neon.css';

export default () => (
  <div className="App">
    <div className="container">
      <Header />
      <main>
        <div className="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </main>
      <Footer />
    </div>
  </div>
);
