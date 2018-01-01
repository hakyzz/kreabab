import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getProductById } from '../selectors/product'
import { fetchProductById } from '../actionCreators';

import ProductDetail from '../components/ProductDetail/ProductDetail';

class ProductDetailContainer extends Component {
    componentDidMount () {
        this.props.fetchProductById(this.props.id)
    }

    renderContent () {
        const {product} = this.props
        return (
            <ProductDetail
            product={product} 
            />
        )
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
    fetchProductById
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)