import React, { Component } from 'react';
import './ProductCustomizer.css';
import CustomizerNavigation from '../CustomizerNavigation/CustomizerNavigation';
import IngredientsList from "../IngredientsList/IngredientsList";
import IngredientsListEntry from "../IngredientsListEntry/IngredientsListEntry";

class ProductCustomizer extends Component {

    render() {
        return (
            <div className="product-customizer">
                <CustomizerNavigation />
                <IngredientsList>
                    <IngredientsListEntry>Fladenbrot</IngredientsListEntry>
                    <IngredientsListEntry>Taschenbrot</IngredientsListEntry>
                </IngredientsList>
            </div>
        );
    }
}

export default ProductCustomizer;