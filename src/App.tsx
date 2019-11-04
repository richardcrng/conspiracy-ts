import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { WingBlank } from 'antd-mobile';
import LobbyGames from 'app/modules/Lobby/Games';

const App: React.FC = () => {
  return (
    <div className="App">
      <WingBlank>
        <LobbyGames
          data={[
            { name: 'Game one', id: '243x' },
            { name: 'second', id: 'xâ3' }
          ]}
        />
      </WingBlank>
    </div>
  );
}

export default App;
