import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './CartEntry.css';


export default class CartEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            quantity: nextProps.quantity
        });
    }

    handleInputChange(event) {
        const target = event.target; // input number
        const quantity = target.value;
        const itemId = target.getAttribute("id");
        const name = target.name; //quantity
        
        this.setState({
            [name]: quantity
        });
    
        this.props.changeQuantityCart(itemId, quantity)
    }

    render() {
        function onDeleteHandler(event) {
            const itemId = event.target.getAttribute("id");
            this.props.deleteFromCart(itemId);
        }

        return (
            <div className="cart-entry" data-id={this.props.id}>
                <div className="cart-entry__content">
                    <div className="cart-entry__image">
                        <img src={this.props.image} alt=""/>
                    </div>
                    <div className="cart-entry__details">
                        <h3>{this.props.name}</h3>
                        <p>### Attribute des Produkts ###</p>
                    </div>
                </div>
                <div className="cart-entry__controls">
                    <div className="entry-quantity">
                        <label htmlFor="entry-quantity">Anzahl:</label>
                        <input
                            type="number"
                            className="entry-quantity"
                            id={this.props.id}
                            min="1"
                            name="entry-quantity"
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                            />
                    </div>
                    <div className="entry-price">
                        <span>CHF {this.props.totalPrice}</span>
                    </div>
                    <div className="entry-remove">
                        <button 
                            className="remove" 
                            id={this.props.id}
                            onClick={ onDeleteHandler.bind(this) }
                            >Remove</button>
                    </div>
                </div>
            </div>
        )

    }
}   