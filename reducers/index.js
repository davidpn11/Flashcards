import { GET_DECKS, ADD_DECK } from '../actions'

const initialState = {
  decks: [
    {
      name: 'david',
      cards: [
        { title: 'teste' },
        { title: 'teste2' },
        { title: 'teste3' },
        { title: 'teste4' },
      ],
    },
    {
      name: 'teste2',
      cards: [
        { title: 'teste' },
        { title: 'teste2' },
        { title: 'teste3' },
        { title: 'teste4' },
      ],
    },
  ],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      console.log('GET_DECKS')
      return {
        ...state,
      }
    case ADD_DECK:
      const data = { cards: [], ...action.data }
      const z = state.decks.concat(data)
      console.log(z)
      return {
        ...state,
      }
    default:
      return state
  }
}
