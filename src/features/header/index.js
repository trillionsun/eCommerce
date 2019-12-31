import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {Fragment} from "react"



import Floatcart from './floatCart/floatCart'
import Login from "./login";
import SignUp from "./signup"
import {userService} from "../../auth/user/userServices";
import store from "../../config/store";


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.handleSignOut = this.handleSignOut.bind(this);
    }
     handleSignOut(e){
        e.preventDefault();
         store.dispatch(userService.logout());
    }

    render() {
        const {cart, loggedIn} = this.props
        const Log = ()=>
            (loggedIn.loggedIn.toString())== "Succeed"  ?
                (
                    <Fragment>
                        <li className="nav-item">
                <NavLink className="nav-link"  to='#' onClick={this.handleSignOut} >LogOut</NavLink>
                        </li>
                <li className="nav-item">
                <NavLink className="nav-link" to='/checkout' >CheckOut</NavLink>
                </li>
                    </Fragment>)
                : (
                <Fragment>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='#' data-toggle="modal" data-target="#loginModal" >Login</NavLink>
                    </li>
                    <li  className="nav-item">
                        <NavLink className="nav-link" to='#' data-toggle="modal" data-target="#signUpModal">SignUp </NavLink>
                    </li>
                </Fragment>
        )
        return <React.Fragment>
            <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light ">
                <div className="container">
                    <a className="navbar-brand" href="#">Angela's Little Shop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to='/'> Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/about'>About </NavLink>
                            </li>
                                < Log/>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/#' data-toggle="modal"
                                         data-target="#cartModal">Cart <span
                                    className="badge badge-light position-relative"> {this.props.cart.length} </span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            <Floatcart/>
            <Login/>
            <SignUp/>
        </React.Fragment>
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        loggedIn: state.loggedIn

    }
}


export default connect(mapStateToProps)(Header)




