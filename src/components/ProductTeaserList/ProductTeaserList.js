import React from 'react';
import './ProductTeaserList.css';

import { Link } from 'react-router-dom'

import ProductCategories from '../ProductCategories/ProductCategories'
import ProductTeaser from '../ProductTeaser/ProductTeaser';
import Button from '../Button/Button';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const ProductTeaserList = ({ products, handleAddToCartClick }) => (
    <section className="product-teaser-section">
        <div className="product-teaser-section__title">
            <ProductCategories />
        </div>
        <div className="product-teaser-list">
            {
                products.map((product, index) => {

                    return (
                        <ReactCSSTransitionGroup
                            key={index}
                            transitionName="fade"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>

                            <ProductTeaser
                                key={index}
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                description={product.description}
                                price={product.price}
                                >
                                <Button styleName="secondary" onClick={() => {
                                    handleAddToCartClick(product);
                                }}>Add to Cart</Button>
                                <div>
                                    <Link to={`/products/${product.id}`} className="cta-details">
                                        Details
                                    </Link>
                                </div>
                            </ProductTeaser>
          
                        </ReactCSSTransitionGroup>

                    )
                })
            }
        </div>
    </section>
);

export default ProductTeaserList;