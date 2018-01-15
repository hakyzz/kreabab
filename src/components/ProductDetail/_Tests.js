import React, { Component } from 'react';
import './ProductDetail.css';

import FormatPrice from '../FormatPrice/FormatPrice';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';



export default class ProductDetail extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.product,
            selectedBred: this.props.product.bred[0]
        }
        this.updateSelectedBred = this.updateSelectedBred.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    // Checkbox
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }
    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }

        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    }
    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )
    createCheckboxes = () => (
        this.props.product.sauce.map(this.createCheckbox)
    )


    // Brot Auswahl Radio Button
    updateSelectedBred = (event) => {
        this.setState({
            selectedBred: event.target.value
        })

        console.log(this.props.product)
        console.log('test', event.target.value)
        console.log('You have selected:', this.state.selectedBred)
    }


    handleSubmit = () => {

        const id = this.props.product.id;
        const name = this.props.product.name;
        const image = this.props.product.image;
        const price = this.props.product.price;
        const totalPrice = this.props.product.totalPrice;
        const quantity = this.props.product.quantity;
        const brot = this.state.selectedBred;
        
        const item = {
            id,
            name,
            image,
            price,
            totalPrice,
            quantity,
            brot
        };
    
        this.props.handleAddToCartClick(item);
    };


    render () {
        return (
            <div className="product-detail">
                <div className="product-detail__content">
                    <h1>{this.props.product.name}</h1>
                    <p className="product-detail__price"><FormatPrice price={this.props.product.price}/></p>
                    <p className="product-detail__description">{this.props.product.description}</p>
                    <div>
                        <p>### TODO: Produkt Eigenschaften ###</p>
                        <br/>

                        <h3>Sauce</h3>
                        {this.createCheckboxes()}
                        <br/>

                        <h3>Brot</h3>
                        <form>
                        {
                            this.props.product.bred.map((bred, index) => {
                                return (
                                    <div key={index} className="radio">
                                        <label>
                                            <input 
                                                type="radio" 
                                                value={bred} 
                                                checked={this.state.selectedBred === bred}
                                                onChange={this.updateSelectedBred} />
                                            {bred}
                                        </label>
                                    </div>
                                )
                            })
                        }
                        </form>
                        <br/>
                        {this.state.selectedBred}
                    </div>
                    <div className="product-detail__button">
                        <Button 
                            styleName="secondary" 
                            onClick={this.handleSubmit}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
                <div className="product-detail__image">
                    <img
                        className="product-image"
                        src={this.props.product.image}
                        alt={this.props.product.name}
                    />
                </div>
            </div>

        )
    }

}