import React from 'react'
import CartItem from "./cartItem";

class Cart extends React.Component{
    constructor(props)
{
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this)
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
      cart.sort((a,b)=> a.id-b.id).map(cartItem => <CartItem
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
