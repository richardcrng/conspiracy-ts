import React from 'react';
import { Button, Modal, WhiteSpace } from 'antd-mobile';
import LobbyRoomPlayers from '../Players';
import CentreBottom from 'lib/atoms/CentreBottom';
import Player from 'types/Player';

interface Props {
  areAllPlayersReady?: boolean
  clientPlayer: Player
  handleGameDisband?(): void
  handleGameStart?(): void
  handlePlayerKick?(player?: Player): void 
  players: Player[]
}

const emptyPlayer = { id: '', name: '' }

function LobbyRoomHost({ areAllPlayersReady, clientPlayer, handleGameDisband, handleGameStart, handlePlayerKick, players } : Props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [playerSelected, setPlayerSelected] = React.useState<Player>(emptyPlayer)

  const [modalTitle, modalMessage] = playerSelected.isHost
    ? [
        'Do you want to disband the game?',
        'This action will remove yourself and all players from this game, and delete the game itself.'
      ]
    : [
        `Do you want to kick ${playerSelected.name}?`,
        'This will remove them from your game.'
      ]

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
            playerSelected.isHost
              ? handleGameDisband && handleGameDisband()
              : handlePlayerKick && handlePlayerKick(playerSelected)
          }}
        ]}
        title={modalTitle}
        transparent
        visible={isModalVisible}
      >
        <p>{modalMessage}</p>
        <p><b>This cannot be undone.</b></p>
      </Modal>
      <CentreBottom>
        <Button
          disabled={!areAllPlayersReady}
          onClick={handleGameStart}
          type='primary'
        >
          Start game
        </Button>
        <WhiteSpace size='md' />
        <Button
          onClick={() => {
            setPlayerSelected(clientPlayer)
            setIsModalVisible(true)
          }}
          type='warning'
        >
          Disband game
        </Button>
      </CentreBottom>
    </>
  )
}

export default LobbyRoomHost;