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
    openDeck: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getDecks && this.props.getDecks()
  }

  openDeck(name) {
    this.props.openDeck(name)
  }

  getUserDecks() {
    const { decks } = this.props
    return _.map(decks, (el) => (
      <Deck key={el.name} onClick={(id) => this.openDeck(id)} deck={el} />
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
  return { decks: state.decks }
}

export default connect(mapStateToProps, { getDecks })(DeckList)
