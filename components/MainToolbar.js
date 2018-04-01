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
  onBackPress: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default MainToolbar
