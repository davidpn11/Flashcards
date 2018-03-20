import React from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import {
  colorPrimary,
  colorPrimaryDark,
  white,
  colorAccent,
  whitesmoke,
} from './utils/colors'
import { isAndroid } from './utils/helpers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import styled from 'styled-components'
import {
  Provider as PaperProvider,
  DefaultTheme,
  FAB,
} from 'react-native-paper'
import MainToolbar from './components/MainToolbar'
import Deck from './components/Deck'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colorPrimary,
    accent: colorAccent,
    background: white,
    paper: whitesmoke,
  },
}

export default class App extends React.Component {
  addDeck(event) {
    console.log('teste')
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <PaperProvider theme={theme}>
          <MainToolbar
            title="Flashcards"
            onSearch={() => this.addDeck()}
            onBackPress={() => this.addDeck()}
          />
          <View style={styles.container}>
            <Deck onClick={() => this.addDeck()} title="titulo" nCards="5" />
            <FAB style={styles.fabStyle} medium icon="add" onPress={() => {}} />
          </View>
        </PaperProvider>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  fabStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})
