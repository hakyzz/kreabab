import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductTeaser from '../components/ProductTeaser/ProductTeaser'
import ProductTeaserList from '../components/ProductTeaserList/ProductTeaserList'


const ProductsContainer = ({ products, addToCart }) => (

    <ProductTeaserList title="Hauptgerichte">
        {products.map(product =>
        <ProductTeaser
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)} />
        )}
    </ProductTeaserList>

)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)