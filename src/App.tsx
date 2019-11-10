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
          isClientHost
          isClientReady={state}
          onClientStatusChange={() => setState(prevState => !prevState)}
          players={[
            { id: 'f23f0', name: 'Richard', ready: true },
            { id: 'g23f0', name: 'Jenny', ready: true },
            { id: 'h23f0', name: 'Isabella', ready: true }
          ]}
        />
      </WingBlank>
    </div>
  );
}

export default App;
