import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

import './ProductTeaser.css';

const ProductTeaser = ({ product, onAddToCartClicked }) => (
    <div>
    <Product
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        inventory={product.inventory} />
    <button
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
    </div>
)

ProductTeaser.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductTeaser;