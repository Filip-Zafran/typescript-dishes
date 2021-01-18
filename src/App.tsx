import React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { DishesContainer } from './components/DishesContainer'


function App() {
  return (
   
    <Router>
      <div className="App">
      <Header id="header" inverted as='h1'>Dishes Project</Header>
      
      <Switch>
        
          <Route path="/">
              <DishesContainer />
        </Route>
        
          <Route path="/details">
             <DishesContainer />
        </Route>
        
        </Switch>
        </div>
              <Router />


  );
}

export default App;
