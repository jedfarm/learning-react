import React from 'react';
import './App.css';
import './Components/HelloWorld';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">

      <Header />

        <HelloWorld name="Jesus E."/>
        
    </div>
  );
}

export default App;
