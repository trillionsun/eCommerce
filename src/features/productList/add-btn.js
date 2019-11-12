import React from 'react'


export default function AddButton(props)

{
        const pro ={...props.product, quantity: props.quantity}

        return <button type="button" class="btn-sm btn-secondary" onClick={() => props.addToCart(pro)}> Add to cart({
            (props.cartItem && props.cartItem.quantity) || 0
        }) </button>

}
