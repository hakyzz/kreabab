import React, { Component } from 'react';
import ProductOverview from '../components/ProductOverview/ProductOverview';
import ProductCustomizer from '../containers/ProductCustomizer';
import { categories} from '../defs/kreabab'

class CustomizerView extends Component {

    state = {
        bread: '',
        toppings: [],
        sauces: []
    };

    handleIngredientItemClick = (categorieId, title) => {
        const cat = categories.find(cat => cat.id === categorieId);

        if (cat.listType === "radioList") {
            this.setState({
                ...this.state,
                [categorieId]: title
            });
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
                });
            } else {
                this.setState({
                    ...this.state,
                    [categorieId]: [...this.state[categorieId], title]
                });
            }
        }
    }

    render() {
        const { filter } = this.props.match.params;

        return (
            <div className="customizer">
                <ProductOverview product={this.state}/>
                <ProductCustomizer selection={this.state} handleIngredientItemClick={this.handleIngredientItemClick} filter={filter} storeChanged={this.storeChanged} history={this.props.history} />
            </div>
        );
    }
}

export default CustomizerView;
