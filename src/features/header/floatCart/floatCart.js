import Cart from "./cart";
import React from "react";

import {connect} from "react-redux";

class Floatcart extends React.Component {
    constructor(props)
    {
        super(props)
    }


    render() { return <div>
            <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="floatCartModalLabel"
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
                <div className="d-flex justify-content-end">
                    <h5>Total: <span className="price text-success">{this.props.cart.reduce((total, item) => {
                        return total + item.quantity * item.price
                    }, 0)}</span></h5>
                </div>
            </div>

      </div>
    }

}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            dispatch({type: 'REMOVED', payload: item})
        },
        setCartItem: (item) => {
            dispatch({type: 'SETTED', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Floatcart)
