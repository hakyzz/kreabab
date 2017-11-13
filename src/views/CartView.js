import React, { Component } from 'react';
import BackNavigation from '../components/BackNavigation/BackNavigation';
import ShoppingBagContainer from '../containers/ShoppingBagContainer';
import CartContainer from '../containers/CartContainer';

class CartView extends Component {

    render() {
        return (
            <div className="site-content detail">
                <div className="pane pane--first">
                    <div className="layout-center-xl">
                        <BackNavigation/>
                        <ShoppingBagContainer/>
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
