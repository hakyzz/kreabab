import React from 'react';
import './ProductDetail.css';

import Button from '../Button/Button';
import FormatPrice from '../FormatPrice/FormatPrice';

const ProductDetail = ({ product, handleAddToCartClick, price }) => (

    <div className="product-detail">
        <div className="product-detail__content">
            <h1>{product.name}</h1>
            <p className="product-detail__price"><FormatPrice price={product.price}/></p>
            <p className="product-detail__description">{product.description}</p>
            <div>
            <p>{product.bread !== "" ? `Brot: ${product.bread}` : ''}</p>
            <p>{product.toppings.length !== 0 ? `Toppings: ${product.toppings.join(', ')}` : ''}</p>
            <p>{product.sauce.length !== 0 ? `Sauces: ${product.sauce.join(', ')}` : ''}</p>
            <br />
            </div>
            <div className="product-detail__button">
                <Button styleName="secondary" onClick={() => {
                    handleAddToCartClick(product);
                }}>Add to Cart</Button>
            </div>
        </div>
        <div className="product-detail__image">
            <img
                className="product-image"
                src={product.image}
                alt={product.name}
            />
        </div>
    </div>
);

export default ProductDetail;