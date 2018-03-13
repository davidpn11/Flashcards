import { Platform, TouchableNativeFeedback } from 'react-native'

export const isAndroid = Platform.OS === 'android'

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
