import React from 'react'
import {connect} from "react-redux";
import CartItem from "../features/productList/cartItem";



class Cart extends React.Component{
    constructor(props)
{
    super(props)
    this.handleSubmit.bind(this)
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
        <table id="cart-table">
            <tr>
                <th> Image </th>
                <th> Quantity </th>
                <th> Price </th>
                <th> </th>
            </tr>
            {
        cart.map(cartItem => <CartItem
            Item={cartItem}
            setCartItem={setCartItem}
            removeFromCart = {removeFromCart}
            />

        )
            }
            <tr>
                <td> Total price:  </td>
                <td>  </td>
                <td>{cart.reduce((total,item)=>{return total+item.quantity*item.price },0)} </td>
            </tr>

        </table>
)
    }
}


export default Cart
