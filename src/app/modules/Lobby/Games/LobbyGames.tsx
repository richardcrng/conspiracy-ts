import React from 'react';
import GroupListItemIcons from 'lib/molecules/GroupListItemIcons';

interface Props {
  data?: { name: string, id: string }[]
  onGameClick?(event: React.MouseEvent, gameId: string): void
}

function LobbyGames({ data = [], onGameClick } : Props) {
  const gameNames = data.map(({ name }) => name)
  const gameIds = data.map(({ id }) => id)

  return (
    <GroupListItemIcons<string>
      data={gameNames}
      ids={gameIds}
      onItemClick={onGameClick}
      onItemClickData={gameIds}
    />
  )
}

export default LobbyGames;