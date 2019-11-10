import * as R from 'ramda'
import React from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io'
import GroupListItemIcons from 'lib/molecules/GroupListItemIcons';

interface Props {
  players: { id: string, name: string, ready?: boolean }[]
}

function LobbyRoomPlayers({ players } : Props) {
  const icons = players.map(({ ready }) => (
    ready ? iconReady : noIcon
  ))

  return (
    <GroupListItemIcons
      nodes={players.map(R.prop('name'))}
      ids={players.map(R.prop('id'))}
      icons={icons}
    />
  )
}

const iconReady = () => <IoMdCheckboxOutline data-testid='LobbyRoomPlayer-ready' />
const noIcon = () => null

export default LobbyRoomPlayers;