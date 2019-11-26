import React from "react";


class SignUp extends React.Component {
    constructor(props)
    {
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
 handleClick(event)
    {
        event.preventDefault();

    }





    render() { return <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="signUpModal"
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
                        <input type="text" id="username" className="form-control validate"/>

                    </div>
                    <div className="md-form mb-4">
                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your
                            password:</label>
                        <input type="password" id="password" className="form-control validate"/>

                    </div>

                    <div className="md-form mb-5">
                        <label data-error="wrong" data-success="right" htmlFor="">Your
                            email:</label>
                        <input type="email" id="userEmail" className="form-control validate"/>

                    </div>


                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={this.handleClick}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    }

}


export default SignUp
