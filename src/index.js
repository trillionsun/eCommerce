import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./css/cart.css";




import App from './App';
import store from './config/store'
import './css/homePage.css'


const app =<Provider store = {store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>

ReactDOM.render(app,document.getElementById('root'));


