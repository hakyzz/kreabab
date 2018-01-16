import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteFromCart, changeQuantityCart } from '../actionCreators';

import CartList from '../components/CartList/CartList';
import { getCart, getCartTotal } from '../selectors/cart';

function mapStateToProps(state) {
    return {
        cart: getCart(state),
        cartTotal: getCartTotal(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart: deleteFromCart,
        changeQuantityCart: changeQuantityCart,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartList);