import React from 'react';
import LobbyRoomPlayers from './Players';
import { List, Switch, WhiteSpace, Button } from 'antd-mobile';
import CentreBottom from 'lib/atoms/CentreBottom';
import LobbyRoomNotice from './Notice';

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
      <List>
        <List.Item
          extra={<Switch checked={isClientReady} />}
          onClick={onClientStatusChange}
        >
          Ready to begin?
        </List.Item>
      </List>
      <WhiteSpace size='xl' />
      <List renderHeader='Player list'>
        <LobbyRoomPlayers
          players={players}
        />
      </List>
      {isClientHost && areAllPlayersReady && (
        <CentreBottom>
          <Button
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