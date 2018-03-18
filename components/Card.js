import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { whitesmoke } from '../utils/colors'

const CardView = styled.View`
  display: flex;
  margin: 5% 5%;
  padding: 3% 3%;
  shadow-color: #bcc0c3;
  border-radius: 5px;
  shadow-offset: 0 2px;
  shadow-opacity: 0.8;
  shadow-radius: 1.2;
  background-color: ${whitesmoke};
`
class Card extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    console.log(this.props)
    return <CardView>{this.props.children}</CardView>
  }
}

export default Card
