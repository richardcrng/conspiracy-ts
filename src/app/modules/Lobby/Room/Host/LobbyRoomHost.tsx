import React from 'react';
import LobbyRoomNotice from '../Notice';
import LobbyRoomReadiness from '../Readiness';
import { WhiteSpace, Button, Modal } from 'antd-mobile';
import LobbyRoomPlayers from '../Players';
import CentreBottom from 'lib/atoms/CentreBottom';

interface Props {
  areAllPlayersReady?: boolean
  handleGameStart?(): void
  handlePlayerKick?(player?: { id: string, name: string, ready?: boolean }): void 
  isClientReady?: boolean
  onClientStatusChange?(): void
  players: { id: string, name: string, ready?: boolean }[]
}

const emptyPlayer = { id: '', name: '' }

function LobbyRoomHost({ areAllPlayersReady, handleGameStart, handlePlayerKick, isClientReady, onClientStatusChange, players } : Props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [playerSelected, setPlayerSelected] = React.useState<{ id: string, name: string, ready?: boolean }>(emptyPlayer)

  return (
    <>
      <LobbyRoomNotice {...{ areAllPlayersReady, isClientHost: true }} />
      <LobbyRoomReadiness {... { isClientReady, onClientStatusChange }} />
      <WhiteSpace size='xl' />
      <LobbyRoomPlayers
        isClientHost
        onPlayerClick={(event, player = emptyPlayer) => {
          setPlayerSelected(player)
          setIsModalVisible(true)
        }}
        players={players}
      />
      <Modal
        footer={[
          { text: 'Cancel', onPress: () => setIsModalVisible(false) },
          { text: 'Yes', onPress: () => {
            handlePlayerKick && handlePlayerKick(playerSelected)
            setPlayerSelected(emptyPlayer)
            setIsModalVisible(false)
          }}
        ]}
        title={`Do you want to kick ${playerSelected.name}?`}
        visible={isModalVisible}
      >
        This cannot be undone.
      </Modal>
      <CentreBottom>
        <Button
          disabled={!areAllPlayersReady}
          onClick={handleGameStart}
          type='primary'
        >
          Start game
        </Button>
      </CentreBottom>
    </>
  )
}

export default LobbyRoomHost;