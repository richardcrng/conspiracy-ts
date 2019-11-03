import React from 'react';
import { Button, Modal } from 'antd-mobile'

interface Props {
  inAConspiracyAgainst?: string
}

function Role({ inAConspiracyAgainst } : Props) {
  const [revealed, setRevealed] = React.useState(false)

  const toggleReveal = () => setRevealed(prevState => !prevState)

  return (
    <>
      <Modal
        footer={[{ text: 'Hide role', onPress: toggleReveal }]}
        transparent
        visible={revealed}
      >
        <div style={{ height: '100px' }}>
          <h2>Your role:</h2>
          <RoleDeclare inAConspiracyAgainst={inAConspiracyAgainst} />
        </div>
      </Modal>
      <Button
        onClick={toggleReveal}
      >
        Reveal role
      </Button>
    </>
  )
}

function RoleDeclare({ inAConspiracyAgainst } : Props) {
  if (inAConspiracyAgainst) {
    return <p>You are in a <b>Conspiracy</b> against <b>{inAConspiracyAgainst}</b></p>
  } else {
    return <p>You are <b>Innocent</b></p>
  }
}

export default Role;