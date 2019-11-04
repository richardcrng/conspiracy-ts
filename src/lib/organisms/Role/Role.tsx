import React from 'react';
import ModalTrigger from 'lib/molecules/ModalTrigger';
import { Button } from 'antd-mobile';

interface Props {
  inAConspiracyAgainst?: string
}

function Role({ inAConspiracyAgainst } : Props) {

  return (
    <>
      <ModalTrigger
        buttons={[{ text: 'Hide role' }]}
        title='Your role'
        message={<RoleDeclare inAConspiracyAgainst={inAConspiracyAgainst} />}
      >
        <Button>
          Reveal role
        </Button>
      </ModalTrigger>
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