import React from 'react';

import ProductIcon from '../../assets/Icons/ProductIcon';
import Button from '../Button/Button';

import './Product.scss';

const Product = ({ imgSrc , title, price}) => {
    return (
        <div className='app-product'>
            <div className='app-product__img'>
                <img src={imgSrc}/>
                <div className='app-product__hover'>
                    <p>{price + ` Դ`}</p>
                    <Button>
                        <ProductIcon />
                       <span>Գնել</span>
                    </Button>
                </div>
            </div>
            <h1>{title}</h1>
        </div>
    )
}

export default Product;