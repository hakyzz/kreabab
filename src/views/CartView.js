import React, { Component } from 'react';
import BackNavigation from '../components/BackNavigation/BackNavigation';
import ShoppingBag from '../components/ShoppingBag/ShoppingBag';

import CartContainer from '../containers/CartContainer';

class CartView extends Component {

    render() {
        return (
            <div className="site-content detail">
                <div className="pane pane--first">
                    <div className="layout-center-xl">
                        <BackNavigation/>
                        <ShoppingBag/>
                    </div>
                </div>
                <div className="pane">
                    <div className="layout-center-l">
                        <CartContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartView;
