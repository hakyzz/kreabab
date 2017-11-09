import React from 'react';
import PropTypes from 'prop-types';

import './ProductTeaserList.css';

const ProductTeaserList = ({ title, children }) => (
    <section className="product-teaser-section">
        <div className="product-teaser-section__title">
            <h2>{title}</h2>
        </div>
        <div className="product-teaser-list">
            {children}
        </div>
    </section>
)

ProductTeaserList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default ProductTeaserList;