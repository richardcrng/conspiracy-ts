import React from 'react';
import { NoticeBar } from 'antd-mobile';

interface Props {
  areAllPlayersReady?: boolean
  isClientHost?: boolean
}

function LobbyRoomNotice({ areAllPlayersReady, isClientHost } : Props) {
  return (
    <NoticeBar>
      {
        areAllPlayersReady
          ? isClientHost
            ? 'All players ready for you to start the game'
            : 'Waiting for host to start the game'
          : 'Waiting for all players to be ready'
      }
    </NoticeBar>
  )
}

export default LobbyRoomNotice;