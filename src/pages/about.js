import React from 'react'
import Header from '../features/header/index'
import Footer from '../features/footer/index'
import Map from '../features/map/index'
import Intro from '../features/Intro/index'
import '../css/aboutPage.css'



function AboutPage()
{
    return <div>
        <Header/>
        <Intro/>
        <Map/>
        <Footer/>
    </div>
}

export default AboutPage


