import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import styled from 'styled-components'

const Fab = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  elevation: 2;
  border-radius: 50;
  shadow-color: #bcc0c3;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.8;
  shadow-radius: 1.2;
`

class FloatButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }
  render() {
    return (
      <View style={styles.container}>
        <Fab
          style={{ backgroundColor: this.props.color }}
          onPress={() => this.props.onClick()}
        >
          {this.props.icon}
        </Fab>
      </View>
    )
  }
}

export default FloatButton
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
