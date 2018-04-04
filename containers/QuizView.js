import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import PropTypes from 'prop-types'
import { getDecks } from '../actions'
import styled from 'styled-components'
import { connect } from 'react-redux'
class QuizView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    deck: PropTypes.object.isRequired,
  }

  componentDidMount() {
    console.log(this.props.deck)
  }

  render() {
    return (
      <View>
        <MainToolbar
          title="QUIZ"
          onBackPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { name } = ownProps.navigation.state.params
  const deck = state.decks.find((d) => d.name === name)
  return { deck }
}

export default connect(mapStateToProps, { getDecks })(QuizView)
