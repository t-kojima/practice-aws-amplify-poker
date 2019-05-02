import React from 'react';
import Card from './Card';

export default ({ deck, onClick }) => (
  // const deck = new Deck();
  <main>
    <div>
      <table className="table is-fullwidth">
        <tbody>
          <tr>
            <td>Royal St Flash</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>St Flash</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Four Card</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
      This container is <strong>centered</strong> on desktop.
      {deck ? (
        <div className="hands columns is-mobile">
          {deck.pick(5).map((card, i) => (
            <div className="column" key={i}>
              <Card suit={card.suit} number={card.number} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button type="button" className="neon" onClick={onClick} >
            <h1>
              遊戲開<span>始</span>
            </h1>
          </button>
        </div>
      )}
    </div>
  </main>
);
