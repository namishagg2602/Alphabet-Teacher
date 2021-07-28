import React from 'react';
import { Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AlphabetPage from './AlphabetPage';
import NumbersPage from './NumbersPage';

function navigationbarhome()
{
    return(
        <div>
        
        
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>Teacher App</Navbar.Brand>
            <Router>
            <nav>
            <Navbar.Brand>
                <Link to="/alphabetpage"> Alphabets </Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/numberpage"> Numbers </Link>
            </Navbar.Brand>
            </nav>
        <Switch>
          <Route path="/alphabetpage">
            <AlphabetPage />
          </Route>
          <Route path="/numberspage">
            <NumbersPage />
          </Route>
        </Switch>

        </Router>
        </Navbar>

        </div>
    );
}


export default navigationbarhome;