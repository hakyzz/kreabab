import React, { Component } from 'react';
import './App.css';

import HomepageView from '../views/HomepageView';
import CartView from '../views/CartView';
import CustomizerView from '../views/CustomizerView';
import OrderView from '../views/OrderView';

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
                    <Route path="/cart" component={CartView}/>
                    <Route path="/customizer" component={CustomizerView}/>
                    <Route path="/order" component={OrderView}/>
                    
                    {/*<ul>*/}
                        {/*<li><Link to="/">Home</Link></li>*/}
                        {/*<li><Link to="/cart">Cart</Link></li>*/}
                        {/*<li><Link to="/customizer">Customizer</Link></li>*/}
                        {/*<li><Link to="/order">Order</Link></li>*/}
                    {/*</ul>*/}
                
                </div>
            </Router>
        );
    }
}

export default App;