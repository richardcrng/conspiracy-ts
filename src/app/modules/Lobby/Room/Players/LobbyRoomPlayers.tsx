import * as R from 'ramda'
import React from 'react';
import { FaRegGrinBeam, FaRegMeh, FaUserMinus } from 'react-icons/fa'
import GroupListItemIcons from 'lib/molecules/GroupListItemIcons';
import { List } from 'antd-mobile';
import Player from 'types/Player';

interface Props {
  clientPlayer: Player
  onPlayerClick?(event?: React.MouseEvent, player?: Player): void
  players: Player[]
}

function LobbyRoomPlayers({ clientPlayer, onPlayerClick, players } : Props) {
  const icons = players.map(({ isReady }) => (
    isReady ? ReadyIcon : NotReadyIcon
  ))

  const thumb = clientPlayer.isHost
    ? <FaUserMinus color='red' data-testid='LobbyRoomPlayer-kick' size={24} />
    : null

  return (
    <List renderHeader='Player list'>
      <GroupListItemIcons<Player>
        ids={players.map(R.prop('id'))}
        icons={icons}
        nodes={players.map(R.prop('name'))}
        onItemClick={onPlayerClick}
        onItemClickData={players}
        thumb={thumb}
      />
    </List>
  )
}

const ReadyIcon = () => (
  <FaRegGrinBeam
    color='green'
    data-testid='LobbyRoomPlayer-ready'
    size={32}
  />
)
const NotReadyIcon = () => (
  <FaRegMeh
    color='orange'
    data-testid='LobbyRoomPlayer-notReady'
    size={32}
  />
)

export default LobbyRoomPlayers;