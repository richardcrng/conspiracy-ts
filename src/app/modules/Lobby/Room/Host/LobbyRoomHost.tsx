import React from 'react';
import { Button, Modal } from 'antd-mobile';
import LobbyRoomPlayers from '../Players';
import CentreBottom from 'lib/atoms/CentreBottom';

interface Props {
  areAllPlayersReady?: boolean
  clientPlayer: { id: string, name: string, isReady?: boolean, isHost?: boolean }
  handleGameStart?(): void
  handlePlayerKick?(player?: { id: string, name: string, isReady?: boolean, isHost?: boolean }): void 
  players: { id: string, name: string, isReady?: boolean, isHost?: boolean }[]
}

const emptyPlayer = { id: '', name: '' }

function LobbyRoomHost({ areAllPlayersReady, clientPlayer, handleGameStart, handlePlayerKick, players } : Props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [playerSelected, setPlayerSelected] = React.useState<{ id: string, name: string, isReady?: boolean }>(emptyPlayer)

  return (
    <>
      <LobbyRoomPlayers
        clientPlayer={clientPlayer}
        onPlayerClick={(event, player = emptyPlayer) => {
          setPlayerSelected(player)
          setIsModalVisible(true)
        }}
        players={players}
      />
      <Modal
        footer={[
          { text: 'Cancel', onPress: () => setIsModalVisible(false) },
          { text: 'Confirm', onPress: () => {
            setIsModalVisible(false)
            handlePlayerKick && handlePlayerKick(playerSelected)
          }}
        ]}
        title={`Do you want to kick ${playerSelected.name}?`}
        transparent
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