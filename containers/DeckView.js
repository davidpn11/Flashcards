import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FAB } from 'react-native-paper'
import MainToolbar from '../components/MainToolbar'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import DeckList from '../components/DeckList'
import PropTypes from 'prop-types'

class DeckView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    decks: PropTypes.any,
    getDecks: PropTypes.any,
  }

  componentDidMount() {
    this.props.getDecks && this.props.getDecks()
  }

  openDeck(name) {
    this.props.navigation.navigate('DeckDetail', { name })
  }

  render() {
    const { decks } = this.props
    return (
      <View style={{ flex: 1 }}>
        <MainToolbar
          title="Flashcards"
          onSearch={() => this.props.navigation.navigate('SearchDeck')}
        />
        <View style={styles.container}>
          <DeckList decks={decks} openDeck={(name) => this.openDeck(name)} />
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

function mapStateToProps(state) {
  return { decks: state.decks }
}

export default connect(mapStateToProps, { getDecks })(DeckView)
