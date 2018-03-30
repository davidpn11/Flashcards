import { GET_DECKS, ADD_DECK, REMOVE_DECK } from '../actions/constants'
import { combineReducers } from 'redux'
const initialState = []

function deckReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.data
    case ADD_DECK:
      return [action.data, ...state]
    case REMOVE_DECK:
      return state.filter((deck) => deck.name !== action.data)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  decks: deckReducer,
})

export default rootReducer
