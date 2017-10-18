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
                <Link to="/">
                    <img src={AppLogo} className="App-logo" alt="logo"/>
                </Link>
            </div>
        );
    }
}

export default Logo;