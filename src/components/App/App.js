import React, { Component } from 'react';
import './App.css';

import HomepageView from '../../views/HomepageView';
import ProductDetailView from '../../views/ProductDetailView';
import CartView from '../../views/CartView';
import CustomizerView from '../../views/CustomizerView';
import OrderViewContainer from '../../containers/OrderViewContainer';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomepageView}/>
                    <Route path='/categories/:id' component={HomepageView}/>
                    <Route path="/products/:id" component={ProductDetailView}/>
                    <Route path="/cart" component={CartView}/>
                    <Route path="/customizer/:filter" component={CustomizerView} />
                    <Route path="/order" component={OrderViewContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;