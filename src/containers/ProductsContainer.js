import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProducts, addToCart } from '../actions';

import ProductTeaserList from '../components/ProductTeaserList/ProductTeaserList';


class ProductsContainer extends Component {
    
    componentDidMount() {
        this.props.getProducts();
    }

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


function mapStateToProps(state) {
    return {
        products: state.productList.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProducts: getProducts,
        addToCart: addToCart,
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);