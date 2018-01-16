import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { addToCart } from '../actionCreators';
import { getProducts } from '../selectors/product'

import ProductTeaserList from '../components/ProductTeaserList/ProductTeaserList';


class ProductsContainer extends Component {

    handleAddToCartClick = (product) => {
        this.props.addToCart(product);
    };

    render() {
        return (
            <ProductTeaserList
            products={this.props.products}
            handleAddToCartClick={this.handleAddToCartClick}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {        
        products: getProducts(state, ownProps)
    }
};

const mapDispatchToProps = {
    addToCart
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer));