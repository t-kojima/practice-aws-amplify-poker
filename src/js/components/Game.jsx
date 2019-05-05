import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PokerHands from './PokerHands';
import Message from './Message';
import Card from './Card';
import Deck from '../deck';
import { pokerHands } from '../pokerHands';

const mapStateToProps = state => ({
  status: state.status,
  deck: state.deck,
  hands: state.hands,
  hand: state.hand,
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  createDeck: () => dispatch(actions.createDeck(new Deck())),
  createHands: () => dispatch(actions.createHands(pokerHands)),
  deal: cards => dispatch(actions.deal(cards)),
  hold: card => dispatch(actions.hold(card)),
  draw: cards => dispatch(actions.draw(cards)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Game extends React.Component {
    componentDidMount() {
      const {
        deck, hands, createDeck, createHands,
      } = this.props;
      deck || createDeck();
      hands || createHands();
    }
    componentDidUpdate() {
      const { state } = this.props;
    }
    deal = () => {
      const { deck, deal } = this.props;
      deal(deck.pick(5));
    };
    hold = (card) => {
      const { hold } = this.props;
      hold(card);
    };
    draw = () => {
      const { deck, hand, draw } = this.props;
      const changeCount = hand.filter(({ isHold }) => !isHold).length;
      draw(deck.pick(changeCount));
    };
    render() {
      const {
        status: { isDeal },
        hand,
        message,
      } = this.props;
      return (
        <main>
          <div>
            <PokerHands />
            {hand ? (
              <Fragment>
                <div className="hands columns is-mobile">
                  {hand.map((card, i) => (
                    <div className="column" key={i}>
                      <Card suit={card.suit} number={card.number} />
                      {isDeal && (
                        <button
                          type="button"
                          className="neon"
                          onClick={this.hold.bind(this, card)}
                        >
                          <h1>更改</h1>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  {isDeal && (
                    <button type="button" className="neon" onClick={this.draw}>
                      <h1>托</h1>
                    </button>
                  )}
                </div>
              </Fragment>
            ) : (
              <div>
                <button type="button" className="neon" onClick={this.deal}>
                  <h1>
                    发<span>牌</span>
                    {/* 遊戲開<span>始</span> */}
                  </h1>
                </button>
              </div>
            )}
            <Message message={message} />
          </div>
        </main>
      );
    }
  },
);
