import React from 'react';
import './ProductTeaser.css';

import FormatPrice from '../FormatPrice/FormatPrice';

const ProductTeaser = ({ children, product, name, image, description, price, handleAddToCartClick }) => (
    <div className="product-teaser">
        <div className="product-teaser__image">
            <img src={image} alt=""/>
        </div>
        <div className="product-teaser__info">
            <div className="product-teaser__content">
                <h3>{name}</h3>
                <p className="product-teaser__price">ab <FormatPrice price={price}/></p>
                <p className="product-teaser__description">{description}</p>
            </div>
            <div className="product-teaser__button">
                {children}
            </div>
        </div>
    </div>
)

export default ProductTeaser;