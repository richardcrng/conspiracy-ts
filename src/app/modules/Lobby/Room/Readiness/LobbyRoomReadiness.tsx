import React from 'react';
import { List, Switch } from 'antd-mobile';

interface Props {
  isClientHost?: boolean
  isClientReady?: boolean
  isSignupClosed?: boolean
  onClientStatusChange?(): void
  onSignupStatusChange?(): void
}

function LobbyRoomReadiness({ isClientHost, isClientReady, isSignupClosed, onClientStatusChange, onSignupStatusChange } : Props) {
  return (
    <List>
      <List.Item
        extra={<Switch checked={isClientReady} />}
        onClick={onClientStatusChange}
      >
        Ready to begin?
      </List.Item>
      {isClientHost && (
        <List.Item
          extra={<Switch checked={isSignupClosed} />}
          onClick={onSignupStatusChange}
        >
          <i>Host power:</i> Close signups?
        </List.Item>
      )}
    </List>
  )
}

export default LobbyRoomReadiness;