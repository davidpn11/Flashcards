import {
  GET_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD,
} from '../actions/constants'
import { combineReducers } from 'redux'
const initialState = []

function deckReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.data
    case ADD_DECK:
      return action.data
    case REMOVE_DECK:
      return state.filter((deck) => deck.name !== action.data)
    case ADD_CARD:
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({
  decks: deckReducer,
})

export default rootReducer
