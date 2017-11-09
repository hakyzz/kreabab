import React from 'react'
import PropTypes from 'prop-types'
// import Button from '../../components/Button/Button';

import './Product.css';

const Product = ({ name, image, description, price, inventory, onAddToCartClicked  }) => (

    <div className="product-teaser">
        <div className="product-teaser__image">
            <img src={image} alt=""/>
        </div>
        <div className="product-teaser__content">
            <h3>{name}</h3>
            <p className="product-teaser__price">ab CHF {price}</p>
            <p className="product-teaser__description">{description}</p>
            <button
                onClick={onAddToCartClicked}
                disabled={inventory > 0 ? '' : 'disabled'}>
                {inventory > 0 ? 'Add to cart' : 'Sold Out'}
            </button>
            <hr/>
            {/*<Button className="btn" linkName="/customizer">Hinzufügen</Button>*/}
        </div>
    </div>

)

Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default Product;