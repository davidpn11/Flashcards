import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
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
    name: PropTypes.string.isRequired,
    nCards: PropTypes.number.isRequired,
  }

  state = {
    marginLeft: new Animated.Value(300),
  }
  componentDidMount() {
    this.slideIn()
  }

  slideIn() {
    const { marginLeft } = this.state
    Animated.timing(marginLeft, {
      toValue: 0,
      duration: 100,
    }).start()
  }

  render() {
    const { onClick, name, nCards } = this.props
    const { marginLeft } = this.state
    return (
      <Animated.View style={{ marginLeft }}>
        <DeckCard onPress={() => this.props.onClick(this.props.name)}>
          <Title>{name}</Title>
          <NCards>{nCards} cards</NCards>
        </DeckCard>
      </Animated.View>
    )
  }
}

export default Deck
