import React from 'react';
import LobbyRoomPlayers from './Players';
import { WhiteSpace } from 'antd-mobile';
import LobbyRoomNotice from './Notice';
import LobbyRoomReadiness from './Readiness';
import LobbyRoomAdmin from './Admin';

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
      <LobbyRoomPlayers
        isClientHost={isClientHost}
        players={players}
      />
      {isClientHost && <LobbyRoomAdmin {...{ areAllPlayersReady, handleGameStart }} />}
    </>
  )
}

export default LobbyRoom;