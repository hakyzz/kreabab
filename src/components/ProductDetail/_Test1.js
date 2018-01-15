import React, { Component } from 'react';
// import * as R from 'ramda'
import './ProductDetailWithOptions.css';

import FormatPrice from '../FormatPrice/FormatPrice';
// import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';



export default class ProductDetailWithOptions extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.product,
            selectedBred: this.props.product.options.bred[0],
            selectedSauce: this.props.product.options.sauce,
            isChecked: true
        }
        this.updateSelectedBred = this.updateSelectedBred.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    // Brot Auswahl Event
    updateSelectedBred = (event) => {
        this.setState({
            selectedBred: event.target.value
        })
        // console.log(this.props.product)
        // console.log('test', event.target.value)
        // console.log('You have selected:', this.state.selectedBred)
    }

    // Brot Radio Buttons
    renderRadioButtons() {
        return this.props.product.options.bred.map((bred, index) => (
            <div key={index} className="radio">
                <label>
                    <input 
                        type="radio" 
                        value={bred} 
                        checked={this.state.selectedBred === bred}
                        onChange={this.updateSelectedBred} 
                    />
                    {bred}
                </label>
            </div>
        ))
    }

    updateSelectedSauce = (event) => {

        // let sauces = this.state.selectedSauce;
        // let value = event.target.value;
        

        console.log(event.target.checked);
    }

    // Checkbox
    renderCheckboxes() {
        return this.props.product.options.sauce.map((sauce, index) => (
            <div key={index} className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={sauce}
                        checked={this.state.selectedSauce[index] === sauce}
                        onChange={this.updateSelectedSauce}
                    />
                    {sauce}
                    {index}
                </label>
            </div>
        ))

    }

    toggleCheckbox = label => {

        let sauces = this.state.selectedSauce;

        if (this.selectedCheckboxes.has(label)) {

            this.selectedCheckboxes.delete(label);

            let index = sauces.indexOf(label)  
            sauces.splice(index, 1);
            this.setState({ selectedSauce: sauces })
            
            console.log('delete', label);

        } else {

            this.selectedCheckboxes.add(label);
            
            sauces.push(label);
            this.setState({ selectedSauce: sauces })

            console.log('add', label);

        }
        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    }

    
    handleSubmit = () => {

        const id = this.props.product.id;
        const name = this.props.product.name;
        const image = this.props.product.image;
        const price = this.props.product.price;
        const totalPrice = this.props.product.totalPrice;
        const quantity = this.props.product.quantity;
        const brot = this.state.selectedBred;
        const sauce = this.state.selectedSauce;
        
        const item = {
            id,
            name,
            image,
            price,
            totalPrice,
            quantity,
            options: {
                brot,
                sauce
            }
        };
        
        console.log('prepared item for cart', item);
        // this.props.handleAddToCartClick(item);
    };
    

    render () {
        return ( 
            <div className="product-detail">
                <div className="product-detail__content">
                    <h1>{this.props.product.name}</h1>
                    <p className="product-detail__price"><FormatPrice price={this.props.product.price}/></p>
                    <p className="product-detail__description">{this.props.product.description}</p>

                    <div className="product-detail__options">
                        <h3>Bitte wählen Sie:</h3>
                        
                        <form>
                            <div>
                                <h4>Sauce</h4>
                                {this.renderCheckboxes()}
                            </div>
                        </form>
                        Test: {this.state.selectedSauce}

                        
                        <form>
                            <div>
                                <h4>Brot</h4>
                                {this.renderRadioButtons()}
                            </div>
                        </form>
                        Test {this.state.selectedBred}
                    
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