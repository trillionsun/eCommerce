import React from 'react'


class CartItem extends React.Component{
    constructor(props)
    {
        super(props)
        this.handleQuantityChange=this.handleQuantityChange.bind(this)

    }
    handleQuantityChange(event)
    {
        let quantity = event.target.value;
        this.props.setCartItem({...this.props.Item, quantity: quantity});
    }
    render() {
        const{ Item, removeFromCart}= this.props
        return (
                        <tr>
                            <td class="w-5 h-10"><img src={Item.image} className="img-fluid, img-thumbnail" alt='product'/></td>
                            <td>{Item.name} </td>
                            <td>{Item.price} </td>
                            <td class="qty"><input value={Item.quantity} onChange={this.handleQuantityChange
                            } min='0' type='number'/></td>
                            <td>{Item.price * Item.quantity }</td>
                            <td><a href="#" class="btn btn-danger btn-sm" onClick={
                                function(e) {
                                        e.preventDefault();
                                        removeFromCart(Item);
                                    }
                            }>X</a></td>
                        </tr>
        )
    }
}


export default CartItem
