import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import MainToolbar from '../components/MainToolbar'
import PropTypes from 'prop-types'
import { getDecks } from '../actions'
import styled from 'styled-components'
import { connect } from 'react-redux'
import QuizCard from '../components/QuizCard'
import AnswerOption from '../components/AnswerOptions'
import ResultCard from '../components/ResultCard'
const Wrapper = styled.View`
  height: 70%;
  position: relative;
`
const ContentWrapper = styled.View`
  height: 100%;
  justify-content: space-between;
`

const Counter = styled.Text`
  font-weight: 700;
  font-size: 20px;
  margin: 10px 0 10px 10px;
`

class QuizView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    deck: PropTypes.object.isRequired,
  }

  state = {
    isQuizFinished: false,
    current: {},
    answered: [],
  }

  setAnswer(isCorrect) {
    let { current, answered, cards, total } = this.state
    console.log(cards.length)
    const answer = { id: current.id, question: current.question, isCorrect }
    answered = [answer, ...answered]
    if (cards.length !== 0) {
      current = cards.shift()
      this.setState({ current, answered, cards })
    } else {
      this.setState({ isQuizFinished: true, answered, current: {} })
    }
  }

  setCounter() {
    const { total } = this.state
    const missing = this.state.answered.length + 1
    return `${missing}/${total}`
  }

  componentDidMount() {
    this.props.deck &&
      this.setState({ cards: this.props.deck.cards }, () => {
        let { cards } = this.state
        const total = cards.length
        const current = cards.shift()
        this.setState({ cards, current, total })
      })
  }

  render() {
    let { current, isQuizFinished, answered } = this.state
    return (
      <Wrapper>
        <MainToolbar
          title={isQuizFinished ? 'RESULTS' : 'QUIZ'}
          onBackPress={() => this.props.navigation.goBack()}
        />
        {!isQuizFinished ? (
          <View>
            <Counter>{this.setCounter()}</Counter>
            <ContentWrapper>
              <QuizCard cardData={current} />
              <AnswerOption
                setAnswer={(isCorrect) => this.setAnswer(isCorrect)}
              />
            </ContentWrapper>
          </View>
        ) : (
          <View>
            {answered.map((answer) => (
              <ResultCard key={answer.id} answer={answer} />
            ))}
            <Button
              raised
              primary
              onPress={() => this.props.navigation.goBack()}
            >
              Back to Deck
            </Button>
          </View>
        )}
      </Wrapper>
    )
  }
}
function mapStateToProps(state, ownProps) {
  const { name } = ownProps.navigation.state.params
  const deck = state.decks.find((d) => d.name === name)
  return { deck }
}

export default connect(mapStateToProps, { getDecks })(QuizView)
