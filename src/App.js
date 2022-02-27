import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <link rel="manifest" href="/manifest.json"></link>
      <h1>The To-Do App</h1>
      <h3>by Rubin James</h3>
      <Form/>
      <Tasks/>
    </div>
  );
}

export default App;
