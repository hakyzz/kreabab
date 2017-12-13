import React, { Component } from 'react';
import './OrderInformation.css';

class OrderInformation extends Component {

    render() {
        return (
            <div className="order-information">
                <div className="order-information__nr">
                    <h4>Bestell Nr.</h4>
                    <p><span className="order-nr">72</span></p>
                </div>
                <div className="order-information__time">
                    <h4>Abholbereit um:</h4>
                    <p><time className="order-time">18:15</time></p>
                </div>
            </div>
        );
    }
}

export default OrderInformation;