import React, { Component } from 'react';
import './App.css';

import HomepageView from '../views/HomepageView';
import ProductDetailView from '../views/ProductDetailView';
import CartView from '../views/CartView';
import CustomizerView from '../views/CustomizerView';
import OrderViewContainer from './OrderViewContainer';

import {
    BrowserRouter as Router,
    Route
    //Link
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomepageView}/>
                    <Route path="/products/:id" component={ProductDetailView}/>
                    <Route path="/cart" component={CartView}/>
                    <Route path="/customizer" component={CustomizerView}/>
                    <Route path="/order" component={OrderViewContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;