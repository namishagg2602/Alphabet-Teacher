import React from 'react';
import { Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AlphabetPage from './AlphabetPage';
import HomePage from './HomePage';


function navigationbarnum()
{
    return(
        <div>
        <Router>
        <nav>
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>Teacher App</Navbar.Brand>
            <Navbar.Brand>
                <Link to="/"> Home </Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/alphabetpage"> Alphabets </Link>
            </Navbar.Brand>
        </Navbar>
        </nav>

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/alphabetpage">
            <AlphabetPage />
          </Route>
        </Switch>
        </Router>
        </div>
    );
}


export default navigationbarnum;