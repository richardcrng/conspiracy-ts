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
  isSignupClosed?: boolean
  onClientStatusChange?(): void
  onPlayerClick?(event?: React.MouseEvent, player?: { id: string, name: string, ready?: boolean }): void
  onSignupStatusChange?(): void
  players: { id: string, name: string, ready?: boolean }[]
}

function LobbyRoom({ handleGameStart, isClientHost, isClientReady, isSignupClosed, onClientStatusChange, onPlayerClick, onSignupStatusChange, players } : Props) {
  const areAllPlayersReady = players.every(({ ready }) => ready)

  return (
    <>
      <LobbyRoomNotice {...{ areAllPlayersReady, isClientHost }} />
      <LobbyRoomReadiness {... { isClientHost, isClientReady, isSignupClosed, onClientStatusChange, onSignupStatusChange }} />
      <WhiteSpace size='xl' />
      <LobbyRoomPlayers
        isClientHost={isClientHost}
        onPlayerClick={onPlayerClick}
        players={players}
      />
      {isClientHost && <LobbyRoomAdmin {...{ areAllPlayersReady, handleGameStart }} />}
    </>
  )
}

export default LobbyRoom;