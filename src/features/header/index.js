import React from 'react'
import {connect} from 'react-redux'
import { NavLink, withRouter} from 'react-router-dom';




function Header(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Angela's Little Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to = '/'> Home
                                <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = '/about'>About </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = '/cart'>Cart </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = '/contact'>Contact </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        }
export default Header
