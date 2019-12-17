import React from "react";
import {userService} from "../../../auth/user/userServices";


import {connect} from 'react-redux'
import store from "../../../config/store"





class SignUp extends React.Component {
    constructor(props)
    {
        super(props)
        this.handleClick=this.handleClick.bind(this)
        this.onChange =  this.onChange.bind(this)
        this.state=
            {
                username: "",
                password: "",
                email: ""
            }
    }
    onChange(e)
    {
        this.setState({[e.target.id]: e.target.value})

    } handleClick(event)
    {
        event.preventDefault();
        const newUser={
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
       store.dispatch( userService.signup(newUser));

    }





    render() { return <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="signUpModal"
                           aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold" id="loginTitle">
                        Sign up Form
                    </h4>
                    <button type="button" className="close" id= "signUpClose"data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                    <div className="md-form mb-5">
                        <label data-error="wrong" data-success="right" htmlFor="">Your
                            username:</label>
                        <input type="text" id="username"  value={this.state.username} onChange={this.onChange} className="form-control validate"/>

                    </div>
                    <div className="md-form mb-4">
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your
                            password:</label>
                        <input type="password" id="password" value={this.state.password} onChange={this.onChange} className="form-control validate"/>

                    </div>

                    <div className="md-form mb-5">
                        <label data-error="wrong" data-success="right" htmlFor="">Your
                            email:</label>
                        <input type="email" id="email" value={this.state.email} onChange={this.onChange} className="form-control validate"/>

                    </div>


                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClick}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    }

}
function mapStateToProps(state){
    return{
        notification: state.notification
    }
}
function mapDispatchToProps(dispatch)
{
    return {
        addNotification: (message)=> {
            dispatch({type: 'ADDED', payload:message})
        },
        removeNotification: ()=>{
            dispatch({type: 'REMOVED'})
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
