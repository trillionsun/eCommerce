import React from "react";
import {userService} from "../../../auth/user/userServices"
import store from "../../../config/store"



class Login extends React.Component {


    constructor(props)
    {
        super(props)
        this.handleClick=this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state= {
            username: "",
            password:""
        }
    }
    handleChange(e)
    {
        this.setState(
            ({[e.target.id]: e.target.value})
        )
    }
    handleClick(event)
    {
        event.preventDefault();
        const loginInfo={
            usernameOrEmail: this.state.username,
            password: this.state.password
        }
       store.dispatch(userService.login(loginInfo));

    }





    render() { return <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold" id="loginTitle">
                            Login Form
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                            <label data-error="wrong" data-success="right" htmlFor="">Your
                                username:</label>
                            <input type="text" id="username" value = {this.state.username} onChange={this.handleChange} className="form-control validate"/>

                        </div>
                        <div className="md-form mb-4">
                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your
                                password:</label>
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange}className="form-control validate"/>

                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-primary close" data-dismiss="modal" onClick={this.handleClick}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    }

}


export default Login
