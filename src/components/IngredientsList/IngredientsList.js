import React, { Component } from 'react';
import './IngredientsList.css';

class IngredientsList extends Component {

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                type: this.props.type
            })
        );

        if(this.props.type === "symbolList") {
            return (
                <div className="ingredients-list">
                    <h2>{this.props.title}</h2>
                    <div className="ingredients-list__symbols">
                        {childrenWithProps}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ingredients-list">
                    <h2>{this.props.title}</h2>
                    {childrenWithProps}
                </div>
            );
        }
    }
}

export default IngredientsList;