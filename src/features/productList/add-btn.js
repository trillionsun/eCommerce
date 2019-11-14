import React from 'react'


export default function AddButton(props)

{
        const pro ={...props.product, quantity: props.quantity}

        return <button type="button" class="btn-sm btn-secondary" onClick={props.quantity>0?() => props.addToCart(pro): null}> Add to cart({
            (props.cartItem && props.cartItem.quantity) || 0
        }) </button>

}
