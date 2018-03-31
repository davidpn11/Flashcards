import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'
import uuid from 'uuid'
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

export function addCardStorage(card: object, deckName: string) {
  card = { id: uuid.v4(), ...card }
  return getDecksStorage().then((decks) => {
    if (decks) {
      decks = JSON.parse(decks)
      decks = decks.map((deck) => {
        if (deck.name === deckName) {
          deck.cards = deck.cards.concat(card)
        }
        return deck
      })
      console.log('AddCards', decks)
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks)).then(
        () => decks
      )
    } else {
      return undefined
    }
  })
}

export function removeCardStorage(cardId: string, deckName: string) {}
