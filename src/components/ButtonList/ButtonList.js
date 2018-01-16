import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

ButtonList.propTypes = {
    children: PropTypes.array
};
export default ButtonList;