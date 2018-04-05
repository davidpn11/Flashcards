import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { TextInput, Button } from 'react-native-paper'
import MainToolbar from '../components/MainToolbar'
import styled from 'styled-components'

const Container = styled.View`
  padding: 0 15px 0 15px;
`

class NewCardView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addCard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    try {
      const { name } = this.props.navigation.state.params
      this.setState({ deckName: name })
    } catch (err) {}
  }

  state = {
    deckName: '',
    question: '',
    answer: '',
  }

  addNewCard() {
    const { question, answer, deckName } = this.state
    this.props
      .addCard({ question, answer }, deckName)
      .then(() => this.props.navigation.goBack())
      .catch((err) => console.error(err))
  }

  render() {
    return (
      <View>
        <MainToolbar
          title="New Card"
          onBackPress={() => this.props.navigation.goBack()}
        />
        <Container>
          <TextInput
            label="Question"
            value={this.state.question}
            onChangeText={(question) => this.setState({ question })}
          />
          <TextInput
            label="Answer"
            value={this.state.answer}
            onChangeText={(answer) => this.setState({ answer })}
          />
          <Button
            primary
            disabled={
              this.state.answer.length === 0 || this.state.question.length === 0
            }
            raised
            onPress={() => this.addNewCard()}
          >
            Submit
          </Button>
        </Container>
      </View>
    )
  }
}

export default connect(null, { addCard })(NewCardView)
