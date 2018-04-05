import React, { Component } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import Deck from './Deck'
import PropTypes from 'prop-types'
import NotFound from '../components/NotFound'
import { gray400 } from '../utils/colors'
import * as _ from 'lodash'
import styled from 'styled-components'

const { height, width } = Dimensions.get('window')

const Wrapper = styled.View`
  position: relative;
  padding: 0 10px 0 10px;
`

class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.array.isRequired,
    openDeck: PropTypes.func.isRequired,
  }

  openDeck(name) {
    this.props.openDeck(name)
  }

  getUserDecks(decks) {
    return _.map(decks, (el) => (
      <Deck key={el.name} onClick={(id) => this.openDeck(id)} deck={el} />
    ))
  }

  render() {
    const { decks } = this.props
    return (
      <Wrapper>
        {decks && decks.length > 0 ? (
          <ScrollView>{this.getUserDecks(decks)}</ScrollView>
        ) : (
          <View style={{ width: width - 40, height: height - 100 }}>
            <NotFound
              messageText="You don't have any decks"
              fontSize={20}
              iconSize={50}
              color={gray400}
            />
          </View>
        )}
      </Wrapper>
    )
  }
}

export default DeckList
