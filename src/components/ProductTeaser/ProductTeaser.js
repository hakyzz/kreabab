import React from 'react';
import './ProductTeaser.css';


const ProductTeaser = ({ children, product, name, image, description, price, handleAddToCartClick }) => (
    <div className="product-teaser">
        <div className="product-teaser__image">
            <img src={image} alt=""/>
        </div>
        <div className="product-teaser__info">
            <div className="product-teaser__content">
                <h3>{name}</h3>
                <p className="product-teaser__price">ab CHF {price}</p>
                <p className="product-teaser__description">{description}</p>
            </div>
            <div className="product-teaser__button">
                {children}
            </div>
        </div>
    </div>
)

export default ProductTeaser;