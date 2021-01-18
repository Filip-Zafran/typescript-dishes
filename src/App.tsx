import React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react'
import { DishesContainer } from './components/DishesContainer'
 

function App() {
  return (
    <div className="App">
      <Header id="header" inverted as='h1'>Dishes Project</Header>
      <DishesContainer />
    </div>
  );
}

export default App;
