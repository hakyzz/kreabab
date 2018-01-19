import React, { Component } from 'react';
import './HomepageHeader.css';

import Button from '../Button/Button';

class HomepageHeader extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__content">
                    <h1 className="header__title">Willkommen bei Kreabab</h1>
                    <p className="header__text">Unser digitaler Assistent nimmt gerne deine Bestellung auf.<br/>
                        Was möchten Sie bestellen ?</p>
                </div>
                <div className="header__cta">
                    <Button linkName="/customizer/bread" styleName="primary">Kebab Konfigurieren</Button>
                </div>
            </header>
        );
    }
}

export default HomepageHeader;