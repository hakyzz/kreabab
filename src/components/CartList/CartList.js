import React, { Component } from 'react';
import './CartList.css';

import CartEntry from '../../components/CartEntry/CartEntry';

class CartList extends Component {

    render() {
        return (
            <div className="cart-list">
                <CartEntry/>
                <CartEntry/>
                <CartEntry/>
            </div>
        );
    }
}

export default CartList;