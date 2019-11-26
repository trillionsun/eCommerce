import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/home'
import CheckOutPage from './pages/checkOut'
import AboutPage from "./pages/about";

const Routers = ()=>(
    <Switch>
        <Route  exact path = '/' component={HomePage}/>
        <Route  exact path = '/checkout' component={CheckOutPage}/>
        <Route  exact path = '/about' component={AboutPage}/>
    </Switch>
)
export default Routers;
