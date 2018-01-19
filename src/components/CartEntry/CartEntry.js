import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CartEntry.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FormatPrice from '../FormatPrice/FormatPrice';


class CartEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            quantity: nextProps.quantity
        });
    }

    handleInputChange(event) {
        const quantity = event.value;
        const itemId = event.id;
        const name = event.name;

        this.setState({
            [name]: quantity
        });

        this.props.changeQuantityCart(itemId, quantity)
    }

    render() {
        function onDeleteHandler(event) {
            const itemId = event.target.getAttribute('id');
            this.props.deleteFromCart(itemId);
        }

        function createNumbersArray(number, id, name) {
            const numbersArray = [];
            for (let i = 1; i < number; i++) {
                numbersArray.push({value: i, label: i, id, name});
            }

            return numbersArray;
        }

        return (
            <div className="cart-entry" data-id={this.props.id}>
                <div className="cart-entry__content">
                    <div>
                        <img className="cart-entry__image" src={this.props.image} alt=""/>
                    </div>
                    <div className="cart-entry__details">
                        <h3 className="cart-entry__details-title">{this.props.name}</h3>
                        <p className="cart-entry__details-text">{this.props.bread !== "" ? `Brot: ${this.props.bread}` : ''}</p>
                        <p className="cart-entry__details-text">{this.props.toppings.length !== 0 ? `Toppings: ${this.props.toppings.join(', ')}` : ''}</p>
                        <p className="cart-entry__details-text">{this.props.sauces.length !== 0 ? `Sauces: ${this.props.sauces.join(', ')}` : ''}</p>
                    </div>
                </div>
                <div className="cart-entry__controls">
                    <div className="cart-entry__quantity">
                        <label htmlFor="entry-quantity">Anzahl:</label>
                        <Select
                            clearable={false}
                            searchable={false}
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                            options={createNumbersArray(999, this.props.id, 'entry-quantity')}
                        />
                    </div>
                    <div className="cart-entry__price">
                        <span><FormatPrice price={this.props.totalPrice}/></span>
                    </div>
                    <div className="cart-entry__remove">
                        <button
                            className="cart-entry__remove-button"
                            id={this.props.id}
                            onClick={onDeleteHandler.bind(this)}
                        >Remove
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

CartEntry.propTypes = {
    quantity: PropTypes.number,
    changeQuantityCart: PropTypes.func,
    deleteFromCart: PropTypes.func,
    image: PropTypes.string,
    name: PropTypes.string,
    bread: PropTypes.string,
    toppings: PropTypes.array,
    sauces: PropTypes.array,
    id: PropTypes.any,
    totalPrice: PropTypes.any
};

export default CartEntry;