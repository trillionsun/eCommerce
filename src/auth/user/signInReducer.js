import {userConstants} from "./userConstants";
let user = JSON.parse(JSON.stringify(localStorage.getItem('user')));
const initialState = user ? {loggedIn : "Succeed" , user: user.usernameOrEmail} : {loggedIn : "Failed"};

export function signInReducer(state = initialState, action){
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return{
                loggedIn: "In Progress",
                user: action.payload
            };
        case userConstants.LOGIN_FAILURE:
            return{
                loggedIn: "Failed",
                user: action.payload
            };
        case  userConstants.LOGIN_SUCCESS:
            return{
                loggedIn: "Succeed",
                user: action.payload
            };
        case userConstants.LOGOUT:
            return {loggedIn: "Failed"};
        default:
            return state
    }
}
