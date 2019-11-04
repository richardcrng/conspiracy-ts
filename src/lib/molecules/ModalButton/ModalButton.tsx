import React from 'react';
import { Button, Modal } from 'antd-mobile'

interface Props {
  buttons: { text: string, dismissOnPress?: boolean, onPress?: () => void }[]
  children?: React.ReactNode
  title: React.ReactNode
  message: React.ReactNode
}

function ModalButton({ buttons, children, title, message } : Props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const alertButtons = buttons.map(({ text, dismissOnPress = true, onPress }) => ({
    text,
    onPress: () => {
      onPress && onPress()
      dismissOnPress && setIsModalVisible(false)
    }
  }))

  return (
    <>
      <Modal
        footer={alertButtons}
        transparent
        visible={isModalVisible}
      >
        {title}
        {message}
      </Modal>
      <Button
        onClick={() => {
          setIsModalVisible(true)
          // Modal.alert(title, message, alertButtons)
        }}
      >
        {children}
      </Button>
    </>
  )
}

export default ModalButton;