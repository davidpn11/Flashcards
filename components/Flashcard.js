import React, { Component } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Paragraph,
  Button,
} from 'react-native-paper'
import { Text, Dimensions } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const { height, width } = Dimensions.get('window')
const cardWidth = width - 100

const CardWrapper = styled(Card)`
  width: ${cardWidth};
  margin: 5px 20px 5px 20px;
  padding: 10px;
`

const QuestionWrapper = styled.View`
  width: 100%;
  min-height: 50px;
`

const AnswerWrapper = styled.View`
  width: 100%;
  min-height: 50px;
`

const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`

class Flashcard extends Component {
  static propTypes = {
    cardData: PropTypes.object.isRequired,
    removeCard: PropTypes.func.isRequired,
  }

  state = {
    showAnswer: false,
  }

  render() {
    const { cardData, removeCard } = this.props
    return (
      <CardWrapper>
        <QuestionWrapper>
          <Text>{cardData.question}</Text>
        </QuestionWrapper>
        {this.state.showAnswer ? (
          <AnswerWrapper>
            <Text>{cardData.answer}</Text>
          </AnswerWrapper>
        ) : (
          <Actions>
            <Button primary onPress={() => this.setState({ showAnswer: true })}>
              Show Answer
            </Button>
          </Actions>
        )}
      </CardWrapper>
    )
  }
}

export default Flashcard
