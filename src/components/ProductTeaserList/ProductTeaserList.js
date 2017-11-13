import React from 'react';

import './ProductTeaserList.css';

import ProductTeaser from '../ProductTeaser/ProductTeaser';


const ProductTeaserList = ({ products, handleAddToCartClick }) => (
    <section className="product-teaser-section">
        <div className="product-teaser-section__title">
            <h2>Hauptgerichte</h2>
        </div>
        <div className="product-teaser-list">
            {
                products.map((product, index) => {
                    return (
                        <div>
                        <ProductTeaser
                        key={index}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        />
                        <button onClick={() => {
                            handleAddToCartClick(product);
                        }}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    </section>
)

export default ProductTeaserList;