import React from 'react';
import LobbyRoomPlayers from '../Players';
import CentreBottom from 'lib/atoms/CentreBottom';
import { Button } from 'antd-mobile';
import Player from 'types/Player';

interface Props {
  clientPlayer: Player
  players: Player[]
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