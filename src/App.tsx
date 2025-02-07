import React from 'react';
import Home from './pages/Home'; // MDI 경로 맞춰서 import
import './App.css';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <div className="w-96 bg-white shadow rounded m-5">w-96</div>
      <div className="w-80 bg-white shadow rounded m-5">w-80</div>
      <div className="w-72 bg-white shadow rounded m-5">w-72</div>
      <div className="w-64 bg-white shadow rounded m-5">w-64</div>
      <div className="w-60 bg-white shadow rounded m-5">w-60</div>
      <div className="w-56 bg-white shadow rounded m-5">w-56</div>
      <div className="w-52 bg-white shadow rounded m-5">w-52</div>
      <div className="w-48 bg-white shadow rounded m-5">w-48</div>
    </div>
  );
};

export default App;
