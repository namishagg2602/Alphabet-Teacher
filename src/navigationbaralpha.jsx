import React from 'react';
import { Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './HomePage';
import NumbersPage from './NumbersPage';

function navigationbaralpha()
{
    return(
        <div>
        <Router>
        <div>
        <nav>
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>Teacher App</Navbar.Brand>
            <Navbar.Brand>
                <Link to="/"> Home </Link>
            </Navbar.Brand>
            <Navbar.Brand>
                <Link to="/numbers"> Numbers </Link>
            </Navbar.Brand>
        </Navbar>
        </nav>
        </div>

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/numberspage">
            <NumbersPage />
          </Route>
        </Switch>
        </Router>
        </div>
    );
}


export default navigationbaralpha;