import React from 'react'

export default function RemoveButton(props)
{
    return <button class="btn"
        onClick={function(e) {
            e.preventDefault();
            props.removeFromCart(props.cartItem)
        }}>
        Remove </button>

}
