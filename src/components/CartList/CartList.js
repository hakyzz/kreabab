import React from 'react';

import './CartList.css';
import EmptyStateImg from './empty-basket.svg';

import CartEntry from '../CartEntry/CartEntry';
import Button from '../Button/Button';
import ButtonList from '../ButtonList/ButtonList';

const CartList = ({ cartList, cartTotal }) => {
    
    const hasProducts = cartList.length > 0
    const nodes = hasProducts ? (
        cartList.map((cart, index) => (
            <CartEntry
            key={index}
            id={cart.id}
            name={cart.name}
            image={cart.image}
            price={cart.price}
            quantity={cart.quantity}
            totalPrice={cart.totalPrice}
            />
        ))
    ) : (
        <div className="cart-list__empty-state">
            <img src={EmptyStateImg} className="empty-state-img" alt="Keine Produkte vorhanden"/>
            <p>Keine Produkte vorhanden</p>
        </div>
    )

    return (
        <div className="cart-list">
            <div className="cart-list__header">
                <h1>Warenkorb</h1>
            </div>
            <div className="cart-list__list">
                {nodes}
            </div>
            <div className="cart-list__summary">
                <div className="">Total</div>
                <div className="">CHF {cartTotal}</div>
            </div>
            <div className="cart-list__actions">
                <ButtonList>
                    <Button linkName="/" className="btn cta-large secondary">Weiter Shoppen</Button>
                    <Button linkName="/" className="btn cta-large primary">Bestellen&nbsp;&nbsp;&nbsp;></Button>
                </ButtonList>
            </div>
        </div>
    )
}

export default CartList;