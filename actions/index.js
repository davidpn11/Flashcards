import {
  GET_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD,
} from './constants'
import {
  getDecksStorage,
  addDeckStorage,
  removeDeckStorage,
  addCardStorage,
  removeCardStorage,
} from '../utils/api'

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

export const removeDeck = (name: string) => (dispatch) => {
  removeDeckStorage(name)
  return removeDeckStorage(name).then((result) => {
    if (result) {
      return Promise.reject(new Error('something went wrong'))
    }
    return dispatch({
      type: REMOVE_DECK,
      data: name,
    })
  })
}

export const addCard = (card: object, deckName: string) => {
  addCardStorage(card, deckName).then((deck) => console.log('yahaaaa', deck))
}
