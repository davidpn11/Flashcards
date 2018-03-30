import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

//@flow

export function deleteDeckStorage() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}

export function getDecksStorage() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function addDeckStorage(deck: object) {
  // deleteDeckStorage()
  return getDecksStorage().then((result) => {
    if (result) {
      result = JSON.parse(result)
      const index = result.find((d) => d.name === deck.name)
      if (index) {
        return new Error()
      }
      const decks = [deck, ...result]
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    } else {
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([deck]))
    }
  })
}
