import React, { Component } from 'react';
import * as R from 'ramda';
import './ProductDetail.css';
import { categories } from '../../defs/kreabab';
import Button from '../Button/Button';
import FormatPrice from '../FormatPrice/FormatPrice';

export default class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: this.props.product,
            selectedBread: this.props.product.bread
        }
        this.updateSelectedBread = this.updateSelectedBread.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateSelectedBread = (event) => {
        this.setState({
            selectedBread: event.target.value
        })
    }

    renderRadioButtons() {
        const objBreads = categories[0].items;
        if (!R.isEmpty(this.state.selectedBread)) {
            return (
                [...objBreads].map(item =>
                    <div key={item.title} className="product-detail__options--radio">
                        <input
                            type="radio" 
                            id={item.title}
                            value={item.title}
                            checked={this.state.selectedBread === item.title}
                            onChange={this.updateSelectedBread} 
                        />
                        <label htmlFor={item.title}>
                            {item.title}
                        </label>
                    </div>
                )
            )
        }
    }

    handleSubmit = () => {
        const id = this.props.product.id;
        const name = this.props.product.name;
        const image = this.props.product.image;
        const price = this.props.product.price;
        const totalPrice = this.props.product.totalPrice;
        const quantity = this.props.product.quantity;
        const toppings = this.props.product.toppings;
        const sauces = this.props.product.sauce;
        const bread = this.state.selectedBread;
        const item = {
            id,
            name,
            image,
            price,
            totalPrice,
            quantity,
            toppings,
            sauces,
            bread
        };
        console.log('item added', item);
        this.props.handleAddToCartClick(item);
    }

    render () {
        const product = this.state.product;
        return (
            <div className="product-detail">
                <div className="product-detail__content">
                    <h1>{product.name}</h1>
                    <p className="product-detail__price"><FormatPrice price={product.price}/></p>
                    <p className="product-detail__description">{product.description}</p>
                    <div className="product-detail__options">
                        {/*
                        <p>{product.bread !== "" ? `Brot: ${product.bread}` : ''}</p>
                        <p>{product.toppings.length !== 0 ? `Toppings: ${product.toppings.join(', ')}` : ''}</p>
                        <p>{product.sauce.length !== 0 ? `Sauces: ${product.sauce.join(', ')}` : ''}</p>
                        */}
                        {this.renderRadioButtons()}
                    </div>
                    <div className="product-detail__button">
                        <Button 
                            styleName="secondary"
                            onClick={this.handleSubmit}>
                            Add to Cart
                        </Button>
                    </div>
                </div>
                <div>
                    <img
                        className="product-detail__image"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
            </div>
        )
    }
}