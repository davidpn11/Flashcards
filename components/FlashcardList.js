import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Flashcard from './Flashcard'
import { removeCard } from '../actions'
import { connect } from 'react-redux'
import NotFound from './NotFound'
import { gray400 } from '../utils/colors'
const { width } = Dimensions.get('window')

const NotFoundWrapper = styled.View`
  height: 200px;
  width: ${width};
`
class FlashcardList extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    removeCard: PropTypes.func.isRequired,
    deckName: PropTypes.string.isRequired,
  }

  removeLocalCard(id) {
    this.props
      .removeCard(id, this.props.deckName)
      .catch((err) => console.error(err))
  }

  getCards() {
    const { cards } = this.props
    return cards.length > 0 ? (
      cards.map((card) => (
        <Flashcard
          key={card.id}
          cardData={card}
          onRemove={(id) => this.removeLocalCard(id)}
        />
      ))
    ) : (
      <NotFoundWrapper>
        <NotFound
          messageText="You don't have any cards"
          fontSize={20}
          iconSize={50}
          color={gray400}
        />
      </NotFoundWrapper>
    )
  }
  render() {
    return <ScrollView horizontal={true}>{this.getCards()}</ScrollView>
  }
}

export default connect(null, { removeCard })(FlashcardList)
