import React from 'react';

import './CartList.css';
import EmptyStateImg from './empty.svg';

import CartEntry from '../CartEntry/CartEntry';
import Button from '../Button/Button';
import ButtonList from '../ButtonList/ButtonList';

const CartList = ({ cart, cartTotal, deleteFromCart, changeQuantityCart }) => {
    const hasProducts = cart.length > 0
    const nodes = hasProducts ? (
        cart.map((cartItem, index) => (
            <CartEntry
            key={index}
            id={cartItem.id}
            name={cartItem.name}
            image={cartItem.image}
            price={cartItem.price}
            quantity={cartItem.quantity}
            totalPrice={cartItem.totalPrice}
            deleteFromCart={deleteFromCart}
            changeQuantityCart={changeQuantityCart}
            />
        ))
    ) : (
        <div className="cart-list__empty-state">
            <img src={EmptyStateImg} className="cart-list__empty-state-img" alt="Keine Produkte vorhanden"/>
            <p className="cart-list__empty-state-text">Keine Produkte vorhanden</p>
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
                    <Button linkName="/order" className="btn cta-large primary">Bestellen&nbsp;&nbsp;&nbsp;></Button>
                </ButtonList>
            </div>
        </div>
    )
}

export default CartList;