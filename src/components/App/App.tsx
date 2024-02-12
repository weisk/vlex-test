import React from 'react';
import {
  Button,
} from 'antd';

import JurisdictionSelector from '../JurisdictionSelector/JurisdictionSelector';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button type="primary">Click</Button>

      <JurisdictionSelector />
    </div>
  );
};

export default App;
