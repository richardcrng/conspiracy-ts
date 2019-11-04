import React from 'react';
import LobbyGames from './Games';
import { Button } from 'antd-mobile';
import CentreBottom from 'lib/atoms/CentreBottom';

interface Props {
  data?: { name: string, id: string }[]
  onGameClick?(event: React.MouseEvent, gameId: string): void
  onHostNew?(): void
}

function Lobby({ data, onHostNew, onGameClick } : Props) {
  return (
    <>
      <h2>Games available</h2>
      <p>Click on a game to join</p>
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        <LobbyGames
          data={data}
          onGameClick={onGameClick}
        />
      </div>
      <CentreBottom>
        <Button onClick={onHostNew} type='primary'>
          Host new
        </Button>
      </CentreBottom>
    </>
  )
}

export default Lobby;