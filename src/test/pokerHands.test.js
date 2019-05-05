import { pokerHands } from '../js/pokerHands';

describe('Straight', () => {
  const hand = pokerHands.find(({ name }) => name === 'Straight');

  it('is 4 diff', () => {
    const exp = [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
    ];
    expect(hand.is(exp)).toBeTruthy();
  });
  it('is 5 diff', () => {
    const exp = [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 6 },
    ];
    expect(hand.is(exp)).toBeFalsy();
  });
  it('is 12 diff', () => {
    const exp = [
      { number: 12 },
      { number: 13 },
      { number: 1 },
      { number: 2 },
      { number: 3 },
    ];
    expect(hand.is(exp)).toBeFalsy();
  });
});

describe('Flash', () => {
  it('is flash', () => {
    const hand = pokerHands.find(({ name }) => name === 'Flash');
    const exp = [
      { suit: 'spade', number: 0 },
      { suit: 'spade', number: 0 },
      { suit: 'spade', number: 0 },
      { suit: 'spade', number: 0 },
      { suit: 'spade', number: 0 },
    ];
    expect(hand.is(exp)).toBeTruthy();
  });
});

describe('Four of a Kind', () => {
  const hand = pokerHands.find(({ name }) => name === 'FourOfaKind');
  it('is five card', () => {
    const exp = [
      { number: 1 },
      { number: 1 },
      { number: 1 },
      { number: 1 },
      { number: 1 },
    ];
    expect(hand.is(exp)).toBeTruthy();
  });

  it('is four card', () => {
    const exp = [
      { number: 2 },
      { number: 2 },
      { number: 2 },
      { number: 2 },
      { number: 1 },
    ];
    expect(hand.is(exp)).toBeTruthy();
  });

  it('is three card', () => {
    const exp = [
      { number: 5 },
      { number: 5 },
      { number: 5 },
      { number: 1 },
      { number: 1 },
    ];
    expect(hand.is(exp)).toBeFalsy();
  });
});

describe('Royal Flash', () => {
  it('is royal flash', () => {
    const hand = pokerHands.find(({ name }) => name === 'RoyalFlash');
    const exp = [
      { suit: 'spade', number: 1 },
      { suit: 'spade', number: 10 },
      { suit: 'spade', number: 11 },
      { suit: 'spade', number: 12 },
      { suit: 'spade', number: 13 },
    ];
    expect(hand.is(exp)).toBeTruthy();
  });
});
