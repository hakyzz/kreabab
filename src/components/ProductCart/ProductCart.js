import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCart.css';
import FormatPrice from "../FormatPrice/FormatPrice";
import { menu } from "../../defs/nav"

class ProductCart extends Component {

    getNextMenuItem () {
        const index = menu.findIndex(menuItem => menuItem.id === this.props.activeCategoryId);
        return menu[index + 1];
    }

    handleClick = () => {
        const nextMenuItem = this.getNextMenuItem();

        if (nextMenuItem) {
            this.props.history.push(nextMenuItem.href)
        } else {
            this.props.addToCart();
        }

    };

    render() {
        const menuItem = this.getNextMenuItem();
        const menuItemLabel = menuItem ? `Weiter zu ${menuItem.label}` : `Add to Cart`;

        return (
            <div className="product-cart">
                <div className="product-cart__quantity"><FormatPrice price={this.props.price} /></div>
                <div onClick={this.handleClick} className="product-cart__forward-link">{menuItemLabel}&nbsp;&nbsp;></div>
            </div>
        );
    }
}

ProductCart.propTypes = {
    activeCategoryId: PropTypes.string,
    history: PropTypes.object,
    addToCart: PropTypes.func,
    price: PropTypes.number,
};

export default ProductCart;