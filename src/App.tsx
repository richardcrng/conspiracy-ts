import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { WingBlank } from 'antd-mobile';
import ModalButton from 'lib/molecules/ModalButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <WingBlank>
        <ModalButton
          title='hello'
          message='this is my message'
          buttons={[
            { text: 'cancel' },
            { text: 'ok', dismissOnPress: false }
          ]}
        >
          Press
        </ModalButton>
      </WingBlank>
    </div>
  );
}

export default App;
