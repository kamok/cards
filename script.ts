// Time Limit: ~40 minutes
// A deck of cards has 13 ranks and 4 suites:
// ranks: "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
// suites: 'spades', 'hearts', 'clubs', 'diamonds'
// Using typescript,
// implement the Deck class' constructor, shuffle and draw functions.
// create the unit tests to verify and cover edge cases

export class Card {
  suite: string;
  rank: string;
}

export class Deck {
  cards: Card[];

  constructor() {
    throw "Not implemented";
  }

  shuffle() {
    throw "Not implemented";
  }

  draw(n: Number): Card[] {
    throw "Not implemented";
  }
}
