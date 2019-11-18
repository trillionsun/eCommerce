import React from 'react'
import CartItem from "../features/productList/cartItem";



class Cart extends React.Component{
    constructor(props)
{
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state={
        showCart: false
    }
}
    handleSubmit(e)
    {


    }


render() {
    const {cart, removeFromCart, setCartItem} = this.props
    return (
                        <table class="table table-image">
                            <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
            {
      cart.map(cartItem => <CartItem
            Item={cartItem}
            setCartItem={setCartItem}
            removeFromCart = {removeFromCart}
            />

        )
            }
                            </tbody>
                        </table>


)
    }
}


export default Cart
