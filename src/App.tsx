import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { WingBlank } from 'antd-mobile';
import LobbyRoom from 'app/modules/Lobby/Room';

const App: React.FC = () => {
  return (
    <div className="App">
      <WingBlank>
        <LobbyRoom
          players={[
            { id: 'f23f0', name: 'Richard', ready: true },
            { id: 'g23f0', name: 'Jenny', ready: true },
            { id: 'h23f0', name: 'Isabella', ready: false }
          ]}
        />
      </WingBlank>
    </div>
  );
}

export default App;
