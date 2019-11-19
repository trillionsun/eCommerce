import React from 'react'


export default function AddButton(props)

{
        const pro ={...props.product, quantity: props.quantity}

        return <button class="btn btn-success" onClick={function(e){
                e.preventDefault();
                if(props.quantity>0)
                {
                        props.addToCart(pro)
                }
        }}> Add to cart <span class="badge badge-success">{
                (props.cartItem && props.cartItem.quantity) || 0
        }</span></button>

}
