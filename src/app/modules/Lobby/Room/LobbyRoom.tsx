import React from 'react';
import LobbyRoomPlayers from './Players';
import { List, Switch, WhiteSpace, Button } from 'antd-mobile';
import CentreBottom from 'lib/atoms/CentreBottom';
import LobbyRoomNotice from './Notice';
import LobbyRoomReadiness from './Readiness';

interface Props {
  handleGameStart?(): void
  isClientHost?: boolean
  isClientReady?: boolean
  onClientStatusChange?(): void
  players: { id: string, name: string, ready?: boolean }[]
}

function LobbyRoom({ handleGameStart, isClientHost, isClientReady, onClientStatusChange, players } : Props) {
  const areAllPlayersReady = players.every(({ ready }) => ready)

  return (
    <>
      <LobbyRoomNotice {...{ areAllPlayersReady, isClientHost }} />
      <LobbyRoomReadiness {... { isClientReady, onClientStatusChange }} />
      <WhiteSpace size='xl' />
      <List renderHeader='Player list'>
        <LobbyRoomPlayers
          players={players}
        />
      </List>
      {isClientHost && (
        <CentreBottom>
          <Button
            disabled={!areAllPlayersReady}
            onClick={handleGameStart}
            type='primary'
          >
            Start game
        </Button>
        </CentreBottom>
      )}
    </>
  )
}

export default LobbyRoom;