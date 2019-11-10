import React from 'react';
import LobbyRoomPlayers from '../Players';
import CentreBottom from 'lib/atoms/CentreBottom';
import { Button } from 'antd-mobile';

interface Props {
  players: { id: string, name: string, ready?: boolean }[]
}


function LobbyRoomParticipant({ players } : Props) {
  return (
    <>
      <LobbyRoomPlayers
        isClientHost={false}
        players={players}
      />
      <CentreBottom>
        <Button
          type='ghost'
        >
          Leave game
        </Button>
      </CentreBottom>
    </>
  )
}

export default LobbyRoomParticipant;