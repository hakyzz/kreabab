import React, { Component } from 'react';
import './CustomProduct.css';
import { categories } from '../../defs/kreabab';
import FleischTopping from '../../assets/img/toppings/fleisch.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CustomProduct extends Component {

    render() {

        const bread = categories[0].items.find((item) => item.title === this.props.product.bread) || {};
        const toppings = categories[1].items.filter(topping => this.props.product.toppings.includes(topping.title));
        const sauces = categories[2].items.filter(sauce => this.props.product.sauces.includes(sauce.title));

        return (
            <div className="custom-product">

                <ReactCSSTransitionGroup
                    transitionName={{
                        enter: 'kreabab__topping--enter',
                        leave: 'kreabab__topping--leave',
                    }}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={200}>
                    {[...toppings, ...sauces].map(item =>
                        <div key={item.title} className={`product-topping ${item.name === 'sauceType' ? 'product-topping--sauce' : ''}  `}>
                            <div className={`kreabab__topping kreabab_topping--${item.title.toLowerCase()}`} style={{backgroundImage: `url(${item.topping})`}}/>
                        </div>
                    )}
                </ReactCSSTransitionGroup>

                <div key="fleisch" className="product-topping">
                    <div className={`kreabab__topping kreabab__topping--fleisch`} style={{backgroundImage: `url(${FleischTopping})`}}/>
                </div>

                <img src={bread.topping} className="custom-product__image" alt={bread.title}/>
                <h2>{bread.title}</h2>
            </div>
        );
    }
}

export default CustomProduct;