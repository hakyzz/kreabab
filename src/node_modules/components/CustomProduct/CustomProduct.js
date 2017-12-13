import React, { Component } from 'react';
import './CustomProduct.css';
import ProductImage from '../../assets/img/fladenbrot.png';

class CustomProduct extends Component {

    render() {
        return (
            <div className="custom-product">
                <img src={ProductImage} className="custom-product__image" alt="fladenbrot"/>
                <h2>Döner im Fladenbrot</h2>
            </div>
        );
    }
}

export default CustomProduct;