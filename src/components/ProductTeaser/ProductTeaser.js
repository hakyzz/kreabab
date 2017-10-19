import React, { Component } from 'react';
import './ProductTeaser.css';
import { 
    Link 
} from 'react-router-dom';

class ProductTeaser extends Component {

    render() {
        return (
            <div className="product-teaser">
                <div className="product-teaser__image"><img src="http://via.placeholder.com/220x200" alt=""/></div>
                <div className="product-teaser__content">
                    <h3>Dönerteller mit Salat Lorem ipsum dolor sit amet</h3>
                    <p className="product-teaser__price">ab CHF 9.90</p>
                    <p className="product-teaser__description">Zutaten und eine Sauce nach Wahl Lorem ipsum und eine Sauce nach Wahl</p>
                    <Link className="btn" role="button" to="/customizer">Hinzufügen</Link>
                </div>
            </div>        
        );
    }
}

export default ProductTeaser;