import React from 'react';
import { Button, Modal } from 'antd-mobile';
import LobbyRoomPlayers from '../Players';
import CentreBottom from 'lib/atoms/CentreBottom';

interface Props {
  areAllPlayersReady?: boolean
  handleGameStart?(): void
  handlePlayerKick?(player?: { id: string, name: string, ready?: boolean }): void 
  players: { id: string, name: string, ready?: boolean }[]
}

const emptyPlayer = { id: '', name: '' }

function LobbyRoomHost({ areAllPlayersReady, handleGameStart, handlePlayerKick, players } : Props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [playerSelected, setPlayerSelected] = React.useState<{ id: string, name: string, ready?: boolean }>(emptyPlayer)

  return (
    <>
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