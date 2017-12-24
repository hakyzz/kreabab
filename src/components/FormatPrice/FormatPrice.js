import React, { Component } from 'react';
import './FormatPrice.css';

class FormatPrice extends Component {

    render() {

        let price = this.props.price;
        price = price.toFixed(2);

        return (
            <span className="format-price">
                CHF {price}
            </span>
        );
    }
}

export default FormatPrice;