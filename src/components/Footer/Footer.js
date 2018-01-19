import React, { Component } from 'react';
import './Footer.css';
import {
    Link
} from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <p className="footer__text">&copy;{(new Date().getFullYear())} - Kreabab Döner Shop | <Link className="footer__link" to="/">www.kreabab.shop</Link></p>
            </footer>
        );
    }
}

export default Footer;