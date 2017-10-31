import React, { Component } from 'react';
import ProductOverview from '../components/ProductOverview/ProductOverview';
import ProductCustomizer from '../components/ProductCustomizer/ProductCustomizer';

class CustomizerView extends Component {
    render() {
        return (
            <div className="customizer">
                <ProductOverview />
                <ProductCustomizer />
            </div>
        );
    }
}

export default CustomizerView;
