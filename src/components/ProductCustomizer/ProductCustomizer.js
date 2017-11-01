import React, { Component } from 'react';
import './ProductCustomizer.css';
import CustomizerNavigation from '../CustomizerNavigation/CustomizerNavigation';
import IngredientsList from "../IngredientsList/IngredientsList";
import IngredientsListEntry from "../IngredientsListEntry/IngredientsListEntry";
import ProductImage from '../../assets/img/fladenbrot.png';

class ProductCustomizer extends Component {

    render() {
        let view = this.props.view;

        return (
            <div className={"product-customizer " + view}>
                <CustomizerNavigation />
                <IngredientsList type="radioList" title="Brot wählen">
                    <IngredientsListEntry image={ProductImage} name="breadType" title="fladenbrot" text="Lorem Ipsum dolor sit amet">Fladenbrot</IngredientsListEntry>
                    <IngredientsListEntry image={ProductImage} name="breadType" title="taschenbrot" text="Lorem Ipsum dolor sit amet">Taschenbrot</IngredientsListEntry>
                </IngredientsList>
            </div>
        );
    }
}

export default ProductCustomizer;