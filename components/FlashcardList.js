import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Flashcard from './Flashcard'
import { removeCard } from '../actions'
import { connect } from 'react-redux'
const CardList = styled.ScrollView``

class FlashcardList extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    removeCard: PropTypes.func.isRequired,
  }

  removeLocalCard(id) {
    console.log('remove', id)
  }

  getCards() {
    const { cards } = this.props
    return cards.map((card) => (
      <Flashcard
        key={card.id}
        cardData={card}
        removeCard={this.removeLocalCard}
      />
    ))
  }
  render() {
    return <ScrollView horizontal={true}>{this.getCards()}</ScrollView>
  }
}

export default connect(null, { removeCard })(FlashcardList)
