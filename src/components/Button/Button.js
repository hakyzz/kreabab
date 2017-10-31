import React, { Component } from 'react';
import './Button.css';
import {
    Link
} from 'react-router-dom';


class Button extends Component {

    render() {
        return (
            <Link to={this.props.linkName} className="btn cta-large secondary">{this.props.children}</Link>
        );
    }
}

export default Button;