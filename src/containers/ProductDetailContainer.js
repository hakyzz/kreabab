import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actionCreators';
import { getProductById } from '../selectors/product'
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { withRouter } from 'react-router';

class ProductDetailContainer extends Component {

    handleAddToCartClick = (product) => {
        this.props.addToCart(product);
    };

    renderContent () {
        const {product} = this.props;
        return (
            <ProductDetail
            product={product}
            handleAddToCartClick={this.handleAddToCartClick}
            />
        )
    }

    render () {
        const {product} = this.props;
        return (
            <div>
                {product && this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        urlId: state.id,
        product: getProductById(state, ownProps.match.params.id)
    }
};

const mapDispatchToProps = {
    addToCart
};

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductDetailContainer));