import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import LobbyRoomNotice from './Notice';
import LobbyRoomReadiness from './Readiness';
import LobbyRoomHost from './Host';
import LobbyRoomParticipant from './Participant';
import Player from 'types/Player';

interface Props {
  clientPlayer: Player
  handleGameDisband?(): void
  handleGameStart?(): void
  handlePlayerKick?(player?: Player): void 
  isSignupClosed?: boolean
  onClientStatusChange?(): void
  onSignupStatusChange?(): void
  players: Player[]
}

function LobbyRoom({ clientPlayer, handleGameDisband, handleGameStart, handlePlayerKick, isSignupClosed, onClientStatusChange, onSignupStatusChange, players } : Props) {
  const { isHost: isClientHost, isReady: isClientReady } = clientPlayer;
  const areAllPlayersReady = players.every(({ isReady }) => isReady)

  return (
    <>
      <LobbyRoomNotice {...{ areAllPlayersReady, isClientHost }} />
      <LobbyRoomReadiness {... { isClientHost, isClientReady, isSignupClosed, onClientStatusChange, onSignupStatusChange }} />
      <WhiteSpace size='xl' />
      {
        isClientHost
          ? <LobbyRoomHost {...{ areAllPlayersReady, clientPlayer, handleGameDisband, handleGameStart, handlePlayerKick, players }} />
          : <LobbyRoomParticipant {...{ clientPlayer, players }} />
      }
    </>
  )
}

export default LobbyRoom;