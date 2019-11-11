import React from 'react'
import Header from '../features/header/index'
import Canvas from '../features/canvas/index'
import ProductList from '../features/productList/index'
import Footer from '../features/footer/index'
import data from '../data/products'

function HomePage(props)
{
return <div>
        <Header/>
        <Canvas/>
        <ProductList products={data.products}/>
        <Footer/>
    </div>
        }


export default HomePage
