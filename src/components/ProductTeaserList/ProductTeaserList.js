import React from 'react';
import './ProductTeaserList.css';

import { Link } from 'react-router-dom'

import ProductTeaser from '../ProductTeaser/ProductTeaser';
import Button from '../Button/Button';


const ProductTeaserList = ({ products, handleAddToCartClick }) => (
    <section className="product-teaser-section">
        <div className="product-teaser-section__title">
            <h2>Hauptgerichte</h2>
        </div>
        <div className="product-teaser-list">
            {
                products.map((product, index) => {
                    return (
                        <ProductTeaser
                        key={index}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        >
                            <Button onClick={() => {
                                handleAddToCartClick(product);
                            }}>Add to Cart</Button>
                            <div>
                                <Link to={`/products/${product.id}`} className="cta-details">
                                    Details
                                </Link>
                            </div>
                        </ProductTeaser>
                    )
                })
            }
        </div>
    </section>
)

export default ProductTeaserList;