import React, { Component } from 'react';

import BackNavigation from '../components/BackNavigation/BackNavigation';
import ShoppingBag from '../components/ShoppingBag/ShoppingBag';
import CartList from '../components/CartList/CartList';

class CartView extends Component {
    render() {
        return (
            <div className="checkout-page">
                <BackNavigation/>
                <ShoppingBag/>
                
                <h1>Warenkorb</h1>
                <CartList/>

            </div>
        );
    }
}

export default CartView;
