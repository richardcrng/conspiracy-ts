import React from 'react';
import LobbyRoomPlayers from '../Players';
import CentreBottom from 'lib/atoms/CentreBottom';
import { Button } from 'antd-mobile';

interface Props {
  clientPlayer: { id: string, name: string, isReady?: boolean, isHost?: boolean }
  players: { id: string, name: string, isReady?: boolean, isHost?: boolean }[]
}


function LobbyRoomParticipant({ clientPlayer, players } : Props) {
  return (
    <>
      <LobbyRoomPlayers
        clientPlayer={clientPlayer}
        players={players}
      />
      <CentreBottom>
        <Button
          // onClick={}
          type='ghost'
        >
          Leave game
        </Button>
      </CentreBottom>
    </>
  )
}

export default LobbyRoomParticipant;