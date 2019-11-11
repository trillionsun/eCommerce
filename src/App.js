import React, {Fragment} from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import HomePage from './pages/home'






function mapStateToProps(state)
{
    return {
        cart: state.cart
    }
}


function App() {
    return <div>
        <HomePage/>
    </div>
}

export default connect(mapStateToProps)(App);
