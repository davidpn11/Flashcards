import { GET_DECKS, ADD_DECK } from './constants'
import { getDecksStorage, addDeckStorage } from '../utils/api'

//@flow
export function getDecks() {
  return (dispatch) => {
    getDecksStorage().then((res) => {
      const data = JSON.parse(res)
      dispatch({
        type: GET_DECKS,
        data,
      })
    })
  }
}

export const addDeck = (deck: object) => (dispatch) => {
  const newDeck = { cards: [], ...deck }
  return addDeckStorage(newDeck).then((result) => {
    if (result) {
      return Promise.reject(new Error('name already exists'))
    }
    return dispatch({
      type: ADD_DECK,
      data: newDeck,
    })
  })
}
