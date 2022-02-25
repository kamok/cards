enum Suite {
  Spades = 'Spades',
  Hearts = 'Hearts',
  Clubs = 'Clubs',
  Diamonds = 'Diamonds'
}

export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

class Card {
  rank: Rank
  suite: Suite
  constructor(rank: Rank, suite: Suite) {
    this.rank = rank
  }
}


const card = new Card("2", Suite.Diamonds);

const generateDeck = () => {
  // ???
}

// Time Limit: ~40 minutes

// Given the basic Card class, create a deck of cards
// Implement a Shuffle Function (to size)
// Implement a draw (to size)
