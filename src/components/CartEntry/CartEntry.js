import React from 'react';
import { Link } from 'react-router-dom';

import './CartEntry.css';


const CartEntry = ({ name, image, price }) => (
    <div className="cart-entry">
        <div className="cart-entry__content">
            <div className="cart-entry__image">
                <img src={image} alt=""/>
            </div>
            <div className="cart-entry__details">
                <h3>{name}</h3>
                <p>Im Fladenbrot, Salat, Tomaten, Zwiebeln, Cocktailsauce, Scharfe Sauce</p>
            </div>
        </div>
        <div className="cart-entry__controls">
            <div className="entry-quantity">
                <label htmlFor="entry-quantity">Anzahl:</label>
                <select name="entry-quantity" className="entry-quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className="entry-price">
                <span>CHF {price}</span>
            </div>
            <div className="entry-remove">
                <Link to="/" className="remove">Remove</Link>
            </div>
        </div>
    </div>
)

export default CartEntry;