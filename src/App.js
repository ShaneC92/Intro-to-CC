import React from 'react';
import './App.css';

import FunctionalComponent from './components/Functional/FunctionalComponent';
import ClassComponent from './components/Class/ClassComponent';
import Counter from './components/Counter/Counter';
import Fetch from './components/Fetch/Fetch';

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent />
      <ClassComponent /> */}
      <Counter />
      <Fetch />
    </div>
  );
}

export default App;
