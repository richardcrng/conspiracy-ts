import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { WingBlank } from 'antd-mobile';
import LobbyRoom from 'app/modules/Lobby/Room';

const App: React.FC = () => {
  const [state, setState] = React.useState(false)

  return (
    <div className="App">
      <WingBlank>
        <LobbyRoom
          clientPlayer={{ id: 'f23f0', name: 'Richard', isReady: true, isHost: false }}
          isClientReady={state}
          onClientStatusChange={() => setState(prevState => !prevState)}
          players={[
            { id: 'f23f0', name: 'Richard', isReady: true },
            { id: 'g23f0', name: 'Jenny', isReady: true },
            { id: 'h23f0', name: 'Isabella', isReady: true }
          ]}
        />
      </WingBlank>
    </div>
  );
}

export default App;
