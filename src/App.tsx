import React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { DishesList } from './components/DishesList'
import { LandingPage } from './components/LandingPage'
import CreateDish from './components/CreateDish'




function App() {
  return (
   
    <Router>
      <div className="App">
        <Header id="header" inverted as='h1'>Dishes Project</Header>
        <Route path="/" component={LandingPage}/>
        <Route exact path="/create" component={CreateDish} />
        <Route exact path="/list" component={DishesList}/>

        {/* create a new a route for details */}
        <br />
                 {/* <CreateDish /> */}
      </div>
    </Router>


  );
}

export default App;
