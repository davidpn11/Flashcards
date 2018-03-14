import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 30px;
  margin: 20px 10px 10px 10px;
  background-color: #fff;
  shadow-color: #bcc0c3;
  shadow-offset: 0px 0px;
  shadow-opacity: 1;
  shadow-radius: 4;
  elevation: 3;
`

class Deck extends Component {
  render() {
    return <Wrapper style={{ height: 30 }} />
  }
}

export default Deck
