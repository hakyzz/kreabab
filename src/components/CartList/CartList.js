import React from 'react';

import './CartList.css';

import CartEntry from '../CartEntry/CartEntry';
import Button from '../Button/Button';
import ButtonList from '../ButtonList/ButtonList';


const CartList = ({ cartList }) => (
    <div className="cart-list">
        <div className="cart-list__header">
            <h1>Warenkorb</h1>
        </div>
        <div className="cart-list__list">
        {
            cartList.map((cart, index) => (
                <CartEntry
                key={index}
                name={cart.name}
                image={cart.image}
                price={cart.price}
                />
            ))
        }
        </div>
        <div className="cart-list__summary">
            <div className="">Total</div>
            <div className="">CHF ### Total ###</div>
        </div>
        <div className="cart-list__actions">
            <ButtonList>
                <Button linkName="/" className="btn cta-large secondary">Weiter Shoppen</Button>
                <Button linkName="/" className="btn cta-large primary">Bestellen&nbsp;&nbsp;&nbsp;></Button>
            </ButtonList>
        </div>
    </div>
)

export default CartList;