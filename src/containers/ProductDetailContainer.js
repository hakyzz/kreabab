import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as R from 'ramda'

import { fetchProductById, addToCart } from '../actionCreators';
import { getProductById } from '../selectors/product'

import ProductDetail from '../components/ProductDetail/ProductDetail';
import ProductDetailWithOptions from '../components/ProductDetail/ProductDetailWithOptions';


class ProductDetailContainer extends Component {

    componentDidMount () {
        this.props.fetchProductById(this.props.id)
    }

    handleAddToCartClick = (product) => {
        this.props.addToCart(product);
    };

    renderContent () {
        const {product} = this.props

        // Check if there are options
        if (R.isEmpty(this.props.product.options)) {
            return (
                <ProductDetail
                    product={product}
                    handleAddToCartClick={this.handleAddToCartClick}
                />
            )
        } else {
            return(
                <ProductDetailWithOptions
                    product={product}
                    handleAddToCartClick={this.handleAddToCartClick}
                />
            )
        }
        
        
    }

    render () {
        const {product} = this.props
        // console.log('detailseite product', product);
        return (
            <div>
                {product && this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        urlId: state.id,
        product: getProductById(state, state.productPage.id)
    }
}

const mapDispatchToProps = {
    fetchProductById,
    addToCart
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductDetailContainer);