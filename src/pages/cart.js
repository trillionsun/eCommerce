import React from 'react'
import {connect} from "react-redux";


class CartItem extends React.Component{
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
    const {cart, removeFromCart} = this.props
    return (
        <table id="cart-table">
            <tr>
                <th> Image </th>
                <th> Quantity </th>
                <th> Price </th>
                <th> </th>
            </tr>
            {
        cart.map(cartItem =>
            <tr>
                <td><img src={cartItem.image} className="cart-image"/></td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.price * cartItem.quantity }</td>
                <td><button type="button" className="close" onClick={()=> removeFromCart(cartItem)}>x</button></td>
            </tr>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
