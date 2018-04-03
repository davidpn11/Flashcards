import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import { Button } from 'react-native-paper'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Entypo } from '@expo/vector-icons'

const Wrapper = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

function NotFound({ messageText, iconSize, fontSize, color }) {
  return (
    <Wrapper>
      <Entypo name="emoji-sad" size={iconSize} color={color} />
      <Text style={{ color, fontSize, fontWeight: '500', marginTop: 10 }}>
        {messageText}
      </Text>
    </Wrapper>
  )
}

NotFound.propTypes = {
  messageText: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default NotFound
