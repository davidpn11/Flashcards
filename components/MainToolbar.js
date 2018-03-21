import React, { Component } from 'react'
import {
  Toolbar,
  ToolbarBackAction,
  ToolbarContent,
  ToolbarAction,
} from 'react-native-paper'

export default function MainToolbar({
  onBackPress,
  onSearch,
  title,
  subtitle,
}) {
  return (
    <Toolbar>
      {onBackPress && <ToolbarBackAction onPress={onBackPress} />}
      <ToolbarContent title={title} subtitle={subtitle} />
      {onSearch && <ToolbarAction icon="search" onPress={onSearch} />}
    </Toolbar>
  )
}
