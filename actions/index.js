export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

//@flow
export function getDecks() {
  return {
    type: GET_DECKS,
    data: [],
  }
}

export const addDeck = (deck: object) => (dispatch) => {
  console.log(deck)
  return dispatch({
    type: ADD_DECK,
    data: deck,
  })
}
