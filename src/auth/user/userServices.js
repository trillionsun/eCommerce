
import {APIs} from '../../modules/fetch-api'
import {userConstants} from '../user/userConstants'
import {productConstants} from "../../features/productList/productConstants";


export const userService ={
    login,
    logout,
    signup,
    productLoad
}

function productLoad(){
return (dispatch)=>{
    dispatch({type: productConstants.PRODUCT_LOAD_REQUEST})
    APIs.getApi("GET", productConstants.PRODUCT_URL)
        .then(handleResponse)
        .then(
            response=>{
                console.log(response)
                dispatch({type: productConstants.PRODUCT_LOADED, payload:response})
            },
            error=>{
                console.log(error)
                dispatch({type:productConstants.PRODUCT_LOAD_FAILURE})
            }
        )

}



}

function handleResponse (response)
{

    return response.text().then(text=>{

        const data = text && JSON.parse(text);
        if(response.ok)
        {
            return data;
        }
        else
        {
            const error = (data && data.message) || response.statusText;
            console.log("response: asdadad"+response)
            return Promise.reject(error);
        }

    })

}


function signup(user) {
    return dispatch => {
        dispatch({type: userConstants.SIGNUP_REQUEST});

        APIs.fetchApi("POST", userConstants.SIGNUP_URL, user)
            .then(handleResponse)
            .then(
                response => {
                    dispatch({type: userConstants.SIGNUP_SUCCESS, payload: response.message});

                },
                error => {
                    dispatch({type: userConstants.SIGNUP_FAILURE, payload: error.message});
                }
            )
    }
}

function login(user) {
    return dispatch => {
        dispatch({type: userConstants.LOGIN_REQUEST, payload: user});

        APIs.fetchApi("POST", userConstants.LOGIN_URL, user)
            .then(handleResponse)
            .then(response => {
                console.log(response)
                    localStorage.setItem('user', user);
                    localStorage.setItem('token', response.accessToken);
                    dispatch({type: userConstants.LOGIN_SUCCESS, payload: user})
                },
                error => {
                    dispatch({type: userConstants.LOGIN_FAILURE, payload: error})
                }
            )
    }
}

function logout(){
     return dispatch=>
     {

         dispatch({type: userConstants.LOGOUT});
         localStorage.removeItem('user');
     }

}
