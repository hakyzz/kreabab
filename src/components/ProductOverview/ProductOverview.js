import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductOverview.css';
import BackNavigation from '../../components/BackNavigation/BackNavigation';
import CustomProduct from '../../components/CustomProduct/CustomProduct';

class ProductOverview extends Component {

    render() {
        return (
            <div className="product-overview">
                <div className="product-overview__cancel">
                    <BackNavigation/>
                </div>
                <CustomProduct product={this.props.product}/>
            </div>
        );
    }
}

ProductOverview.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductOverview;