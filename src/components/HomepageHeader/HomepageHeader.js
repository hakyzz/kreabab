import React, { Component } from 'react';
import './HomepageHeader.css';

import Logo from '../../components/Logo/Logo';
import ShoppingBag from '../../components/ShoppingBag/ShoppingBag';


class HomepageHeader extends Component {

    render() {
        return (
            <header className="intro-header">
                <Logo/>
                <ShoppingBag/>
                <div className="intro-header__content wrap">
                    <h1>Willkommen bei Kreabab</h1>
                    <p>Unser digitaler Assistent nimmt gerne deine Bestellung auf.<br/>
                        Was möchten Sie bestellen ?</p>
                </div>
            </header>
        );
    }
}

export default HomepageHeader;
