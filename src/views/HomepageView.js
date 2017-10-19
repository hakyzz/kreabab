import React, { Component } from 'react';

import Logo from '../components/Logo/Logo';
import ShoppingBag from '../components/ShoppingBag/ShoppingBag';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';
import ProductTeaserList from '../components/ProductTeaserList/ProductTeaserList';

class HomepageView extends Component {
    render() {
        return (
            <div className="site-content">
                <Logo/>
                <ShoppingBag/>
                <div className="pane gray">
                    <div className="layout-center-xl">
                        <HomepageHeader/>
                    </div>
                </div>
                <div className="pane">
                    <div className="layout-center-xl">
                        <ProductTeaserList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageView;
