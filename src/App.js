import React from 'react';
import './App.css';
import List from './Components/List';
import Form from './Components/Form';
import './Store/index'
import { removeItem } from '../src/Components/RemoveItem';

function App() {
  return (
    <div>
      <Form/>
      <List/>
      <removeItem/>
     </div>
  );
}

export default App;
