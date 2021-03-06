import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { WingBlank } from 'antd-mobile';
import LobbyRoom from 'app/modules/Lobby/Room';

const App: React.FC = () => {
  const [state, setState] = React.useState(false)
  const players = [
    { id: 'f23f0', name: 'Richard', isReady: true, isHost: true },
    { id: 'g23f0', name: 'Jenny', isReady: state },
    { id: 'h23f0', name: 'Isabella', isReady: true }
  ]

  return (
    <div className="App">
      <WingBlank>
        <LobbyRoom
          clientPlayer={players[1]}
          onClientStatusChange={() => setState(prevState => !prevState)}
          players={players}
        />
      </WingBlank>
    </div>
  );
}

export default App;
