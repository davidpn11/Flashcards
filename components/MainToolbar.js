import React, { Component } from 'react'
import {
  Toolbar,
  ToolbarBackAction,
  ToolbarContent,
  ToolbarAction,
} from 'react-native-paper'
import PropTypes from 'prop-types'

function MainToolbar({ onBackPress, onSearch, title, subtitle, onRemove }) {
  return (
    <Toolbar>
      {onBackPress && <ToolbarBackAction onPress={onBackPress} />}
      <ToolbarContent title={title} subtitle={subtitle} />
      {onSearch && <ToolbarAction icon="search" onPress={onSearch} />}
      {onRemove && <ToolbarAction icon="delete" onPress={onRemove} />}
    </Toolbar>
  )
}

MainToolbar.propTypes = {
  onBackPress: PropTypes.func,
  onSearch: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onRemove: PropTypes.func,
}

export default MainToolbar
