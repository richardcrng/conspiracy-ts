import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import LobbyRoomNotice from './Notice';
import LobbyRoomReadiness from './Readiness';
import LobbyRoomHost from './Host';
import LobbyRoomParticipant from './Participant';

interface Props {
  clientPlayer: { id: string, name: string, isReady?: boolean, isHost?: boolean }
  handleGameStart?(): void
  handlePlayerKick?(player?: { id: string, name: string, isReady?: boolean, isHost?: boolean }): void 
  isClientHost?: boolean
  isClientReady?: boolean
  isSignupClosed?: boolean
  onClientStatusChange?(): void
  onSignupStatusChange?(): void
  players: { id: string, name: string, isReady?: boolean, isHost?: boolean }[]
}

function LobbyRoom({ clientPlayer, handleGameStart, handlePlayerKick, isSignupClosed, onClientStatusChange, onSignupStatusChange, players } : Props) {
  const { isHost: isClientHost, isReady: isClientReady } = clientPlayer;
  const areAllPlayersReady = players.every(({ isReady }) => isReady)

  return (
    <>
      <LobbyRoomNotice {...{ areAllPlayersReady, isClientHost }} />
      <LobbyRoomReadiness {... { isClientHost, isClientReady, isSignupClosed, onClientStatusChange, onSignupStatusChange }} />
      <WhiteSpace size='xl' />
      {
        isClientHost
          ? <LobbyRoomHost {...{ areAllPlayersReady, handleGameStart, handlePlayerKick, players }} />
          : <LobbyRoomParticipant {...{ players }} />
      }
    </>
  )
}

export default LobbyRoom;