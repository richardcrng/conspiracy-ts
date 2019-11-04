import React from 'react';
import LobbyGames from './Games';

interface Props {
  data?: { name: string, id: string }[]
  onGameClick?(event: React.MouseEvent, gameId: string): void
}

function Lobby({ data, onGameClick } : Props) {
  return (
    <LobbyGames
      data={data}
      onGameClick={onGameClick}
    />
  )
}

export default Lobby;