import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import PropTypes from 'prop-types'

class NewDeckView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }
  render() {
    return (
      <View>
        <MainToolbar
          title="New Deck"
          onBackPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

export default NewDeckView
