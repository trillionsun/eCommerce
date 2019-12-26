import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';

import {signInReducer} from '../auth/user/signInReducer';
import {signUpReducer} from '../auth/user/signUpReducer';
import cartReducer from '../features/cart/reducer'
import productReducer from '../features/productList/reducer'


const middlewareEnhancer = applyMiddleware(thunk);

const rootReducer = combineReducers({
    cart: cartReducer,
    loggedIn: signInReducer,
    signUp: signUpReducer,
    products: productReducer
})

const composedEnhancers =compose(
    middlewareEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)


// if the extension exists within this browser, run it or else do not run it
const store = createStore(
    rootReducer,
    composedEnhancers
)

export default store
