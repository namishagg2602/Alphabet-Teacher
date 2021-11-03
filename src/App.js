import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";
import HomePage from './HomePage.js';
import AlphabetPage from './AlphabetPage.js';
import NumbersPage from './NumbersPage.js';

function App()
{
    return(
      <Router>
      <div>
      <center>
          <Link className="links" to="/alphabetpage">Alphabets</Link>
          <Link className="links" to="/numberspage">Numbers</Link>
      </center>
      <Switch>
      <Route path = '/alphabetpage' > <AlphabetPage/> </Route>
      <Route path = '/numberspage' > <NumbersPage/> </Route>
      </Switch>
      </div>
      </Router>
    );
}


export default App;

 /*<div>
      <Heading></Heading>
      <HomePage to="/"></HomePage>
      <AlphabetPage to="/alphabetpage"/>
      <NumbersPage to="/numberspage"></NumbersPage>
      */


      /*
      
      <Router>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/alphabetpage">Alphabets</Link>
            <Link to="/numberspage">Numbers</Link>
        
        <Switch>
        <Route path = '/'> <HomePage/> </Route>
        <Route path = '/alphabetpage' > <AlphabetPage/> </Route>
        <Route path = '/numberspage' > <NumbersPage/> </Route>
        </Switch>
        </div>
      </Router>*/