export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

//@flow
export function getDecks() {
  return {
    type: GET_DECKS,
    data: [],
  }
}

export function addDeck(deck: object) {
  return {
    type: ADD_DECK,
    data: deck,
  }
}
