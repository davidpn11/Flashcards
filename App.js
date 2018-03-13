import React from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { colorPrimary, colorPrimaryDark, white } from './utils/colors'
import { Constants } from 'expo'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { isAndroid } from './utils/helpers'
function MainStatusBar({ ...props }) {
  return (
    <View
      style={{
        backgroundColor: colorPrimary,
        height: Constants.statusBarHeight,
      }}
    >
      <StatusBar translucent backgroundColor={colorPrimary} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainStatusBar backgroundColor={colorPrimary} />
        <View style={styles.toolbar}>
          {isAndroid ? (
            <MaterialIcons name="search" size={30} color={white} />
          ) : (
            <Ionicons name="ios-search" size={30} color={white} />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight,
  },
  toolbar: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    maxHeight: 50,
    backgroundColor: colorPrimary,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
})
