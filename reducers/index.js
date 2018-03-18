import { GET_DECKS, ADD_DECK } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      console.log(state, action)
      return {
        ...state,
      }
    case ADD_DECK:
      return {
        ...state,
      }
    default:
      return state
  }
}
