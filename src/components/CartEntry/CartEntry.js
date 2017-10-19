import React, { Component } from 'react';
import './CartEntry.css';
import { 
    Link 
} from 'react-router-dom';


class CartEntry extends Component {

    render() {
        return (
            <div className="cart-entry">
                <div className="cart-entry__image"><img src="http://via.placeholder.com/90x90" alt=""/></div>
                <div className="cart-entry__content">
                    <h3>Produkt Name</h3>
                    <p>Im Fladenbrot, Salat, Tomaten, Zwiebeln, Cocktailsauce, Scharfe Sauce</p>
                </div>
                <div className="cart-entry__controls">
                    <span>CHF 9.90</span>
                    <div>
                        <label for="quantity-select">Anzahl:</label>
                        <select name="quantity-select" id="quantity-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <Link to="/" className="remove-entry">Remove</Link>
                </div>
            </div>
        );
    }
}

export default CartEntry;