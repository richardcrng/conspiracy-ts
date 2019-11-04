import React from 'react';
import GroupListItemIcons from 'lib/molecules/GroupListItemIcons';

interface Props {
  data?: { name: string, id: string }[]
}

function LobbyGames({ data = []} : Props) {
  return (
    <GroupListItemIcons
      data={data.map(({ name }) => name)}
      ids={data.map(({ id }) => id)}
    />
  )
}

export default LobbyGames;