import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCartState } from '../localStorage'

import ShoppingBag from '../components/ShoppingBag/ShoppingBag'


class ShoppingBagContainer extends Component {
    render() {
        return (
            <ShoppingBag
            cartList={this.props.cart}
            cartTotalNoOfItems = {this.props.cartTotalNoOfItems}
            modifier={this.props.modifier}
            />
        )
    }
}

function mapStateToProps() {
    return {
        cart: getCartState().cart,
        cartTotalNoOfItems: getCartState().cartTotalNumberOfProducts
    }
}
  
export default connect(
    mapStateToProps,
    null
)(ShoppingBagContainer);