import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import ConfirmationModal from '../components/ConfirmationModal'
import PropTypes from 'prop-types'
import { removeDeck, getDecks } from '../actions'
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
    deck: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.deck && this.setState({ deck: this.props.deck })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.deck !== nextProps.deck) {
      this.setState({ deck: nextProps.deck })
    }
  }

  state = {
    visible: false,
  }

  _showModal = () => this.setState({ visible: true })
  _hideModal = () => this.setState({ visible: false })

  removeDeck() {
    const { name } = this.props.deck
    this._hideModal()
    this.props.removeDeck(name).then((result) => this.props.navigation.goBack())
  }

  addCard() {
    const { name } = this.state.deck
    this.props.navigation.navigate('NewCard', { name })
  }

  startQuiz() {
    console.log('quiz')
    const { name } = this.state.deck
    this.props.navigation.navigate('Quiz', { name })
  }

  render() {
    const { deck, visible } = this.state
    const name = deck ? deck.name : ''
    const cards = deck ? deck.cards : []

    return (
      <View style={{ flex: 1 }}>
        <MainToolbar
          title={name}
          onRemove={() => this._showModal()}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <CardsWrapper>
          <FlashcardList cards={cards} deckName={name} />
        </CardsWrapper>

        <Btn raised primary onPress={() => this.addCard()}>
          Add Card
        </Btn>
        <Btn
          raised
          disabled={cards.length === 0}
          onPress={() => this.startQuiz()}
        >
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

function mapStateToProps(state, ownProps) {
  const { name } = ownProps.navigation.state.params
  const deck = state.decks.find((d) => d.name === name)
  return { deck }
}

export default connect(mapStateToProps, { removeDeck, getDecks })(
  DeckDetailView
)
