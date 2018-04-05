import { Platform, TouchableNativeFeedback, AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const isAndroid = Platform.OS === 'android'
export const DECK_STORAGE_KEY = 'FlashCards:DeckStorageKey'
export const NOTIFICATION_KEY = 'FashCards:NotificationKey'

export const touchableBackground = (color, fixRadius) => {
  if (isAndroid) {
    if (Platform['Version'] >= 21) {
      return TouchableNativeFeedback.Ripple(
        color || 'rgba(255,255,255,0.75)',
        fixRadius
      )
    } else {
      TouchableNativeFeedback.SelectableBackground()
    }
  }
  return undefined
}

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  )
}

export function createNotification() {
  return {
    title: 'Start a Quiz!',
    body: `Don't forget to do a quiz to improve your knowledge!`,
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      stick: false,
      vibrate: true,
    },
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          status === 'granted' &&
            Notifications.cancelAllScheduledNotificationsAsync()

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(9)
          tomorrow.setMinutes(0)
          Notifications.scheduleLocalNotificationAsync(createNotification(), {
            time: tomorrow,
            repeat: 'day',
          })
          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        })
      }
    })
}
