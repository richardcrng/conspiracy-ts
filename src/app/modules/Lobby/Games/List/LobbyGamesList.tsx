import React from 'react';
import { FaDoorOpen } from 'react-icons/fa';
import GroupListItemIcons from 'lib/molecules/GroupListItemIcons';

interface Props {
  data?: { name: string, id: string }[]
  onGameClick?(event: React.MouseEvent, gameId: string): void
}

function LobbyGamesList({ data = [], onGameClick } : Props) {
  const gameNames = data.map(({ name }) => name)
  const gameIds = data.map(({ id }) => id)

  return (
    <GroupListItemIcons<string>
      nodes={gameNames}
      icon={() => <FaDoorOpen size={32} />}
      ids={gameIds}
      onItemClick={onGameClick}
      onItemClickData={gameIds}
    />
  )
}

export default LobbyGamesList;