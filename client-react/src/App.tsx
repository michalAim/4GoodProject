import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import DonateTo from './components/DonateTo/donateTo';
import BottomBar from './components/DonateTo/bottomBar';
import ShoppingList from './components/ProductsList/shoppingList';
import HowItWorks from './components/howItWorks/howItWorks';
import SignInn from './components/SignIn/SignIn1';
import SignIn2 from './components/SignIn/SignIn2';

function App() {
  return (
    <>
<Grid>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/Homepage" exact component={HomePage} />
        <Route path="/donateTo" exact component={DonateTo} />
        <Route path="/shoppingList" exact component={ShoppingList} />
        <Route path="/howitworks" exact component={HowItWorks} />
        <Route path="/SignIn1" exact component={SignInn} />
        <Route path="/SignIn2" exact component={SignIn2} />
      </Switch>
    </Router>

</Grid>

<Grid>
<div> <BottomBar/> </div>
</Grid>
</>
 );
  
}



export default App;
