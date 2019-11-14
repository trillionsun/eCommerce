import React from 'react'

import { NavLink} from 'react-router-dom';

import CartItem from '../../pages/cart'
import {connect} from "react-redux";


class Header extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            showCart: false
        }
        this.handleCart= this.handleCart.bind(this)
    }
    handleCart(e) {
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        });
    }

    render(){
        return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Angela's Little Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to = '/'> Home
                                <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = '/about'>About </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = '/contact'>Contact </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to ='/#'  onClick={this.handleCart} >Cart </NavLink>
                    </li>
                    </ul>
                </div>
            </div>
            <div className={this.state.showCart? "cart-item-all": "cart-item-none"}>
                <CartItem/>
            </div>
        </nav>

        </div>
    }



}




export default (Header)




