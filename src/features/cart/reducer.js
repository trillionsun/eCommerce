const cartWithoutItem = (cart, item)=> cart.filter(cartItem => cartItem.id !== item.id)

const itemInCart = (cart, item)=> cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item)=>{
        const cartItem = itemInCart(cart, item)
        return cartItem === undefined
            ? [...cartWithoutItem(cart, item), {...item, quantity: item.quantity}]
            : [...cartWithoutItem(cart, item), {...cartItem, quantity: parseInt(cartItem.quantity,10) + parseInt(item.quantity,10)}]
};

const removeFromCart = (cart, item)=> {
    return [ ...cartWithoutItem(cart,item)]
};

const removeAllFromCart = ()=> {
    return []
};

const setCartItem = (cart, item)=> [...cartWithoutItem(cart, item), {
    ...item,
    quantity: item.quantity
}];

// describe how they change
const cartReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADDED':
            return addToCart(state, action.payload);
        case 'REMOVED':
            return removeFromCart(state, action.payload);
        case 'SETTED':
            return setCartItem(state, action.payload);
        case 'REMOVEALL':
            return removeAllFromCart();
        default:
            return state;
    }
}
export default  cartReducer
