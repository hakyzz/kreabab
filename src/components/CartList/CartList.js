import React from 'react';
import PropTypes from 'prop-types';
import './CartList.css';
import CartEntry from '../CartEntry/CartEntry';


const CartList = ({ products, total, onCheckoutClicked }) => {
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <CartEntry
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        )
    ) : (
        <p>Please add some products to cart.</p>
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
                <div className="">CHF {total}</div>
            </div>
            <div className="cart-list__actions">
                <button onClick={onCheckoutClicked}
                    disabled={hasProducts ? '' : 'disabled'}>
                    Checkout
                </button>
                {/*
                <ButtonList>
                    <Button linkName="/" className="btn cta-large secondary">Weiter Shoppen</Button>
                    <Button linkName="/" className="btn cta-large primary">Bestellen&nbsp;&nbsp;&nbsp;></Button>
                </ButtonList>
                */}
            </div>
        </div>
    )
}


CartList.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string,
    onCheckoutClicked: PropTypes.func
}

export default CartList;