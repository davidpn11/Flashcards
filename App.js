import React from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { colorPrimary, colorPrimaryDark, white } from './utils/colors'
import { Constants } from 'expo'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { isAndroid } from './utils/helpers'
import Deck from './components/Deck'
import Header from './components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
