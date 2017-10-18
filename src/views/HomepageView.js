import React, { Component } from 'react';

import HomepageHeader from '../components/HomepageHeader/HomepageHeader';
import ProductTeaserList from '../components/ProductTeaserList/ProductTeaserList';

class HomepageView extends Component {
    render() {
        return (
            <div className="page">
                <HomepageHeader/>
                <ProductTeaserList/>
            </div>
        );
    }
}

export default HomepageView;
