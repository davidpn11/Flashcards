import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import ConfirmationModal from '../components/ConfirmationModal'
import PropTypes from 'prop-types'
import { removeDeck } from '../actions'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button, Card } from 'react-native-paper'
import FlashcardList from '../components/FlashcardList'
const CardsWrapper = styled.View``

const Btn = styled(Button)`
  margin: 5px 20px 5px 20px;
`

class DeckDetailView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    removeDeck: PropTypes.func.isRequired,
  }

  componentDidMount() {
    try {
      const { deck } = this.props.navigation.state.params
      deck = JSON.parse(deck)
      this.setState({ deck })
    } catch (err) {
      console.log(err)
    }
  }

  state = {
    deck: {},
    visible: false,
  }

  _showModal = () => this.setState({ visible: true })
  _hideModal = () => this.setState({ visible: false })

  removeDeck() {
    const { name } = this.state.deck
    this._hideModal()
    this.props.removeDeck(name).then((result) => this.props.navigation.goBack())
  }

  addCard() {
    const { name } = this.state.deck
    this.props.navigation.navigate('NewCard', { name })
  }

  startQuiz() {}

  render() {
    const { deck, visible } = this.state
    const name = deck.name ? deck.name : ''
    const cards = deck.cards ? deck.cards : []

    return (
      <View style={{ flex: 1 }}>
        <MainToolbar
          title={name}
          onRemove={() => this._showModal()}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <CardsWrapper>
          <FlashcardList cards={cards} />
        </CardsWrapper>

        <Btn raised primary onPress={() => this.addCard()}>
          Add Card
        </Btn>
        <Btn raised onPress={() => this.startQuiz()}>
          Start Quiz
        </Btn>

        <ConfirmationModal
          isToggle={visible}
          onCancel={() => this._hideModal()}
          onConfirm={() => this.removeDeck()}
          modalText="Do you want to delete this deck?"
        />
      </View>
    )
  }
}

export default connect(null, { removeDeck })(DeckDetailView)
