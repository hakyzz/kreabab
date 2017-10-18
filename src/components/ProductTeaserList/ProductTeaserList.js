import React, { Component } from 'react';
import './ProductTeaserList.css';

import ProductTeaser from '../../components/ProductTeaser/ProductTeaser';

class ProductTeaserList extends Component {

    render() {
        return (
            <main className="wrap">
                <section className="product-teaser-section">
                    <div className="product-teaser-section__title">
                        <h2>Hauptgerichte</h2>
                    </div>
                    <div className="product-teaser-list">
                        <ProductTeaser/>
                        <ProductTeaser/>
                        <ProductTeaser/>
                        <ProductTeaser/>
                        <ProductTeaser/>
                        <ProductTeaser/>
                        <ProductTeaser/>
                    </div>
                </section>
            </main>
        );
    }
}

export default ProductTeaserList;