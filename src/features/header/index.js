import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";


import Floatcart from './floatCart'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCart: false
        }
        this.handleCart = this.handleCart.bind(this)
    }

    handleCart(e) {
        e.preventDefault();
    }

    render() {
        return <React.Fragment>
            <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-secondary ">
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
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/signUp'>SignUp </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/login'>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/#' data-toggle="modal"
                                         data-target="#cartModal">Cart <span
                                    class="badge badge-light position-relative"> {this.props.cart.length} </span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            <Floatcart/>
        </React.Fragment>
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps)(Header)




