import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getCartState } from '../localStorage'

import { deleteFromCart, changeQuantityCart } from '../actions';

import CartList from '../components/CartList/CartList'


class CartContainer extends Component {
    render() {
        return (
            <CartList
            cartList={this.props.cart}
            cartTotal={this.props.cartTotal}
            deleteFromCart={this.props.deleteFromCart}
            changeQuantityCart={this.props.changeQuantityCart}
            />
        )
    }
}

function mapStateToProps() {
    return {
        cart: getCartState().cart,
        cartTotal: getCartState().cartTotal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart: deleteFromCart,
        changeQuantityCart: changeQuantityCart,
    }, dispatch)
}

  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContainer);