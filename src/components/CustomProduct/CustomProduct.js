import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CustomProduct.css';
import { categories } from '../../defs/kreabab';
import MeatTopping from '../../assets/img/toppings/fleisch.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProductToppings from '../ProductToppings/ProductToppings';

class CustomProduct extends Component {

    render() {
        const bread = categories[0].items.find((item) => item.title === this.props.product.bread) || {};
        const toppings = categories[1].items.filter(topping => this.props.product.toppings.includes(topping.title));
        const sauces = categories[2].items.filter(sauce => this.props.product.sauces.includes(sauce.title));
        const meatObject = {
            topping: MeatTopping,
            name: "meatType",
            title: "Fleisch",
            text: "Lorem ipsum"
        };

        return (
            <div className="custom-product">

                <ReactCSSTransitionGroup
                    transitionName={{
                        enter: 'product-toppings__overlay--enter',
                        leave: 'product-toppings__overlay--leave',
                    }}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={200}>
                    {[...toppings, ...sauces].map(item =>
                        <ProductToppings key={item.title} item={item} />
                    )}
                </ReactCSSTransitionGroup>

                <ProductToppings item={meatObject} />

                <img src={bread.topping} className="custom-product__image" alt={bread.title}/>
                <h2>{bread.title}</h2>
            </div>
        );
    }
}

CustomProduct.propTypes = {
    product: PropTypes.object.isRequired,
};

export default CustomProduct;