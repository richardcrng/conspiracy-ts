import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import Role from './lib/organisms/Role';
import { WingBlank } from 'antd-mobile';

const App: React.FC = () => {
  return (
    <div className="App">
      <WingBlank>
        <Role />
      </WingBlank>
    </div>
  );
}

export default App;
