import React from 'react';
import LobbyRoomPlayers from './Players';
import { WhiteSpace } from 'antd-mobile';
import LobbyRoomNotice from './Notice';
import LobbyRoomReadiness from './Readiness';
import LobbyRoomHost from './Host';

interface Props {
  handleGameStart?(): void
  handlePlayerKick?(player?: { id: string, name: string, ready?: boolean }): void 
  isClientHost?: boolean
  isClientReady?: boolean
  isSignupClosed?: boolean
  onClientStatusChange?(): void
  onSignupStatusChange?(): void
  players: { id: string, name: string, ready?: boolean }[]
}

function LobbyRoom({ handleGameStart, handlePlayerKick, isClientHost, isClientReady, isSignupClosed, onClientStatusChange, onSignupStatusChange, players } : Props) {
  const areAllPlayersReady = players.every(({ ready }) => ready)

  return (
    <>
      <LobbyRoomNotice {...{ areAllPlayersReady, isClientHost }} />
      <LobbyRoomReadiness {... { isClientHost, isClientReady, isSignupClosed, onClientStatusChange, onSignupStatusChange }} />
      <WhiteSpace size='xl' />
      {
        isClientHost
          ? <LobbyRoomHost {...{ areAllPlayersReady, handleGameStart, handlePlayerKick, players }} />
          : <LobbyRoomPlayers
            isClientHost={isClientHost}
            players={players}
          />
      }
    </>
  )
}

export default LobbyRoom;