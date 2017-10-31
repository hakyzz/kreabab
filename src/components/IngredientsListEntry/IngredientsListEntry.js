import React, { Component } from 'react';
import './IngredientsListEntry.css';

class IngredientsListEntry extends Component {

    render() {
        return (
            <div className="ingredients-list-entry">
                {this.props.children}
            </div>
        );
    }
}

export default IngredientsListEntry;