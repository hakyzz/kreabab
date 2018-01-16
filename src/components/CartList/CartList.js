import React from 'react';

import './CartList.css';
import EmptyStateImg from './empty.svg';

import CartEntry from '../CartEntry/CartEntry';
import Button from '../Button/Button';
import ButtonList from '../ButtonList/ButtonList';
import FormatPrice from '../FormatPrice/FormatPrice';

const CartList = ({ cart, cartTotal, deleteFromCart, changeQuantityCart }) => {
    const hasProducts = cart.length > 0;
    let nodes = null;
    if (hasProducts) {

        nodes = cart.map((cartItem, index) => {

            return <CartEntry
                key={index}
                id={cartItem.id}
                name={cartItem.name}
                image={cartItem.image}
                price={cartItem.price}
                quantity={cartItem.quantity}
                totalPrice={cartItem.totalPrice}
                deleteFromCart={deleteFromCart}
                changeQuantityCart={changeQuantityCart}
                productOptions={cartItem.options}
                bread={cartItem.bread || ''}
                sauces={cartItem.sauces || []}
                toppings={cartItem.toppings || []}
            />
        })

    } else {
        nodes = (
            <div className="cart-list__empty-state">
                <img src={EmptyStateImg} className="cart-list__empty-state-img" alt="Keine Produkte vorhanden"/>
                <p className="cart-list__empty-state-text">Keine Produkte vorhanden</p>
            </div>
        )
    }

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
                <div className=""><FormatPrice price={cartTotal}/></div>
            </div>
            <div className="cart-list__actions">
                <ButtonList>
                    <Button linkName="/" styleName="secondary">Weiter Shoppen</Button>
                    <Button linkName="/order" styleName="primary">Bestellen</Button>
                </ButtonList>
            </div>
        </div>
    )
};

export default CartList;