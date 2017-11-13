import React, { Component } from 'react';
import { connect } from 'react-redux'

import CartList from '../components/CartList/CartList'


class CartContainer extends Component {
    render() {
        return (
            <CartList
            cartList={this.props.cart}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartList.cart,
    }
}
  
export default connect(
    mapStateToProps,
    null
)(CartContainer);