import React, { Component } from 'react';
import ProductOverview from '../components/ProductOverview/ProductOverview';
import ProductCustomizer from '../containers/ProductCustomizer';

class CustomizerView extends Component {

    render() {
        const { filter } = this.props.match.params;

        return (
            <div className="customizer">
                <ProductOverview />
                <ProductCustomizer filter={filter} history={this.props.history} />
            </div>
        );
    }
}

export default CustomizerView;
