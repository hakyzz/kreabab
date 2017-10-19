import React, { Component } from 'react';
import './CartList.css';

import CartEntry from '../../components/CartEntry/CartEntry';

class CartList extends Component {

    render() {
        return (
            <div className="cart-list">
                <div className="cart-list__header">
                    <h1>Warenkorb</h1>
                </div>
                <div className="cart-list__list">
                    <CartEntry/>
                    <CartEntry/>
                    <CartEntry/>
                </div>
            </div>
        );
    }
}

export default CartList;