import React, { Component } from 'react';
import BackNavigation from '../components/BackNavigation/BackNavigation';
import ShoppingBagContainer from '../containers/ShoppingBagContainer';
import ProductDetailContainer from '../containers/ProductDetailContainer';
import Footer from '../components/Footer/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ProductDetailView extends Component {

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div className="site-content detail">
                    <div className="pane pane--first">
                        <div className="layout-center-xl">
                            <BackNavigation/>
                            <ShoppingBagContainer/>
                        </div>
                    </div>
                    <div className="pane">
                        <div className="layout-center-l">
                            <ProductDetailContainer id={this.props.match.params.id} />
                        </div>
                    </div>
                    <Footer/>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default ProductDetailView;