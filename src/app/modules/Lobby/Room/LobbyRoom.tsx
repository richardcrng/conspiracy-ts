import React from 'react';
import LobbyRoomPlayers from './Players';

interface Props {
  players: { id: string, name: string, ready?: boolean }[]
}

function LobbyRoom({ players } : Props) {
  return (
    <>
      <LobbyRoomPlayers
        players={players}
      />
    </>
  )
}

export default LobbyRoom;