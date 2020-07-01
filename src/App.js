import React from 'react';
import './App.css';
import List from './Components/List';
import Form from './Components/Form';
import './Store/index'
import RemoveItem  from '../src/Components/RemoveItem';
import Container from './Components/Galary/Container';

function App() {

  return (

    <div>

      <Form/>
      <List/>
      <RemoveItem/>
      <hr/>
      <Container/>
     </div>
  );
}

export default App;
