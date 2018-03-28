import React, { Component } from 'react'
import { View } from 'react-native'
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
    decks: PropTypes.array,
    getDecks: PropTypes.any,
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
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

  addDeck() {
    console.log('clicke')
  }

  render() {
    return <Wrapper>{this.getUserDecks()}</Wrapper>
  }
}

function mapStateToProps(state) {
  return { decks: state.decks }
}

export default connect(mapStateToProps, { getDecks })(DeckList)
