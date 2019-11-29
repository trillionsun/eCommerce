import React from 'react'

import {FaFacebook, FaGithub, FaTwitter, FaInstagram} from "react-icons/fa"
import Contact from "../contact";





function Intro()
{
    return <header>
        <div className="row text-center">
            <div className="col-md-12 col-sm-12">
                <h6 color="white">Intro: A Secret Shop</h6>
                <h1>EXCITING ADVENTURE</h1>
                <p>Come on! Let's have an exciting adventure.</p>
                <p className="text-muted">Let us be social</p>
                <div className="column">
                    <FaFacebook/>
                    <FaGithub/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>
        </div>
            <div className="row text-center">
                <div className="col-md-12 col-sm-12">
                    <h1>Our Working hours: </h1>
                    <p>Weekdays: 9:00-17:00</p>
                    <p>Weekends: 10:00-16:00</p>
                </div>
    </div>
        <Contact/>
    </header>
}
export default Intro


