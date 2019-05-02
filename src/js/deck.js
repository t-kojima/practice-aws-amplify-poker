export default class Deck {
  constructor() {
    this.cards = ['spade', 'club', 'diamond', 'heart']
      .map(suit => Array.from(Array(13), (_, i) => i + 1).map(number => ({
        suit,
        number,
      })))
      .reduce((x, y) => [...x, ...y], []);
  }

  pick(count = 1) {
    return Array.from(Array(count)).map(
      () => this.cards.splice(
        Math.floor(Math.random() * Math.floor(this.cards.length)),
        1,
      )[0],
    );
  }
}
