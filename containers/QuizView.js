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
import ConfirmationModal from '../components/ConfirmationModal'
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers'

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
    getDecks: PropTypes.func.isRequired,
  }

  state = {
    modalVisible: false,
    isQuizFinished: false,
    current: {},
    answered: [],
  }

  _showModal = () => this.setState({ modalVisible: true })
  _hideModal = () => this.setState({ modalVisible: false })

  backToDeckDetails() {
    this._hideModal()
    this.props.navigation.goBack()
  }

  setAnswer(isCorrect) {
    let { current, answered, cards, total } = this.state
    const answer = { id: current.id, question: current.question, isCorrect }
    answered = [answer, ...answered]
    if (cards.length !== 0) {
      current = cards.shift()
      this.setState({ current, answered, cards })
    } else {
      clearLocalNotifications().then(() => setLocalNotification())
      this.setState({ isQuizFinished: true, answered, current: {} })
    }
  }

  setCounter() {
    const { total } = this.state
    const missing = this.state.answered.length + 1
    return `${missing}/${total}`
  }

  startQuiz() {
    let { cards } = this.props.deck
    cards = Object.create(cards)
    this.setState({ cards }, () => {
      const total = cards.length
      const current = cards.shift()
      this.setState({
        cards,
        current,
        total,
        isQuizFinished: false,
        answered: [],
      })
    })
  }

  componentDidMount() {
    this.props.deck && this.startQuiz()
  }

  render() {
    let { current, isQuizFinished, answered, modalVisible } = this.state
    return (
      <Wrapper>
        <MainToolbar
          title={isQuizFinished ? 'RESULTS' : 'QUIZ'}
          onBackPress={() =>
            isQuizFinished && !modalVisible
              ? this.props.navigation.goBack()
              : this.setState({ modalVisible: true })
          }
        />
        {!isQuizFinished ? (
          <View>
            <Counter>{this.setCounter()}</Counter>
            <ContentWrapper>
              <QuizCard cardData={current || {}} />
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
            <Button primary onPress={() => this.startQuiz()}>
              Restart Quiz
            </Button>
          </View>
        )}
        <ConfirmationModal
          isToggle={modalVisible}
          onCancel={() => this._hideModal()}
          onConfirm={() => this.backToDeckDetails()}
          modalText="Do you want to exit the quiz?"
        />
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
