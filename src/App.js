import React from 'react';
import './App.css';
import './Components/HelloWorld';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';

function App() {
  return (
    <div className="App">
        {/* <HelloWorld name="Jesus E."/> */}
        <CounterExample />
    </div>
  );
}

export default App;
