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
        title={title}
        transparent
        visible={isModalVisible}
      >
        {message}
      </Modal>
      <Button
        onClick={() => {
          setIsModalVisible(true)
        }}
      >
        {children}
      </Button>
    </>
  )
}

export default ModalButton;