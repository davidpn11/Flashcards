import React from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import {
  colorPrimary,
  colorPrimaryDark,
  white,
  colorAccent,
} from './utils/colors'
import { Constants } from 'expo'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { isAndroid } from './utils/helpers'
import Deck from './components/Deck'
import Header from './components/Header'
import FloatButton from './components/FloatButton'
import Card from './components/Card'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  addDeck(event) {
    console.log('teste')
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Header />
          <Card>
            <Text>oi</Text>
          </Card>
          <View style={styles.fabWrapper}>
            <FloatButton
              color={colorAccent}
              onClick={this.addDeck}
              icon={<MaterialIcons name="add" size={30} color={white} />}
            />
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})
