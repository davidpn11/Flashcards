import { GET_DECKS, ADD_DECK } from '../actions/constants'
import { combineReducers } from 'redux'
const initialState = {}

function deckReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.data
    case ADD_DECK:
      return [action.data, ...state]
    default:
      return state
  }
}

function deckDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      break

    default:
      break
  }
}

const rootReducer = combineReducers({
  decks: deckReducer,
})

export default rootReducer
