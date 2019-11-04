import React from 'react';
import ModalButton from 'lib/molecules/ModalButton';

interface Props {
  inAConspiracyAgainst?: string
}

function Role({ inAConspiracyAgainst } : Props) {

  return (
    <>
      <ModalButton
        buttons={[{ text: 'Hide role' }]}
        title='Your role'
        message={<RoleDeclare inAConspiracyAgainst={inAConspiracyAgainst} />}
      >
        Reveal role
      </ModalButton>
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