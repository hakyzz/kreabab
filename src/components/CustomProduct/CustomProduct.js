import React, { Component } from 'react';
import './CustomProduct.css';
import { categories } from '../../defs/kreabab';
import ProductImage from '../../assets/img/toppings/fladenbrot.png';

class CustomProduct extends Component {

    render() {

        const bread = categories[0].items.find((item) => item.title === this.props.product.bread) || {};
        const toppings = categories[1].items;
        const sauces = categories[2].items;

        return (
            <div className="custom-product">

                {toppings.filter(topping => this.props.product.toppings.includes(topping.title)).map(topping=> {
                    return (<img key={topping.title} src={topping.topping} className="custom-product__image" alt={topping.title}/>)
                })}

                {sauces.filter(sauce => this.props.product.sauces.includes(sauce.title)).map(sauce=> {
                    return (<img key={sauce.title} src={sauce.topping} className="custom-product__image" alt={sauce.title}/>)
                })}


                <img src={bread.topping} className="custom-product__image" alt={bread.title}/>
                <h2>{bread.title}</h2>
            </div>
        );
    }
}

export default CustomProduct;