import React from 'react';
import LobbyGames from './Games';
import { Button } from 'antd-mobile';

interface Props {
  data?: { name: string, id: string }[]
  onGameClick?(event: React.MouseEvent, gameId: string): void
  onHostNew?(): void
}

function Lobby({ data, onHostNew, onGameClick } : Props) {
  return (
    <>
      <LobbyGames
        data={data}
        onGameClick={onGameClick}
      />
      <Button onClick={onHostNew}>Host new</Button>
    </>
  )
}

export default Lobby;