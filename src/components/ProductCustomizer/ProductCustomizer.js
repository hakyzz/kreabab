import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductCustomizer.css';
import CustomizerNavigation from '../CustomizerNavigation/CustomizerNavigation';
import IngredientsList from "../IngredientsList/IngredientsList";
import IngredientsListEntry from "../IngredientsListEntry/IngredientsListEntry";
import ProductCart from '../ProductCart/ProductCart';
import {categories, CATEGORY_IDS} from '../../defs/kreabab'

class ProductCustomizer extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.setDefaultSelection();
    }

    componentDidUpdate() {
        this.setDefaultSelection();
    }

    setDefaultSelection() {
        const isNothingSelected = this.props.selection.bread === '';
        if (isNothingSelected) {
            this.props.handleIngredientItemClick(CATEGORY_IDS.BREAD, categories.find(cat => cat.id === CATEGORY_IDS.BREAD).items[0].title);
        }
    }

    calculatePrice() {
        if (this.props.selection.bread === '') {
            return 0.00
        }
        const cat = categories.find(cat => cat.id === CATEGORY_IDS.BREAD);
        const item = cat.items.find(item => item.title === this.props.selection.bread);
        return item.price
    }

    handleAddToCart = () => {
        const product = {
            ...this.props.product,
            id: Math.floor(Math.random() * (1000000 - 100) + 100),
            price: this.calculatePrice(),
            bread: this.props.selection.bread,
            toppings: this.props.selection.toppings,
            sauces: this.props.selection.sauces
        };
        this.props.addToCart(product);
        this.props.history.push('/cart')
    };

    render() {
        const {filter} = this.props;

        const activeCategory = categories.find(cat => cat.id === filter);

        return (
            <div className="product-customizer">
                <CustomizerNavigation filter={filter}/>
                <IngredientsList type={activeCategory.listType} title={activeCategory.title}>

                    {activeCategory.items.map(item => {
                        return <IngredientsListEntry
                            selected={!!this.props.selection[activeCategory.id].includes(item.title)} key={item.title}
                            category={activeCategory.id} handleClick={this.props.handleIngredientItemClick} id={item.id}
                            image={item.image} name={item.name} title={item.title} text={item.text}
                            price={item.price}>{item.title}</IngredientsListEntry>
                    })}
                </IngredientsList>
                <ProductCart addToCart={this.handleAddToCart} history={this.props.history}
                             activeCategoryId={activeCategory.id} price={this.calculatePrice()}/>
            </div>
        );
    }
}

IngredientsListEntry.propTypes = {
    fetchProducts: PropTypes.func,
    addToCart: PropTypes.func,
    product: PropTypes.object,
    history: PropTypes.object,
    filter: PropTypes.string,
    storeChanged: PropTypes.func
};

export default ProductCustomizer;