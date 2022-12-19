import React from 'react';

import { Header } from 'components';
import './App.css';
import './gradients.css';
import {HomeContainer} from 'containers';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeContainer />
    </div>
  );
};

export default App;
