import React, {Component} from 'react';
import './CustomizerNavigation.css';

class CustomizerNavigation extends Component {

    render() {
        return (
            <div className="customizer-navigation">
                <ul className="customizer-navigation__list">
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="/customizer/:bread">Brot</a>
                    </li>
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="/customizer/:ingredients">Zutaten</a>
                    </li>
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="/customizer/:sauce">Sauce</a>
                    </li>
                    <li className="customizer-navigation__item">
                        <a className="customizer-navigation__item-link" href="/customizer/:extras">Extras</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CustomizerNavigation;