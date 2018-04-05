import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { cancelColor, confirmColor } from '../utils/colors'

const Result = styled(Card)`
  position: relative;
  margin: 5px 10px;
  border-radius: 10;
`

const ResultWrapper = styled.View`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Question = styled.Text`
  width: 70%;
  font-weight: 500;
`
function ResultCard({ answer }) {
  return (
    <Result>
      <ResultWrapper>
        <Question>{answer.question}</Question>
        {answer.isCorrect ? (
          <FontAwesome name="check-circle" size={30} color={confirmColor} />
        ) : (
          <FontAwesome name="times-circle" size={30} color={cancelColor} />
        )}
      </ResultWrapper>
    </Result>
  )
}

ResultCard.propTypes = {
  answer: PropTypes.object.isRequired,
}

export default ResultCard
