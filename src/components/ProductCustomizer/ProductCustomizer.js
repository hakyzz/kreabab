import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCustomizer.css';
import CustomizerNavigation from '../CustomizerNavigation/CustomizerNavigation';
import IngredientsList from "../IngredientsList/IngredientsList";
import IngredientsListEntry from "../IngredientsListEntry/IngredientsListEntry";
import ProductCart from '../ProductCart/ProductCart';
import { categories, CATEGORY_IDS} from '../../defs/kreabab'

class ProductCustomizer extends Component {

    state = {
        bread: '',
        toppings: [],
        sauces: []
    };


    componentDidMount() {
        this.props.fetchProducts();
        this.setDefaultSelection();
    }

    componentDidUpdate() {
       this.setDefaultSelection();
    }

    setDefaultSelection () {
        const { filter } = this.props;
        const activeCategory = categories.find(cat => cat.id === filter);
        const isNothingSelected = activeCategory.id === CATEGORY_IDS.BREAD && this.state.bread === '';
        if (isNothingSelected) {
            this.handleIngredientItemClick(CATEGORY_IDS.BREAD, categories.find(cat => cat.id === CATEGORY_IDS.BREAD).items[0].title);
        }
    }



    calculatePrice () {
        if (this.state.bread === '') {
            return 0.00
        }
        const cat = categories.find(cat => cat.id === CATEGORY_IDS.BREAD);
        const item = cat.items.find(item => item.title === this.state.bread);
        return item.price
    }


    handleIngredientItemClick = (categorieId, title) => {
        const cat = categories.find(cat => cat.id === categorieId);

        if (cat.listType === "radioList") {
            this.setState({
                ...this.state,
                [categorieId]: title
            })
        } else {
            const alreadyInCart = this.state[categorieId].includes(title);
            if (alreadyInCart) {
                const index = this.state[categorieId].indexOf(title);
                const newState = [
                    ...this.state[categorieId].slice(0, index),
                    ...this.state[categorieId].slice(index + 1)
                ];
                this.setState({
                    ...this.state,
                    [categorieId]: newState
                })
            } else {
                this.setState({
                    ...this.state,
                    [categorieId]: [...this.state[categorieId], title]
                })
            }
        }
    };

    handleAddToCart = () => {
        const product = { ...this.props.product, id: Math.floor(Math.random() * (1000000 - 100) + 100), price: this.calculatePrice(), bread: this.state.bread, toppings: this.state.toppings, sauces: this.state.sauces };
        this.props.addToCart(product);
        this.props.history.push('/cart')
    };

    render() {
        const { filter } = this.props;

        const activeCategory = categories.find(cat => cat.id === filter);

        return (
            <div className={"product-customizer " }>
                <CustomizerNavigation filter={filter} />
                <IngredientsList type={activeCategory.listType} title={activeCategory.title}>
                    {activeCategory.items.map(item => {
                        return <IngredientsListEntry selected={!!this.state[activeCategory.id].includes(item.title)} key={item.title} category={activeCategory.id} handleClick={this.handleIngredientItemClick} id={item.id} image={item.image} name={item.name} title={item.title} text={item.text} price={item.price}>{item.title}</IngredientsListEntry>
                    })}
                </IngredientsList>
                <ProductCart addToCart={this.handleAddToCart} history={this.props.history} activeCategoryId={activeCategory.id} price={this.calculatePrice()} />
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
};

export default ProductCustomizer;