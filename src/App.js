import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
const tasklist = document.getElementById('tasks');

function App() {
  return (
    <div className="App">
      <h1>The To-Do App</h1>
      <h3>by Rubin James</h3>
      <Form/>
      <Tasks/>
    </div>
  );
}

export default App;
