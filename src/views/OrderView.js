import React, { Component } from 'react';

import BackNavigation from '../components/BackNavigation/BackNavigation';
import OrderViewSummery from '../components/OrderViewSummery/OrderViewSummery';

class OrderView extends Component {
    render() {
        return (
            <div className="site-content detail">
                <BackNavigation/>
                <div className="pane">
                    <div className="layout-center-l">
                        <OrderViewSummery/>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderView;
