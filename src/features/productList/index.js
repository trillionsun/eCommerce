import React from 'react'
import {connect} from 'react-redux'
import store from "../../config/store"

import  ProductListItem from "./productListItem"
import fetchApi from "../../modules/fetch-api";
import {productConstants} from "./productConstants"
import {userService} from "../../auth/user/userServices";






class ProductList extends React.Component
{
componentDidMount() {
store.dispatch(userService.productLoad())
}

    render(){
        const {addToCart, cart, products} = this.props
        return <div className="container">
            <div class ="row">
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
        cart: state.cart,
        products: state.products
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
