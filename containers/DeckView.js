import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FAB } from 'react-native-paper'
import MainToolbar from '../components/MainToolbar'
import DeckList from '../components/DeckList'
import PropTypes from 'prop-types'

class DeckView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainToolbar title="Flashcards" onSearch={() => this.addDeck()} />
        <View style={styles.container}>
          <DeckList />
          <FAB
            style={styles.fabStyle}
            medium
            icon="add"
            onPress={() => this.props.navigation.navigate('NewDeck')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    flex: 1,
  },
  fabStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})

export default DeckView
