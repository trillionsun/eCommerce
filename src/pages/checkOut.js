import React from 'react'
import Header from '../features/header/index'
import Footer from '../features/footer/index'
import Cart from '../features/header/floatCart/cart'
import {connect} from "react-redux";
import Map from "../features/map/index"

class  CheckOut extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render() {
        const {cart, removeFromCart, setCartItem} = this.props
        return <div>
            <Header/>
            <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                setCartItem={setCartItem}/>

                <Map/>
            <Footer/>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            dispatch({type: 'REMOVED', payload: item})
        },
        setCartItem: (item) => {
            dispatch({type: 'SETTED', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)


