import * as R from 'ramda'
import React from 'react';
import LobbyRoomPlayers from './Players';
import { List, NoticeBar, Switch, WhiteSpace, Button } from 'antd-mobile';
import CentreBottom from 'lib/atoms/CentreBottom';

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
      <NoticeBar>
        {
          areAllPlayersReady
            ? isClientHost
              ? 'All players ready for you to start the game'
              : 'Waiting for host to start the game'
            : 'Waiting for all players to be ready'
        }
      </NoticeBar>
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