import React, { Component } from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { isAndroid } from '../utils/helpers'
import { Constants } from 'expo'
import { colorPrimary, colorPrimaryDark, white } from '../utils/colors'

export default function Header({ ...props }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colorPrimary,
          height: Constants.statusBarHeight,
        }}
      >
        <StatusBar translucent stlye={styles.statusBar} {...props} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: colorPrimary,
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
    shadowColor: '#bcc0c3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1.2,
    elevation: 2,
  },
})
