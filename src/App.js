import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import HomePage from './HomePage.js';
import AlphabetPage from './AlphabetPage.js';
import NumbersPage from './NumbersPage.js';
import Heading from './Heading.js';
function App()
{
    return(
     
      <div>
      <Heading></Heading>
      <HomePage></HomePage>
      <AlphabetPage/>
      <NumbersPage></NumbersPage>
      </div>
    );
}


export default App;

 /*<Router>
        <div>
        <Heading/>
        <Switch>
        <Route path = '/'  exact component = {HomePage}/>
        <Route path = '/alphabetpage' component = {AlphabetPage}/>
        <Route path = '/numberspage' exact component = {NumbersPage}/>
        </Switch>
        </div>
      </Router>
      */