import * as R from 'ramda'
import React from 'react';
import { FaRegGrinBeam, FaRegMehBlank } from 'react-icons/fa'
import GroupListItemIcons from 'lib/molecules/GroupListItemIcons';

interface Props {
  players: { id: string, name: string, ready?: boolean }[]
}

function LobbyRoomPlayers({ players } : Props) {
  const icons = players.map(({ ready }) => (
    ready ? ReadyIcon : NotReadyIcon
  ))

  return (
    <GroupListItemIcons
      nodes={players.map(R.prop('name'))}
      ids={players.map(R.prop('id'))}
      icons={icons}
    />
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