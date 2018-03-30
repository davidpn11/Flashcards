import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import styled from 'styled-components'

const Wrapper = styled.View`
  position: relative;
  padding: 0 10px 0 10px;
`

class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.any,
    getDecks: PropTypes.any,
  }

  componentDidMount() {
    this.props.getDecks && this.props.getDecks()
  }

  getUserDecks() {
    const { decks } = this.props
    return _.map(decks, (el) => (
      <Deck
        key={el.name}
        onClick={() => this.addDeck()}
        name={el.name}
        nCards={el.cards.length}
      />
    ))
  }

  render() {
    return (
      <Wrapper>
        <ScrollView>{this.getUserDecks()}</ScrollView>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  console.log('deckList', state)
  return { decks: state.decks }
}

export default connect(mapStateToProps, { getDecks })(DeckList)
