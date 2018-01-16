import React, { Component } from 'react';
import './HomepageHeader.css';

import Button from '../Button/Button';

class HomepageHeader extends Component {

    render() {
        return (
            <header className="intro-header">
                <div className="intro-header__content">
                    <h1>Willkommen bei Kreabab</h1>
                    <p>Unser digitaler Assistent nimmt gerne deine Bestellung auf.<br/>
                        Was möchten Sie bestellen ?</p>
                </div>
                <div className="intro-header__cta">
                    <Button linkName="/customizer/bread" styleName="primary">Kebab Konfigurieren</Button>
                </div>
            </header>
        );
    }
}

export default HomepageHeader;