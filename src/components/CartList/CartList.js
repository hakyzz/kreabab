import React, { Component } from 'react';
import './CartList.css';
import { 
    Link 
} from 'react-router-dom';
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
                <div className="cart-list__summary">
                    <div className="">Total</div>
                    <div className="">CHF 99.00</div>
                </div>
                <div className="cart-list__actions">
                    <Link to="/" className="btn cta-large secondary">Weiter Shoppen</Link>
                    <Link to="/" className="btn cta-large primary">Bestellen</Link>
                </div>
            </div>
        );
    }
}

export default CartList;