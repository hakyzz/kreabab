import React from 'react';
import PropTypes from 'prop-types';

import './CartEntry.css';
import { 
    Link 
} from 'react-router-dom';


const CartEntry = ({ name, image, price, inventory }) => (
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
                <label for="entry-quantity">Anzahl:</label>
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

CartEntry.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    inventory: PropTypes.number
}

export default CartEntry;