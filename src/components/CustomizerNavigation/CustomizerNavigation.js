import React, {Component} from 'react';
import './CustomizerNavigation.css';

class CustomizerNavigation extends Component {

    render() {
        return (
            <div className="customizer-navigation">
                <ul className="customizer-navigation__list">
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="">Brot</a>
                    </li>
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="">Zutaten</a>
                    </li>
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="">Sauce</a>
                    </li>
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="">Extras</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CustomizerNavigation;