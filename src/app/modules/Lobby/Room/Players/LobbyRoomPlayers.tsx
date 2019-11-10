import * as R from 'ramda'
import React from 'react';
import { FaRegGrinBeam, FaRegMehBlank } from 'react-icons/fa'
import GroupListItemIcons from 'lib/molecules/GroupListItemIcons';
import { List } from 'antd-mobile';

interface Props {
  players: { id: string, name: string, ready?: boolean }[]
}

function LobbyRoomPlayers({ players } : Props) {
  const icons = players.map(({ ready }) => (
    ready ? ReadyIcon : NotReadyIcon
  ))

  return (
    <List renderHeader='Player list'>
      <GroupListItemIcons
        nodes={players.map(R.prop('name'))}
        ids={players.map(R.prop('id'))}
        icons={icons}
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
  <FaRegMehBlank
    color='red'
    data-testid='LobbyRoomPlayer-notReady'
    size={32}
  />
)

export default LobbyRoomPlayers;