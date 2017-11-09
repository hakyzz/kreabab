import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import CartList from '../components/CartList/CartList'

const CartContainer = ({ products, total, checkout }) => (
    <CartList
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)} />
)

CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
}
  
const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})
  
export default connect(
    mapStateToProps,
    { checkout }
)(CartContainer)