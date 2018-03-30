import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { cancelColor } from '../utils/colors'
import {
  Modal,
  Button,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph,
} from 'react-native-paper'
import styled from 'styled-components'

const ModalWrapper = styled(Card)`
  margin: 0 20px 0 20px;
  padding: 5px;
`
const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`

export default function ConfirmationModal({
  modalText,
  onCancel,
  onConfirm,
  isToggle,
}) {
  return (
    <Modal visible={isToggle} onDismiss={() => onCancel()}>
      <ModalWrapper>
        <CardContent>
          <Title>{modalText}</Title>
        </CardContent>
        <Actions>
          <Button onPress={() => onCancel()} color={cancelColor}>
            Cancel
          </Button>
          <Button onPress={() => onConfirm()}>Confirm</Button>
        </Actions>
      </ModalWrapper>
    </Modal>
  )
}
