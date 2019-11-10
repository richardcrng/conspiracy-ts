import React from 'react';
import ModalTrigger from 'lib/molecules/ModalTrigger';
import { Button } from 'antd-mobile';

interface Props {
  inAConspiracyAgainst?: string | null
}

function Role({ inAConspiracyAgainst } : Props) {
  const title = inAConspiracyAgainst
    ? 'CONSPIRATOR'
    : 'INNOCENT'

  return (
    <>
      <ModalTrigger
        buttons={[{ text: 'Hide role' }]}
        title={(
          <>
            Your role:
            <h3>{title}</h3>
          </>
        )}
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
    return (
      <>
        <p><b>{inAConspiracyAgainst}</b> is your conspiracy victim.</p>
        <p>Everybody else is a fellow conspirator.</p>
        <p><i>Don't let on...</i></p>
      </>
    )
  } else {
    return (
      <>
        <p>This means one of two things.</p>
        <ol>
          <li>All other players in the game are also innocent...</li>
          <li>... or they're all conspiring together against you!</li>
        </ol>
        <p><i>Stay vigilant!</i></p>
      </>
    )
  }
}

export default Role;