import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { WingBlank } from 'antd-mobile';
import Lobby from 'app/modules/Lobby';

const App: React.FC = () => {
  return (
    <div className="App">
      <WingBlank>
        <Lobby
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
