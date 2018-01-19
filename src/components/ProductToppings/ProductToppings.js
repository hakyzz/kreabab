import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductToppings.css';

class ProductToppings extends Component {

    render() {
        return (
            <div className={`product-toppings ${this.props.item.name === 'sauceType' ? 'product-toppings--sauce' : ''}  `}>
                <div className={`product-toppings__overlay product-toppings__overlay--${this.props.item.title.toLowerCase()}`} style={{backgroundImage: `url(${this.props.item.topping})`}}/>
            </div>
        );
    }
}

ProductToppings.propTypes = {
    item: PropTypes.object
};

export default ProductToppings;