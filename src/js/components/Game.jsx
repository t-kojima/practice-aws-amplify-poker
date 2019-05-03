import React from 'react';
import { connect } from 'react-redux';
import { createDeck, deal } from '../actions';
import Card from './Card';

export default connect(select)(
  class Game extends React.Component {
    componentDidMount() {
      const { deck, dispatch } = this.props;
      deck || dispatch(createDeck());
    }
    onDealClick = () => {
      const { deck, dispatch } = this.props;
      dispatch(deal(deck.pick(5)));
    }
    render() {
      const { hand } = this.props;
      return (
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
            {hand ? (
              <div className="hands columns is-mobile">
                {hand.map((card, i) => (
                  <div className="column" key={i}>
                    <Card suit={card.suit} number={card.number} />
                    <button type="button" className="neon">
                      <h1>更改</h1>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <button type="button" className="neon" onClick={this.onDealClick}>
                  <h1>
                    发<span>牌</span>
                    {/* 遊戲開<span>始</span> */}
                  </h1>
                </button>
              </div>
            )}
          </div>
        </main>
      );
    }
  },
);

function select(state) {
  return {
    // deck: state.deck,
    // hand: state.hand,
  };
}
