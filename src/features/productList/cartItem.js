import React from 'react'


class CartItem extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
       quantity: this.props.Item.quantity
        }
        this.handleQuantityChange=this.handleQuantityChange.bind(this)

    }
    handleQuantityChange(event)
    {
        let quantity = event.target.value;
        this.setState(
            {
                quantity:quantity
            }
        )
        this.props.setCartItem({...this.props.Item, quantity: quantity});
    }
    render() {

        const{ Item, removeFromCart}= this.props
        return (
                        <tr>
                            <td><img src={Item.image} className="cart-image"/></td>
                            <td><input value={this.state.quantity} onChange={this.handleQuantityChange
                            } min='0' type='number'/></td>
                            <td>{Item.price * Item.quantity }</td>
                            <td><button type="button" className="close" onClick={
                                function(e) {
                                        e.preventDefault();
                                        removeFromCart(Item);
                                    }
                            }>x</button></td>
                        </tr>
        )
    }
}


export default CartItem
