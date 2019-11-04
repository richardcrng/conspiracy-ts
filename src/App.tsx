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
            { name: 'second', id: 'xâ3' },
            { name: 'second', id: 'xâ32' },
            { name: 'second', id: 'xâ33' },
            { name: 'second', id: 'xâ43' },
            { name: 'second', id: 'xâ34' },
            { name: 'second', id: 'xâ35' },
            { name: 'second', id: 'xâ53' },
            { name: 'second', id: 'xâ63' },
            { name: 'second', id: 'xâ73' },
            { name: 'second', id: 'xâ83' },
            { name: 'second', id: 'xâ93' },
            { name: 'second', id: 'xâ103' },
            { name: 'second', id: 'xâ113' }
          ]}
        />
      </WingBlank>
    </div>
  );
}

export default App;
