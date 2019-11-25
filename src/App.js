import React, {Fragment} from 'react';
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
