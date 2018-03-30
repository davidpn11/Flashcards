import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import ConfirmationModal from '../components/ConfirmationModal'
import PropTypes from 'prop-types'

class DeckDetailView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
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
    this._showModal()
  }

  render() {
    const { deck, visible } = this.state
    const name = deck ? deck.name : ''
    return (
      <View style={{ flex: 1 }}>
        <MainToolbar
          title={name}
          onRemove={() => this.removeDeck()}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <ConfirmationModal
          isToggle={visible}
          onCancel={() => this._hideModal()}
          onConfirm={() => this._hideModal()}
          modalText="Do you want to delete this deck?"
        />
      </View>
    )
  }
}

export default DeckDetailView
