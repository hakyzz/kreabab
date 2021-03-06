import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormatPrice.css';

class FormatPrice extends Component {

    render() {

        let price = this.props.price;
        price = parseFloat(price).toFixed(2);

        return (
            <span className="format-price">
                CHF {price}
            </span>
        );
    }
}

FormatPrice.propTypes = {
    price: PropTypes.any.isRequired,
};

export default FormatPrice;