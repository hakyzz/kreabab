import React, { Component } from 'react';
import './IngredientsList.css';

class IngredientsList extends Component {

    render() {
        return (
            <div className="ingredients-list">
                {this.props.children}
            </div>
        );
    }
}

export default IngredientsList;