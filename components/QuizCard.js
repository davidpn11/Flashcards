import React, { Component } from 'react'
import { Text, Image, View, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Card,
  CardActions,
  CardContent,
  Paragraph,
  Button,
} from 'react-native-paper'
import { colorAccent, cancelColor, gray200, gray500 } from '../utils/colors'

const { height, width } = Dimensions.get('window')

const CardWrapper = styled(Card)`
  min-height: 100px;
  margin: 5px 10px 5px 10px;
`
const QuestionWrapper = styled.View`
  width: 100%;
  min-height: 50px;
  padding: 10px;
  align-items: flex-start;
`
const AnswerWrapper = styled.View`
  width: 100%;
  min-height: 50px;
  padding: 10px;
  align-items: flex-start;
`
const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`

const TextQuestion = styled.Text`
  font-weight: 500;
  font-size: 18px;
`
const TextAnswer = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: ${gray500};
`

class QuizCard extends Component {
  static propTypes = {
    cardData: PropTypes.object.isRequired,
  }

  state = {
    showAnswer: false,
  }

  render() {
    let { cardData } = this.props
    return (
      <CardWrapper>
        <QuestionWrapper>
          <TextQuestion>{cardData.question}</TextQuestion>
        </QuestionWrapper>
        {this.state.showAnswer ? (
          <AnswerWrapper>
            <TextAnswer>{cardData.answer}</TextAnswer>
          </AnswerWrapper>
        ) : (
          <Actions>
            <Button
              color={colorAccent}
              onPress={() => this.setState({ showAnswer: true })}
            >
              Show Answer
            </Button>
          </Actions>
        )}
      </CardWrapper>
    )
  }
}

export default QuizCard
