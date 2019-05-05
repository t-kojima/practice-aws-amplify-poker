const isFlash = (cards) => {
  const [suit] = cards.map(_ => _.suit);
  return cards.every(_ => _.suit === suit);
};

const isStraight = (cards) => {
  const min = Math.min(...cards.map(_ => _.number));
  const max = Math.max(...cards.map(_ => _.number));
  return max - min === 4;
};

export const pokerHands = [
  {
    name: 'RoyalFlash',
    rate: 250,
    is: cards => isFlash(cards)
      && [1, 10, 11, 12, 13].some(i => cards.map(_ => _.number).includes(i)),
  },
  {
    name: 'StraightFlush',
    rate: 50,
    is: cards => isFlash(cards) && isStraight(cards),
  },
  {
    name: 'FourOfaKind',
    rate: 25,
    is: (cards) => {
      const min = Math.min(...cards.map(_ => _.number));
      const max = Math.max(...cards.map(_ => _.number));
      return (
        cards.filter(_ => _.number === min).length >= 4
        || cards.filter(_ => _.number === max).length >= 4
      );
    },
  },
  {
    name: 'Flash',
    rate: 6,
    is: cards => isFlash(cards),
  },
  {
    name: 'Straight',
    rate: 4,
    is: cards => isStraight(cards),
  },
];
export const pokerHand = hand => 0;
