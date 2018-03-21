import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Card } from 'react-native-paper'
import { isAndroid } from '../utils/helpers'
import PropTypes from 'prop-types'

const DeckCard = styled(Card)`
  margin-top: 10px;
  min-height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const Title = styled.Text`
  font-weight: ${isAndroid ? 400 : 600};
  font-size: 18px;
  width: 100%;
`

const NCards = styled.Text`
  font-size: 12px;
  width: 100%;
  display: flex;
  text-align: right;
`

class Deck extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    nCards: PropTypes.number.isRequired,
  }

  render() {
    const { onClick, title, nCards } = this.props
    return (
      <DeckCard onPress={this.props.onClick}>
        <Title>{title}</Title>
        <NCards>{nCards} cards</NCards>
      </DeckCard>
    )
  }
}

export default Deck
