import React from 'react'
import {connect} from 'react-redux'

import  ProductListItem from "./productListItem"




class ProductList extends React.Component
{
    render(){
        const {addToCart,products, cart} = this.props
        return <div className="container">
            <div class = "row">
            {
                products.map(product =>
                    <ProductListItem
                        product={product}
                        addToCart={addToCart}
                        cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                    />
                    )
            }
            </div>
        </div>

    }
}

// subscribe and dispatch
function mapStateToProps(state){
    return{
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch)
{
    return {
        addToCart: (item)=> {
            dispatch({type: 'ADDED', payload:item})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
