import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CustomizerNavigation.css';
import { Link } from "react-router-dom";
import { menu } from "../../defs/nav"

class CustomizerNavigation extends Component {

    render() {
        const { filter } = this.props;

        return (
            <div className="customizer-navigation">
                <ul className="customizer-navigation__list">
                    {menu.map(menuItem => {
                        return (
                            <li key={menuItem.id} className="customizer-navigation__item">
                                <Link className={"customizer-navigation__item-link" + (filter === menuItem.id ? ' active' : '')} to={menuItem.href}>{menuItem.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

CustomizerNavigation.propTypes = {
    filter: PropTypes.string,
};

export default CustomizerNavigation;