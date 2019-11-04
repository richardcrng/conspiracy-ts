import React from 'react';
import { Button } from 'antd-mobile'
import ModalTrigger from '../ModalTrigger';

interface Props {
  buttons: { text: string, dismissOnPress?: boolean, onPress?: () => void }[]
  children?: React.ReactNode
  title: React.ReactNode
  message: React.ReactNode
}

function ModalButton({ buttons, children, title, message } : Props) {
  return (
    <>
      <ModalTrigger
        buttons={buttons}
        title={title}
        message={message}
      >
        <Button>{children}</Button>
      </ModalTrigger>
    </>
  )
}

export default ModalButton;