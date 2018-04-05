import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainToolbar from '../components/MainToolbar'
import PropTypes from 'prop-types'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { TextInput, Button } from 'react-native-paper'

class NewDeckView extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addDeck: PropTypes.func.isRequired,
  }

  state = {
    name: '',
  }

  addDeck() {
    const { name } = this.state
    this.props
      .addDeck({ name })
      .then(() => this.props.navigation.navigate('DeckDetail', { name }))
      .catch((err) => {
        console.error('err', err)
        alert(err.message.toUpperCase())
      })
  }

  render() {
    return (
      <View>
        <MainToolbar
          title="New Deck"
          onBackPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Name"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
          <Button
            primary
            disabled={this.state.name.length === 0}
            raised
            onPress={() => this.addDeck()}
          >
            Submit
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
})

export default connect(null, { addDeck })(NewDeckView)
