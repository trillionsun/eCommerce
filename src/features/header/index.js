import React from 'react'

import { NavLink} from 'react-router-dom';

import Cart from '../../pages/cart'
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
    }

    render(){
        return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
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
                        <NavLink className="nav-link" to ='/#' data-toggle="modal" data-target="#cartModal" >Cart({this.props.cart.length}) </NavLink>
                    </li>
                    </ul>
                </div>
            </div>

        </nav>
            <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Your Shopping Cart
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                <Cart
                    cart={this.props.cart}
                    removeFromCart={this.props.removeFromCart}
                    setCartItem={this.props.setCartItem}
                />
                            <div className="modal-footer border-top-0 d-flex justify-content-between">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <h5>Total: <span className="price text-success">{this.props.cart.reduce((total,item)=>{return total+item.quantity*item.price },0)}</span></h5>
            </div>
        </div>
    }

}
function mapStateToProps(state){
    return{
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch)
{
    return {
        removeFromCart: (item) => {
            dispatch({type: 'REMOVED', payload:item})
        },
        setCartItem: (item)=> {
            dispatch({type: 'SETTED', payload: item})

        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Header)




