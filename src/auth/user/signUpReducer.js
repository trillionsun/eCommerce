import {userConstants} from "./userConstants";

export function signUpReducer(state = {}, action){
    switch(action.type){
        case userConstants.SIGNUP_REQUEST:
            return {registered: false, message: action.payload};
        case userConstants.SIGNUP_SUCCESS:
            return {registered : true, message: action.payload};
        case userConstants.SIGNUP_FAILURE:
            return {registered: false, message: action.payload};
        default:
            return state;
    }
}
