import React, { Component } from 'react';
import BackNavigation from '../components/BackNavigation/BackNavigation';
import ShoppingBagContainer from '../containers/ShoppingBagContainer';
import CartContainer from '../containers/CartListContainer';
import Footer from '../components/Footer/Footer';

class CartView extends Component {

    render() {
        return (
            <div className="site-content detail">
                <div className="pane pane--first">
                    <div className="layout-center-xl">
                        <BackNavigation/>
                        <ShoppingBagContainer modifier="basket--cart-view"/>
                    </div>
                </div>
                <div className="pane">
                    <div className="layout-center-l">
                        <CartContainer/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CartView;
