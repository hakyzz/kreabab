import React from 'react';
import './ProductDetail.css';

import Button from '../Button/Button';


const ProductDetail = ({ product, handleAddToCartClick }) => (

    <div className="product-detail">
        <div className="product-detail__content">
            <h1>{product.name}</h1>
            <p className="product-detail__price">{product.price}</p>
            <p className="product-detail__description">{product.description}</p>
            <div>
                <p>
                    ### TODO: Produkt Eigenschaften ###<br />
                    Brot: {product.bred}<br />
                    Sauce: {product.sauce}<br />
                </p>
            </div>
            <div className="product-detail__button">
                <Button onClick={() => {
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
)

export default ProductDetail;