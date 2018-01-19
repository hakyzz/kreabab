import React, { Component } from 'react';
import './OrderInformation.css';

class OrderInformation extends Component {

    render() {
        return (
            <div className="order-information">
                <div className="order-information__block">
                    <h4 className="order-information__title">Bestell Nr.</h4>
                    <p className="order-information__text">72</p>
                </div>
                <div className="order-information__block">
                    <h4 className="order-information__title">Abholbereit um:</h4>
                    <time className="order-information__text">18:15</time>
                </div>
            </div>
        );
    }
}

export default OrderInformation;