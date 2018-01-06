import React, { Component } from 'react';
import './Footer.css';
import {
    Link
} from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <footer className="site-footer">
                <p>©{(new Date().getFullYear())} - Kreabab Döner Shop | <Link to="/">www.kreabab.shop</Link></p>
            </footer>
        );
    }
}

export default Footer;