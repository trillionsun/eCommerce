import {createStore, combineReducers} from 'redux'
import cartReducer from '../features/cart/reducer'
import {reducer as formReducer} from 'redux-form'



const rootReducer = combineReducers({
    cart: cartReducer,


})
// if the extension exists within this browser, run it or else do not run it
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
