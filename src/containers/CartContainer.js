import React, { Component } from 'react';
import { connect } from 'react-redux'

import CartList from '../components/CartList/CartList'


class CartContainer extends Component {
    render() {
        return (
            <CartList
            cartList={this.props.cart}
            cartTotal={this.props.cartTotal}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartList.cart,
        cartTotal: state.cartList.cartTotal
    }
}
  
export default connect(
    mapStateToProps,
    null
)(CartContainer);