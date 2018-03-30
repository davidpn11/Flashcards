import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import ConfirmationModal from '../components/ConfirmationModal'
import PropTypes from 'prop-types'
import { removeDeck } from '../actions'
import { connect } from 'react-redux'

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
    deck: undefined,
    visible: false,
  }

  _showModal = () => this.setState({ visible: true })
  _hideModal = () => this.setState({ visible: false })

  removeDeck() {
    const { name } = this.state.deck
    this._hideModal()
    this.props.removeDeck(name).then((result) => this.props.navigation.goBack())
  }

  render() {
    const { deck, visible } = this.state
    const name = deck ? deck.name : ''
    return (
      <View style={{ flex: 1 }}>
        <MainToolbar
          title={name}
          onRemove={() => this._showModal()}
          onBackPress={() => this.props.navigation.goBack()}
        />
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
