import React from 'react';
import LobbyRoomPlayers from '../Players';

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
    </>
  )
}

export default LobbyRoomParticipant;