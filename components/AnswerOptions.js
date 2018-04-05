import React from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  cancelColor,
  cancelColorLight,
  confirmColor,
  confirmColorLight,
} from '../utils/colors'

const { width } = Dimensions.get('window')
console.log(width)
const Wrapper = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  justify-content: space-between;
`
const CheckBtn = styled.TouchableOpacity`
  border: 1px solid;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 100;
`

function AnswerOptions({ setAnswer }) {
  return (
    <Wrapper>
      <CheckBtn
        onPress={() => setAnswer(true)}
        style={{
          backgroundColor: confirmColorLight,
          borderColor: confirmColor,
        }}
      >
        <FontAwesome name="check" size={50} color={confirmColor} />
      </CheckBtn>
      <CheckBtn
        onPress={() => setAnswer(false)}
        style={{
          backgroundColor: cancelColorLight,
          borderColor: cancelColor,
        }}
      >
        <FontAwesome name="times" size={50} color={cancelColor} />
      </CheckBtn>
    </Wrapper>
  )
}

AnswerOptions.propTypes = {
  setAnswer: PropTypes.func.isRequired,
}
export default AnswerOptions
