import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/home'
import CartPage from './features/header/cart'
import CheckOutPage from './pages/checkOut'
import ContactPage from './pages/contact'
import LogInPage from './pages/login'

const Router = ()=>(
    <Switch>
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/cart' component={CartPage} />
        <Route exact path = '/checkout' component={CheckOutPage}/>
        <Route exact path = '/contact' component={ContactPage}/>
        <Route  path = '/login' component={LogInPage}/>
    </Switch>
)
export default Router;
