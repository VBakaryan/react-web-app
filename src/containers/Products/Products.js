import React from 'react'

import Product from '../../components/Product/Product'
import productsData from '../../data-mockup/products-mockup'
import './Products.scss';

function Products() {
    return(
        <div id='app-products'>
            {productsData.map(el => {
                return <Product key={el.id} title={el.title} price={el.price} imgSrc={el.imgSrc}/>
            })}
        
        </div>

    )
}

export default Products