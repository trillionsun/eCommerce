import {productConstants} from "./productConstants";

const productLoad= (productList)=>{
    return productList
}


export default function productReducer(state=[], action){
    switch(action.type){
        case productConstants.PRODUCT_LOAD_REQUEST:
            return [];
        case productConstants.PRODUCT_LOADED:
            return productLoad(action.payload)
        case productConstants.PRODUCT_LOAD_FAILURE:
            return [];
        default:
            return state;
    }
}
