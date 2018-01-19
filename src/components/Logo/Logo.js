import React, { Component } from 'react';
import './Logo.css';
import AppLogo from './logo.svg';
import {
    Link
} from 'react-router-dom';

class Logo extends Component {

    render() {
        return (
            <div className="logo">
                <Link className="logo__link" to="/">
                    <img className="logo__image" src={AppLogo} alt="logo"/>
                </Link>
            </div>
        );
    }
}

export default Logo;