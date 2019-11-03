import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import Role from './lib/organisms/Role';

const App: React.FC = () => {
  return (
    <div className="App">
      <Role />
    </div>
  );
}

export default App;
