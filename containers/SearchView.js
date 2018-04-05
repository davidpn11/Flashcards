import React, { Component } from 'react'
import { View } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import PropTypes from 'prop-types'
import { getDecks } from '../actions'
import { connect } from 'react-redux'
import DeckList from '../components/DeckList'
import styled from 'styled-components'
import { Card, TextInput } from 'react-native-paper'
import * as _ from 'lodash'

const SearchBox = styled(Card)`
  margin: 5px 10px;
  padding: 5px;
`
const SearchTextInput = styled(TextInput)`
  margin: 0 !important;
`

class SearchView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    decks: PropTypes.any,
    getDecks: PropTypes.any,
  }

  state = {
    decks: [],
    searchInput: '',
    filteredDecks: [],
  }

  openDeck(name) {
    this.props.navigation.navigate('DeckDetail', { name })
  }

  componentDidMount() {
    const { decks } = this.props
    this.setState({ decks })
  }

  makeSearch(searchInput) {
    let { filteredDecks, decks } = this.state
    filteredDecks = decks.filter(
      (deck) => deck.name.indexOf(searchInput) !== -1
    )
    this.setState({ searchInput, filteredDecks })
  }

  render() {
    const { filteredDecks } = this.state
    return (
      <View>
        <MainToolbar
          title="Search"
          onBackPress={() => this.props.navigation.goBack()}
        />
        <SearchBox>
          <SearchTextInput
            label="Search"
            value={this.state.searchInput}
            onChangeText={(searchInput) => this.makeSearch(searchInput)}
          />
        </SearchBox>
        <DeckList
          decks={filteredDecks}
          openDeck={(name) => this.openDeck(name)}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { decks: state.decks }
}

export default connect(mapStateToProps, { getDecks })(SearchView)
