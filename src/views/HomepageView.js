import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';
import ShoppingBagContainer from '../containers/ShoppingBagContainer';
import ProductsContainer from '../containers/ProductsContainer';


class HomepageView extends Component {
    
    render() {
        return (
            <div className="site-content">
                <div className="pane gray">
                    <div className="layout-center-xl">
                        <Logo/>
                        <ShoppingBagContainer/>
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
