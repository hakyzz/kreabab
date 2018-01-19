import React, { Component } from 'react';
import './OrderViewSummery.css';

import OrderInformation from '../../components/OrderInformation/OrderInformation';

class OrderViewSummery extends Component {

    render() {
        return (
            <div className="order-view">
                <div className="order-view__header">
                    <h1>Bestätigung</h1>
                    <p className="order-view__text">Vielen Dank. Ihre Bestellung ist bei uns erfolgreich eingetroffen.</p>
                </div>
                <div className="order-view__information">
                    <OrderInformation/>
                </div>
            </div>
        );
    }
}

export default OrderViewSummery;