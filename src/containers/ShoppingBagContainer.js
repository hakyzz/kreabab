import React, { Component } from 'react';
import { connect } from 'react-redux'

import ShoppingBag from '../components/ShoppingBag/ShoppingBag'


class ShoppingBagContainer extends Component {
    render() {
        return (
            <ShoppingBag
            cartList={this.props.cart}
            modifier={this.props.modifier}
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
)(ShoppingBagContainer);