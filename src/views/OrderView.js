import React, { Component } from 'react';
import BackNavigation from '../components/BackNavigation/BackNavigation';
import OrderViewSummery from '../components/OrderViewSummery/OrderViewSummery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class OrderView extends Component {

    componentDidMount = () => {
        this.props.completeOrder();
    };

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="pop"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div className="site-content detail">
                    <div className="pane pane--first">
                        <div className="layout-center-xl">
                            <BackNavigation/>
                        </div>
                    </div>
                    <div className="pane">
                        <div className="layout-center-l">
                            <OrderViewSummery/>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default OrderView;
