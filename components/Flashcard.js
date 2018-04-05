import React, { Component } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Paragraph,
  Button,
} from 'react-native-paper'
import { Text, View, Dimensions } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colorAccent, cancelColor, gray200, gray500 } from '../utils/colors'
const { height, width } = Dimensions.get('window')
const cardWidth = width - 100
const CardWrapper = styled(Card)`
  width: ${cardWidth};
  margin: 5px 20px 5px 20px;
  display: flex;
  align-items: stretch;
`
const QuestionWrapper = styled.View`
  width: 100%;
  min-height: 100px;
  padding: 10px;
`
const AnswerWrapper = styled.View`
  width: 100%;
  min-height: 50px;
  padding: 10px;
`
const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`

class Flashcard extends Component {
  static propTypes = {
    cardData: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
  }

  state = {
    showAnswer: false,
  }

  render() {
    const { cardData, onRemove } = this.props
    return (
      <View>
        <CardWrapper>
          <QuestionWrapper>
            <Text>{cardData.question}</Text>
          </QuestionWrapper>
          {this.state.showAnswer ? (
            <AnswerWrapper>
              <Text style={{ color: gray500 }}>{cardData.answer}</Text>
            </AnswerWrapper>
          ) : (
            <Actions>
              <Button onPress={() => onRemove(cardData.id)} color={cancelColor}>
                Delete
              </Button>
              <Button
                color={colorAccent}
                onPress={() => this.setState({ showAnswer: true })}
              >
                Show Answer
              </Button>
            </Actions>
          )}
        </CardWrapper>
      </View>
    )
  }
}

export default Flashcard
