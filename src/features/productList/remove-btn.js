import React from 'react'

export default function RemoveButton(props)
{
    return <button type="button" class="btn-sm btn-secondary"
        onClick={()=> props.removeFromCart(props.cartItem)}>
        Remove </button>

}
