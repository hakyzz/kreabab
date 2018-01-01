import React from 'react';
import './ProductDetail.css';


const ProductDetail = ({ product }) => (

    <div className="product-detail">
        <div className="product-detail__content">
            <h1>{product.name}</h1>
            <p className="product-detail__price">{product.price}</p>
            <p className="product-detail__description">{product.description}</p>
            <div>
                ### TODO: Product Eigenschaften ###
            </div>
            <div className="product-detail__button">
                ### TODO: Add to Cart Button ###
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