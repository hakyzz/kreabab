import React, { Component } from 'react';
import './Button.css';
import {
    Link
} from 'react-router-dom';


class Button extends Component {

    render() {
        const linkName = this.props.linkName;

        return (
            <div>
                {linkName ? (
                    <Link to={this.props.linkName} className={`btn cta-large ${ this.props.styleName }`}>{this.props.children}</Link>
                ) : (
                    <button onClick={this.props.onClick} className={`btn cta-large ${ this.props.styleName }`}>{this.props.children}</button>
                )}
            </div>

        );
    }
}

export default Button;