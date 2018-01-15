import React, { Component } from 'react';
import './IngredientsListEntry.css';

import FormatPrice from '../FormatPrice/FormatPrice';
class IngredientsListEntry extends Component {

    handleClick = () => {
        this.props.handleClick(this.props.categorie, this.props.id)
    };

    render() {
        let listType;
        let inputClass;

        if(this.props.type === "radioList") {
            listType = "radio";
            inputClass = "ingredients-list-entry__check--radio";
        } else if (this.props.type === "checkboxList"){
            listType = "checkbox";
            inputClass = "ingredients-list-entry__check--checkbox";
        }

        if(this.props.type === "symbolList") {
            return (
                <div className="ingredients-list-entry ingredients-list-entry--symbols">
                    <label onClick={this.handleClick} htmlFor={this.props.title} className="ingredients-list-entry__label">
                        <img src={this.props.image} className="ingredients-list-entry__image" alt={this.props.children}/>
                    </label>
                    <input checked={this.props.selected} name={this.props.name} id={this.props.title} className="ingredients-list-entry__input" type="checkbox" />
                    <div className="ingredients-list-entry__check ingredients-list-entry__check--symbol"/>
                </div>
            );
        } else {
            return (
                <div  className="ingredients-list-entry">
                    <label onClick={this.handleClick} htmlFor={this.props.title} className="ingredients-list-entry__label">
                        <img src={this.props.image} className="ingredients-list-entry__image" alt=""/>
                        <span>
                            <span className="ingredients-list-entry__title">{this.props.children}</span>
                            <span className="ingredients-list-entry__text">{this.props.text}</span>
                            {this.props.price && <span className="ingredients-list-entry__price"><FormatPrice price={this.props.price}/></span>}
                        </span>
                    </label>
                    <input checked={this.props.selected} name={this.props.name} id={this.props.title} className="ingredients-list-entry__input" type={listType} />
                    <div className={`ingredients-list-entry__check ${ inputClass }`}/>
                </div>
            );
        }
    }
}

export default IngredientsListEntry;