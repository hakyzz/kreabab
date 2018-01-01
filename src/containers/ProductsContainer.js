import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { fetchProducts, addToCart } from '../actionCreators';

import { getProducts } from '../selectors/product'
import ProductTeaserList from '../components/ProductTeaserList/ProductTeaserList';


class ProductsContainer extends Component {
    
    componentDidMount() {
        // this.props.getProducts();
        this.props.fetchProducts();
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


const mapStateToProps = state => {
    return {
        products: getProducts(state)
    }
}

const mapDispatchToProps = {
    fetchProducts,
    addToCart
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);