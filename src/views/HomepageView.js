import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import ShoppingBag from '../components/ShoppingBag/ShoppingBag';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';

import ProductsContainer from '../containers/ProductsContainer';

class HomepageView extends Component {
    
    render() {
        return (
            <div className="site-content">
                <div className="pane gray">
                    <div className="layout-center-xl">
                        <Logo/>
                        <ShoppingBag/>
                    </div>
                    <div className="layout-center-xl">
                        <HomepageHeader/>
                    </div>
                </div>
                <div className="pane">
                    <div className="layout-center-xl">
                        <ProductsContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageView;
