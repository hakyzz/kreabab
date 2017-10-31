import React, { Component } from 'react';
import './CartList.css';
import CartEntry from '../../components/CartEntry/CartEntry';
import Button from '../../components/Button/Button';
import ButtonList from '../../components/ButtonList/ButtonList';

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
                    <ButtonList>
                        <Button linkName="/" className="btn cta-large secondary">Weiter Shoppen</Button>
                        <Button linkName="/" className="btn cta-large primary">Bestellen&nbsp;&nbsp;&nbsp;></Button>
                    </ButtonList>
                </div>
            </div>
        );
    }
}

export default CartList;