import React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { DishesList } from './components/DishesList'
import { LandingPage } from './components/LandingPage'
import { CreateDish } from './components/CreateDish'


function App() {
  return (
   
    <Router>
      <div className="App">
        <Header id="header" inverted as='h1'>Dishes Project</Header>
  
      
      <Switch>
        
          <Route path="/" component={LandingPage}>
              <LandingPage />
        </Route>
        
        <Route exact path="/create" component={CreateDish}>
             <CreateDish />
        </Route>  

          <Route exact path="/list" component={DishesList}>
             <DishesList />
        </Route>

        </Switch>
        <br />
                 <CreateDish />
        </div>
        </ Router>


  );
}

export default App;
