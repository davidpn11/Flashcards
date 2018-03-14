import React from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { colorPrimary, colorPrimaryDark, white } from './utils/colors'
import { Constants } from 'expo'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { isAndroid } from './utils/helpers'
import Deck from './components/Deck'

function MainStatusBar({ ...props }) {
  return (
    <View
      style={{
        backgroundColor: colorPrimary,
        height: Constants.statusBarHeight,
      }}
    >
      <StatusBar translucent stlye={styles.statusBar} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainStatusBar backgroundColor={colorPrimary} />
        <View style={styles.toolbar}>
          {isAndroid ? (
            <MaterialIcons name="search" size={30} color={white} />
          ) : (
            <Ionicons name="ios-search" size={30} color={white} />
          )}
        </View>
        <Deck />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: colorPrimary,
    height: Constants.statusBarHeight,
  },
  toolbar: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    maxHeight: 50,
    backgroundColor: colorPrimary,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    elevation: 2,
  },
})
