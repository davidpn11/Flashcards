import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

//@flow

export function deleteDeckStorage() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}

export function getDecksStorage() {
  // deleteDeckStorage()
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

export function removeDeckStorage(name: string) {
  return getDecksStorage().then((result) => {
    if (result) {
      result = JSON.parse(result)
      const index = result.findIndex((d) => d.name === name)
      if (index === -1) {
        return new Error()
      }
      const decks = [...result.slice(0, index), ...result.slice(index + 1)]
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    } else {
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([deck]))
    }
  })
}
