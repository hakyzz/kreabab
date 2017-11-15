import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import ShoppingBagContainer from '../containers/ShoppingBagContainer';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';
import ProductsContainer from '../containers/ProductsContainer';
import Footer from '../components/Footer/Footer';


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
                <Footer/>
            </div>
        );
    }
}

export default HomepageView;
