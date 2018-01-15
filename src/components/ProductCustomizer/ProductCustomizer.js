import React, { Component } from 'react';
import './ProductCustomizer.css';
import CustomizerNavigation from '../CustomizerNavigation/CustomizerNavigation';
import IngredientsList from "../IngredientsList/IngredientsList";
import IngredientsListEntry from "../IngredientsListEntry/IngredientsListEntry";
import ProductImage from '../../assets/img/fladenbrot.png';
import ProductCart from '../ProductCart/ProductCart';

class ProductCustomizer extends Component {

    state = {
        bread: '',
        ingredients: [],
        sauces: []
    }

    categories = [
        {
            id: "bread",
            listType: "radioList",
            title: "Brot wählen",
            items: [
                {
                    id: 'fladenbrot',
                    image: ProductImage,
                    name: "breadType",
                    title: "Fladenbrot",
                    text: "Lorem ipsum",
                    price: 9

                },
                {
                    id: 'taschenbrot',
                    image: ProductImage,
                    name: "breadType",
                    title: "Taschenbrot",
                    text: "Lorem ipsum",
                    price: 8

                }
            ]

        },
        {
            id: "ingredients",
            listType: "symbolList",
            title: "Zutaten wählen",
            items: [
                {
                    id: 'zwiebeln',
                    image: ProductImage,
                    name: "ingredientType",
                    title: "Zwiebeln",
                    text: "Lorem ipsum",
                    price: 8

                },
                {
                    id: 'salat',
                    image: ProductImage,
                    name: "ingredientType",
                    title: "Salat",
                    text: "Lorem ipsum",
                    price: 8

                }
            ]

        },
        {
            id: "sauces",
            listType: "checkboxList",
            title: "Sauce wählen",
            items: [
                {
                    id: 'cocktail',
                    image: ProductImage,
                    name: "sauceType",
                    title: "Cocktail",
                    text: "Lorem ipsum",
                    price: 8

                }
            ]

        }
    ]

    componentDidMount() {
        this.props.fetchProducts();
    }

    calculatePrice () {
        if (this.state.bread === '') {
            return 0.00
        }
        const cat = this.categories.find(cat => cat.id === 'bread');
        const item = cat.items.find(item => item.id === this.state.bread)
        return item.price
    }


    handleIngredientItemClick = (categorieId, id) => {
        const cat = this.categories.find(cat => cat.id === categorieId)

        if (cat.listType === "radioList") {
            this.setState({
                ...this.state,
                [categorieId]: id
            })
        } else {
            const alreadyInCart = this.state[categorieId].includes(id)
            if (alreadyInCart) {
                const index = this.state[categorieId].indexOf(id);
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
                    [categorieId]: [...this.state[categorieId], id]
                })
            }
        }
    }

    render() {
        const { filter } = this.props;

        const activeCategory = this.categories.find(cat => cat.id === filter);

        return (
            <div className={"product-customizer " }>
                <CustomizerNavigation filter={filter} />
                <IngredientsList type={activeCategory.listType} title={activeCategory.title}>
                    {activeCategory.items.map(item => {
                        return <IngredientsListEntry selected={!!this.state[activeCategory.id].includes(item.id)} key={item.id} categorie={activeCategory.id} handleClick={this.handleIngredientItemClick} id={item.id} image={item.image} name={item.name} title={item.title} text={item.text} price={item.price}>{item.title}</IngredientsListEntry>
                    })}
                </IngredientsList>
                <ProductCart history={this.props.history} product={this.props.product} addToCart={this.props.addToCart} activeCategoryId={activeCategory.id} price={this.calculatePrice()} />
            </div>
        );
    }
}

export default ProductCustomizer;