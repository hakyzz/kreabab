import React, { Component } from 'react';
import './CartEntry.css';
import { 
    Link 
} from 'react-router-dom';


class CartEntry extends Component {

    render() {
        return (
            <div className="cart-entry">
                <div className="cart-entry__content">
                    <div className="cart-entry__image">
                        <img src="http://via.placeholder.com/90x90" alt=""/>
                    </div>
                    <div className="cart-entry__details">
                        <h3>Produkt Name</h3>
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
                        <span>CHF 9.90</span>
                    </div>
                    <div className="entry-remove">
                        <Link to="/" className="remove">Remove</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartEntry;