import React from 'react'
import Header from '../features/header/index'
import Canvas from '../features/canvas/index'
import ProductList from '../features/productList/index'
import Footer from '../features/footer/index'
import data from '../data/products'

function HomePage()
{
return <div>
        <Header/>
        <Canvas/>
        <ProductList/>
        <Footer/>
    </div>
        }

export default HomePage
