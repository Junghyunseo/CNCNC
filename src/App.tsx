import React from 'react';
import Home from './pages/Home'; // MDI 경로 맞춰서 import
import './App.css';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
