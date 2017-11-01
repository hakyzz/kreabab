import React, { Component } from 'react';
import ProductOverview from '../components/ProductOverview/ProductOverview';
import ProductCustomizer from '../components/ProductCustomizer/ProductCustomizer';

class CustomizerView extends Component {
    render() {
        console.log(this.props.location.pathname);

        return (
            <div className="customizer">
                <ProductOverview />
                <ProductCustomizer view={this.props.location.query} />
            </div>
        );
    }
}

export default CustomizerView;
