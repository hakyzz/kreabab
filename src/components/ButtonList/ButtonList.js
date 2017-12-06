import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {

    render() {
        return (
            <div className="button-list">
                {this.props.children}
            </div>
        );
    }
}

export default ButtonList;