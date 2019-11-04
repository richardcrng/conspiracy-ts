import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { WingBlank } from 'antd-mobile';
import Role from 'lib/organisms/Role';

const App: React.FC = () => {
  return (
    <div className="App">
      <WingBlank>
        <Role inAConspiracyAgainst='Richard' />
      </WingBlank>
    </div>
  );
}

export default App;
