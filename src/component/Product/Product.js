import React from 'react'

import './Product.scss';

const Product = ({imgSrc ,title, price}) => {
    return (
        <div className='product-block'>
            <div className='product-block-img'>
                <img src={imgSrc}/>
                <div class='product-block-hover'>
                    <p>{price}</p>
                </div>
            </div>
            <h1>{title}</h1>
            
        </div>
    )
}

export default Product