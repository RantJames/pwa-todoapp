import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <link rel="manifest" href="/manifest.json"></link>
      <div className='bg-dark text-white'>
      <h1>The To-Do App</h1>
      <h3>by Rubin James</h3> 
      </div>
      <div className='bg-light'>
      <Form/>   
      <Tasks/>
      </div>    
    </div>
  );
}

export default App;
