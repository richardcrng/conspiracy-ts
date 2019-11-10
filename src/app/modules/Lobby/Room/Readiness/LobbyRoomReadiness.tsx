import React from 'react';
import { List, Switch } from 'antd-mobile';

interface Props {
  isClientReady?: boolean
  onClientStatusChange?(): void
}

function LobbyRoomReadiness({ isClientReady, onClientStatusChange } : Props) {
  return (
    <List>
      <List.Item
        extra={<Switch checked={isClientReady} />}
        onClick={onClientStatusChange}
      >
        Ready to begin?
        </List.Item>
    </List>
  )
}

export default LobbyRoomReadiness;