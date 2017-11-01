import React, { Component } from 'react';
import './IngredientsListEntry.css';
class IngredientsListEntry extends Component {

    render() {
        let listType;

        if(this.props.type === "radioList") {
            listType = "radio";
        } else if (this.props.type === "checkboxList"){
            listType = "checkbox";
        }

        if(this.props.type === "symbolList") {
            return (
                <div className="ingredients-list-entry ingredients-list-entry--symbols">
                    <label htmlFor={this.props.title} className="ingredients-list-entry__label">
                        <img src={this.props.image} className="ingredients-list-entry__image" alt={this.props.children}/>
                    </label>
                    <input name={this.props.name} id={this.props.title} className="ingredients-list-entry__input" type="checkbox" />
                </div>
            );
        } else {
            return (
                <div className="ingredients-list-entry">
                    <label htmlFor={this.props.title} className="ingredients-list-entry__label">
                        <img src={this.props.image} className="ingredients-list-entry__image" alt=""/>
                        <span>
                            <span className="ingredients-list-entry__title">{this.props.children}</span>
                            <span className="ingredients-list-entry__text">{this.props.text}</span>
                        </span>
                    </label>
                    <input name={this.props.name} id={this.props.title} className="ingredients-list-entry__input" type={listType} />
                </div>
            );
        }
    }
}

export default IngredientsListEntry;