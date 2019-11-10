import React from 'react';
import CentreBottom from 'lib/atoms/CentreBottom';
import { Button } from 'antd-mobile';

interface Props {
  areAllPlayersReady?: boolean
  handleGameStart?(): void
}


function LobbyRoomAdmin({ areAllPlayersReady, handleGameStart } : Props) {
  return (
    <CentreBottom>
      <Button
        disabled={!areAllPlayersReady}
        onClick={handleGameStart}
        type='primary'
      >
        Start game
        </Button>
    </CentreBottom>
  )
}

export default LobbyRoomAdmin;