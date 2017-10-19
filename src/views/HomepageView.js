import React, { Component } from 'react';

import Logo from '../components/Logo/Logo';
import ShoppingBag from '../components/ShoppingBag/ShoppingBag';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';
import ProductTeaserList from '../components/ProductTeaserList/ProductTeaserList';

class HomepageView extends Component {
    render() {
        return (
            <div className="page">
                <Logo/>
                <ShoppingBag/>
                <HomepageHeader/>
                <ProductTeaserList/>
            </div>
        );
    }
}

export default HomepageView;
