export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

//@flow
export function getDecks() {
  console.log('getDecks')
  return {
    type: GET_DECKS,
    data: [],
  }
}

export const addDeck = (deck: object) => (dispatch) => {
  return new Promise((resolve) => resolve()).then(() =>
    dispatch({
      type: ADD_DECK,
      data: deck,
    })
  )
}
